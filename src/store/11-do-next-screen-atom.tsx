import { atom } from "jotai";
import { navOptionAtoms } from "./0-all";

export const doNextScreenAtom = atom(
    null,
    (get, set) => {
        set(navOptionAtoms.screenIdxAtom, get(navOptionAtoms.screenIdxAtom) ? 0 : 1);
    }
);
