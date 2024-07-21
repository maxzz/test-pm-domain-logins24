import { atom } from "jotai";
import { screenLoginOptionAtoms } from "./0-all";
import { blankScreenAtom } from "./10-blank-screen-atom";

export const doReloadScreenAtom = atom(
    null,
    (get, set) => {
        if (get(screenLoginOptionAtoms.pageReloadAtom)) {
            window.location.reload();
        } else {
            set(blankScreenAtom, true);
        }
    }
);
