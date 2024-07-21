import { atom, SetStateAction } from "jotai";
import { navOptionAtoms, runCountdownAtom, formOptionAtoms } from "./0-all";

const _blankScreenAtom = atom<boolean>(false); // show blank screen before login/cpass screen reload

export const blankScreenAtom = atom(
    (get) => get(_blankScreenAtom),
    (get, set, show: SetStateAction<boolean>) => {
        const v = typeof show === 'function' ? show(get(_blankScreenAtom)) : show;

        if (!v && get(formOptionAtoms.doRunIntervalAtom)) {
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
