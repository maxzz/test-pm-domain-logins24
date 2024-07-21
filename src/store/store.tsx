import { atom, Getter, PrimitiveAtom, SetStateAction } from 'jotai';
import { Atomize, atomWithCallback } from '@/util-hooks';
import { debounce } from '@/utils';
import { createCreadAtoms } from './1-creds-store';

export const enum CONST {
    MaxLevel = 3,
}

//#region Storage

type Store = {
    creds: Creds;
    navOptions: NavOptions;
    screenLoginOptions: ScreenLoginOptions,
};

export let initialStoreData: Store = {
    creds: {
        username: '',
        password: '',
        updtpass: '',
        confpass: '',
        searchAA: '',
    },
    navOptions: {
        screenIdx: 0,
        showSearch: false,
    },
    screenLoginOptions: {
        reveal: false,
        doRunInterval: false,
        intervalSec: 10,
        pageReload: false,
        useWebComp: false,
        nestLevel: CONST.MaxLevel,
    },
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
                initialStoreData.creds = { ...initialStoreData.creds, ...creds };
                initialStoreData.navOptions = { ...initialStoreData.navOptions, ...navOptions };
                initialStoreData.screenLoginOptions = { ...initialStoreData.screenLoginOptions, ...screenLoginOptions };
            } catch (error) {
            }
        }
    }

    load();

    export const saveDebounced = debounce(function _save(get: Getter) {
        let newStore: Store = {
            creds: {
                username: get(credAtoms.usernameAtom),
                password: get(credAtoms.passwordAtom),
                updtpass: get(credAtoms.updtpassAtom),
                confpass: get(credAtoms.confpassAtom),
                searchAA: get(credAtoms.searchAAAtom),
            },
            navOptions: {
                screenIdx: get(navOptionAtoms.screenIdxAtom),
                showSearch: get(navOptionAtoms.showSearchAtom),
            },
            screenLoginOptions: {
                reveal: get(screenLoginOptionAtoms.revealAtom),
                doRunInterval: get(screenLoginOptionAtoms.doRunIntervalAtom),
                intervalSec: get(screenLoginOptionAtoms.intervalSecAtom),
                pageReload: get(screenLoginOptionAtoms.pageReloadAtom),
                useWebComp: get(screenLoginOptionAtoms.useWebCompAtom),
                nestLevel: get(screenLoginOptionAtoms.nestLevelAtom),
            },
        };
        localStorage.setItem(KEY, JSON.stringify(newStore));
    }, 1000);

    export const save = ({ get }: { get: Getter; }) => Storage.saveDebounced(get);
}

// console.log('level', CONST.MaxLevel);
// console.log('Storage', initialStoreData);

//#endregion Storage

//#region Credential atoms

type Creds = {
    username: string;       // username
    password: string;       // current password
    updtpass: string;       // new password
    confpass: string;       // confirm new password
    searchAA: string;       // search text for AA screen
};

// export const credAtoms: Atomize<Creds> = {
//     usernameAtom: atomWithCallback(initialStoreData.creds.username, Storage.save),
//     passwordAtom: atomWithCallback(initialStoreData.creds.password, Storage.save),
//     updtpassAtom: atomWithCallback(initialStoreData.creds.updtpass, Storage.save),
//     confpassAtom: atomWithCallback(initialStoreData.creds.confpass, Storage.save),
//     searchAAAtom: atomWithCallback(initialStoreData.creds.searchAA, Storage.save),
// };
export const credAtoms: Atomize<Creds> = createCreadAtoms(initialStoreData.creds, Storage.save);

//#endregion Credential atoms

//#region NavOptions

type NavOptions = {
    screenIdx: number;      // login (0) or cpass (1) screen
    showSearch: boolean;    // show search page
};

const _blankScreenAtom = atom<boolean>(false); // show blank screen before login/cpass screen reload

export const navOptionAtoms: Atomize<NavOptions> & { blankScreenAtom: PrimitiveAtom<boolean>; } = {
    screenIdxAtom: atomWithCallback(initialStoreData.navOptions.screenIdx, Storage.save),

    showSearchAtom: atomWithCallback(initialStoreData.navOptions.showSearch,
        ({ get, set, nextValue }) => {
            if (nextValue) {
                set(screenLoginOptionAtoms.doRunIntervalAtom, false);
            }
            Storage.save({ get });
        }
    ),

    blankScreenAtom: atom(
        (get) => get(_blankScreenAtom),
        (get, set, show: SetStateAction<boolean>) => {
            const v = typeof show === 'function' ? show(get(_blankScreenAtom)) : show;

            if (!v && get(screenLoginOptionAtoms.doRunIntervalAtom)) {
                set(runCountdownAtom, true);
            }
            set(_blankScreenAtom, v);
        }
    ),
};

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
            set(navOptionAtoms.blankScreenAtom, true);
        }
    }
);

//#endregion NavOptions

//#region ScreenOptions

type ScreenLoginOptions = {
    reveal: boolean;        // Show or hide password field
    doRunInterval: boolean; // Use reload interval
    intervalSec: number;    // Interval in seconds
    pageReload: boolean;    // Reload page vs. form
    useWebComp: boolean;    // Use WebComponents
    nestLevel: number;      // Show WebComponents at nested level N
};

export const screenLoginOptionAtoms: Atomize<ScreenLoginOptions> = {
    revealAtom: atomWithCallback(initialStoreData.screenLoginOptions.reveal, Storage.save),
    doRunIntervalAtom: atomWithCallback(initialStoreData.screenLoginOptions.doRunInterval, Storage.save),
    intervalSecAtom: atomWithCallback(initialStoreData.screenLoginOptions.intervalSec, Storage.save),
    pageReloadAtom: atomWithCallback(initialStoreData.screenLoginOptions.pageReload, Storage.save),
    useWebCompAtom: atomWithCallback(initialStoreData.screenLoginOptions.useWebComp, Storage.save),
    nestLevelAtom: atomWithCallback(initialStoreData.screenLoginOptions.nestLevel, Storage.save),
};

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
