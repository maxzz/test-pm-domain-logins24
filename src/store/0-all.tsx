import { atom, Getter } from "jotai";
import { debounce } from "@/utils";
import { createCreadAtoms, Creds, extractCreds, initialCreds } from "./1-creds-store";
import { createNavOptionAtoms, extractNavOptions, initialNavOptions, NavOptions } from "./2-nav-options";
import { createScreenLoginOptionAtoms, extractScreenLoginOptions, initialScreenLoginOptions, ScreenLoginOptions } from "./3-screen-options";

namespace Storage {
    const KEY = 'test-domain-logins24';

    type Store = {
        creds: Creds;
        navOptions: NavOptions;
        screenLoginOptions: ScreenLoginOptions,
    };
    
    export let initial: Store = {
        creds: { ...initialCreds },
        navOptions: { ...initialNavOptions },
        screenLoginOptions: { ...initialScreenLoginOptions },
    };
    
    function load() {
        const s = localStorage.getItem(KEY);
        if (s) {
            try {
                let obj = JSON.parse(s) as Store;
                const { creds, navOptions, screenLoginOptions, } = obj;
                initial.creds = { ...initialCreds, ...creds };
                initial.navOptions = { ...initialNavOptions, ...navOptions };
                initial.screenLoginOptions = { ...initialScreenLoginOptions, ...screenLoginOptions };
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

export const credAtoms = createCreadAtoms(Storage.initial.creds, Storage.save);
export const navOptionAtoms = createNavOptionAtoms(Storage.initial.navOptions, Storage.save);
export const screenLoginOptionAtoms = createScreenLoginOptionAtoms(Storage.initial.screenLoginOptions, Storage.save);

export const runCountdownAtom = atom<boolean>(false);
