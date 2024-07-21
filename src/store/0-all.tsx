import { atom, Getter, PrimitiveAtom, SetStateAction } from "jotai";
import { Atomize, atomWithCallback } from "@/util-hooks";
import { debounce } from "@/utils";
import { createCreadAtoms, Creds, extractCreds, initialCreds } from "./1-creds-store";
import { createNavOptionAtoms, extractNavOptions, initialNavOptions, NavOptions } from "./2-nav-options";
import { createScreenLoginOptionAtoms, extractScreenLoginOptions, initialScreenLoginOptions, ScreenLoginOptions } from "./3-screen-options";

//#region Storage

type Store = {
    creds: Creds;
    navOptions: NavOptions;
    screenLoginOptions: ScreenLoginOptions,
};

export let initialStoreData: Store = {
    creds: { ...initialCreds },
    navOptions: { ...initialNavOptions },
    screenLoginOptions: { ...initialScreenLoginOptions },
};

namespace Storage {
    const KEY = 'test-domain-logins24';

    function load() {
        const s = localStorage.getItem(KEY);
        if (s) {
            try {
                let obj = JSON.parse(s) as Store;
                const { creds, navOptions, screenLoginOptions, } = obj;
                // initialData = { ...initialData, creds: {...creds}, navOptions: {...navOptions}, screenLoginOptions: {...screenLoginOptions}, };
                initialStoreData.creds = { ...initialCreds, ...creds };
                initialStoreData.navOptions = { ...initialNavOptions, ...navOptions };
                initialStoreData.screenLoginOptions = { ...initialScreenLoginOptions, ...screenLoginOptions };
            } catch (error) {
            }
        }
    }

    load();

    export const saveDebounced = debounce(
        function _save(get: Getter) {
            const newStore: Store = {
                creds: extractCreds(credAtoms, get),
                navOptions: extractNavOptions(navOptionAtoms, get),
                screenLoginOptions: extractScreenLoginOptions(screenLoginOptionAtoms, get)
            };

            localStorage.setItem(KEY, JSON.stringify(newStore));
        }, 1000
    );

    export const save = ({ get }: { get: Getter; }) => Storage.saveDebounced(get);
}

//#endregion Storage

//#region Credential atoms

export const credAtoms = createCreadAtoms(initialStoreData.creds, Storage.save);

//#endregion Credential atoms

//#region NavOptions

export const navOptionAtoms = createNavOptionAtoms(initialStoreData.navOptions, Storage.save);

const _blankScreenAtom = atom<boolean>(false); // show blank screen before login/cpass screen reload

export const blankScreenAtom = atom(
    (get) => get(_blankScreenAtom),
    (get, set, show: SetStateAction<boolean>) => {
        const v = typeof show === 'function' ? show(get(_blankScreenAtom)) : show;

        if (!v && get(screenLoginOptionAtoms.doRunIntervalAtom)) {
            set(runCountdownAtom, true);
        }
        set(_blankScreenAtom, v);
    }
);

export const isLoginScreenAtom = atom(
    (get) => /* get(navOptionAtoms.screenIdxAtom) === 0 && */ !get(navOptionAtoms.showSearchAtom),
    // OK but no need:
    // (get, set, value: SetStateAction<boolean>) => {
    //     const v = typeof value === 'function' ? value(!get(navOptionAtoms.showSearchAtom)) : value;
    //     set(navOptionAtoms.showSearchAtom, !v);
    // }
);

export const doNextScreenAtom = atom(
    null,
    (get, set,) => {
        set(navOptionAtoms.screenIdxAtom, get(navOptionAtoms.screenIdxAtom) ? 0 : 1);
    });

export const doReloadScreenAtom = atom(
    null,
    (get, set,) => {
        if (get(screenLoginOptionAtoms.pageReloadAtom)) {
            window.location.reload();
        } else {
            set(blankScreenAtom, true);
        }
    }
);

//#endregion NavOptions

//#region ScreenOptions

export const screenLoginOptionAtoms = createScreenLoginOptionAtoms(initialStoreData.screenLoginOptions, Storage.save);

//#endregion ScreenOptions

//#region Countdown

const _countdownDisplayNumberAtom = atom(-2); // -1 is for inactive; 0 = for window.location.reload(); -2 initial state on page load

export const countdownDisplayNumberAtom = atom(
    (get) => get(_countdownDisplayNumberAtom),
    (get, set, value: SetStateAction<number>) => {
        const v = typeof value === 'function' ? value(get(_countdownDisplayNumberAtom)) : value;

        if (v === 0 && get(screenLoginOptionAtoms.doRunIntervalAtom)) {
            set(doReloadScreenAtom);
        }
        set(_countdownDisplayNumberAtom, v);
    }
);

export const isCountdownDoneAtom = atom<boolean>(
    (get) => {
        return get(_countdownDisplayNumberAtom) === 0;
    }
);

export const runCountdownAtom = atom<boolean>(false);

//#endregion Countdown

//TODO: check validity of intervalVal
