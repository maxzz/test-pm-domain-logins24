import { atom } from "jotai";
import { formOptionAtoms } from "./0-all";
import { blankScreenAtom } from "./10-blank-screen-atom";

export const doReloadScreenAtom = atom(
    null,
    (get, set) => {
        if (get(formOptionAtoms.pageReloadAtom)) {
            window.location.reload();
        } else {
            set(blankScreenAtom, true);
        }
    }
);
