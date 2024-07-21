import { atom, Getter } from "jotai";
import { debounce } from "@/utils";
import { createCreadAtoms, Creds, extractCreds, initialCreds } from "./1-creds-store";
import { createNavOptionAtoms, extractNavOptions, initialNavOptions, NavOptions } from "./2-nav-options";
import { createFormOptionAtoms, extractFormOptions, initialFormOptions, FormOptions } from "./3-screen-options";

namespace Storage {
    const KEY = 'test-domain-logins24';

    type Store = {
        creds: Creds;
        nav: NavOptions;
        form: FormOptions,
    };
    
    export let initial: Store = {
        creds: { ...initialCreds },
        nav: { ...initialNavOptions },
        form: { ...initialFormOptions },
    };
    
    function load() {
        const s = localStorage.getItem(KEY);
        if (s) {
            try {
                let obj = JSON.parse(s) as Store;
                const { creds, nav: navOptions, form: screenLoginOptions, } = obj;
                initial.creds = { ...initialCreds, ...creds };
                initial.nav = { ...initialNavOptions, ...navOptions };
                initial.form = { ...initialFormOptions, ...screenLoginOptions };
            } catch (error) {
            }
        }
    }

    load();

    export const saveDebounced = debounce(
        function _save(get: Getter) {
            const newStore: Store = {
                creds: extractCreds(credAtoms, get),
                nav: extractNavOptions(navOptionAtoms, get),
                form: extractFormOptions(formOptionAtoms, get)
            };

            localStorage.setItem(KEY, JSON.stringify(newStore));
        }, 1000
    );

    export const save = ({ get }: { get: Getter; }) => Storage.saveDebounced(get);
}

export const credAtoms = createCreadAtoms(Storage.initial.creds, Storage.save);
export const navOptionAtoms = createNavOptionAtoms(Storage.initial.nav, Storage.save);
export const formOptionAtoms = createFormOptionAtoms(Storage.initial.form, Storage.save);

export const runCountdownAtom = atom<boolean>(false);
