import { Atomize, atomWithCallback, OnValueChangeAny } from "@/util-hooks";
import { Getter } from "jotai";

export type ScreenLoginOptions = {
    reveal: boolean;        // Show or hide password field
    doRunInterval: boolean; // Use reload interval
    intervalSec: number;    // Interval in seconds
    pageReload: boolean;    // Reload page vs. form
    useWebComp: boolean;    // Use WebComponents
    nestLevel: number;      // Show WebComponents at nested level N
};

export const enum CONST {
    MaxLevel = 3,
}

export const initialScreenLoginOptions: ScreenLoginOptions = {
    reveal: false,
    doRunInterval: false,
    intervalSec: 10,
    pageReload: false,
    useWebComp: false,
    nestLevel: CONST.MaxLevel,
};

export function createScreenLoginOptionAtoms(initialValues: ScreenLoginOptions, save: OnValueChangeAny): Atomize<ScreenLoginOptions> {
    const rv: Atomize<ScreenLoginOptions> = {
        revealAtom: atomWithCallback(initialValues.reveal, save),
        doRunIntervalAtom: atomWithCallback(initialValues.doRunInterval, save),
        intervalSecAtom: atomWithCallback(initialValues.intervalSec, save),
        pageReloadAtom: atomWithCallback(initialValues.pageReload, save),
        useWebCompAtom: atomWithCallback(initialValues.useWebComp, save),
        nestLevelAtom: atomWithCallback(initialValues.nestLevel, save),
    };
    return rv;
}

export function extractScreenLoginOptions(screenLoginOptionAtoms: Atomize<ScreenLoginOptions>, get: Getter): ScreenLoginOptions {
    const rv = {
        reveal: get(screenLoginOptionAtoms.revealAtom),
        doRunInterval: get(screenLoginOptionAtoms.doRunIntervalAtom),
        intervalSec: get(screenLoginOptionAtoms.intervalSecAtom),
        pageReload: get(screenLoginOptionAtoms.pageReloadAtom),
        useWebComp: get(screenLoginOptionAtoms.useWebCompAtom),
        nestLevel: get(screenLoginOptionAtoms.nestLevelAtom),
    }
    return rv;
}
