import { Getter } from "jotai";
import { Atomize, atomWithCallback, OnValueChangeAny } from "@/util-hooks";
import { formOptionAtoms } from "./0-all";

export type NavOptions = {
    screenIdx: number;      // login (0) or cpass (1) screen
    showSearch: boolean;    // show search page
};

export const initialNavOptions: NavOptions = {
    screenIdx: 0,
    showSearch: false,
};

export function createNavOptionAtoms(initialValues: NavOptions, save: OnValueChangeAny): Atomize<NavOptions> {
    const rv: Atomize<NavOptions> = {
        screenIdxAtom: atomWithCallback(initialValues.screenIdx, save),

        showSearchAtom: atomWithCallback(initialValues.showSearch,
            ({ get, set, nextValue }) => {
                if (nextValue) {
                    set(formOptionAtoms.doRunIntervalAtom, false);
                }
                save({ get, set });
            }
        ),
    };
    return rv;
}

export function extractNavOptions(navOptionAtoms: Atomize<NavOptions>, get: Getter): NavOptions {
    const rv = {
        screenIdx: get(navOptionAtoms.screenIdxAtom),
        showSearch: get(navOptionAtoms.showSearchAtom),
    }
    return rv;
}
