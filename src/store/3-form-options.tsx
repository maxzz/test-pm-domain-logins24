import { Atomize, atomWithCallback, OnValueChangeAny } from "@/util-hooks";
import { Getter } from "jotai";

export type FormOptions = {
    reveal: boolean;        // Show or hide password field
    twoPswLogin: boolean;   // Use login form with two password
    doRunInterval: boolean; // Use reload interval
    intervalSec: number;    // Interval in seconds
    pageReload: boolean;    // Reload page vs. form
    useFormAsWebComp: boolean; // Use form as WebComponents
    useWebComp: boolean;    // Use WebComponents
    nestLevel: number;      // Show WebComponents at nested level N
};

export const enum CONST {
    MaxLevel = 3,
}

export const initialFormOptions: FormOptions = {
    reveal: false,
    twoPswLogin: false,
    doRunInterval: false,
    intervalSec: 10,
    pageReload: false,
    useFormAsWebComp: false,
    useWebComp: false,
    nestLevel: CONST.MaxLevel,
};

export function createFormOptionAtoms(initialValues: FormOptions, save: OnValueChangeAny): Atomize<FormOptions> {
    const rv: Atomize<FormOptions> = {
        revealAtom: atomWithCallback(initialValues.reveal, save),
        twoPswLoginAtom: atomWithCallback(initialValues.twoPswLogin, save),
        doRunIntervalAtom: atomWithCallback(initialValues.doRunInterval, save),
        intervalSecAtom: atomWithCallback(initialValues.intervalSec, save),
        pageReloadAtom: atomWithCallback(initialValues.pageReload, save),
        useFormAsWebCompAtom: atomWithCallback(initialValues.useFormAsWebComp, save),
        useWebCompAtom: atomWithCallback(initialValues.useWebComp, save),
        nestLevelAtom: atomWithCallback(initialValues.nestLevel, save),
    };
    return rv;
}

export function extractFormOptions(screenLoginOptionAtoms: Atomize<FormOptions>, get: Getter): FormOptions {
    const rv = {
        reveal: get(screenLoginOptionAtoms.revealAtom),
        twoPswLogin: get(screenLoginOptionAtoms.twoPswLoginAtom),
        doRunInterval: get(screenLoginOptionAtoms.doRunIntervalAtom),
        intervalSec: get(screenLoginOptionAtoms.intervalSecAtom),
        pageReload: get(screenLoginOptionAtoms.pageReloadAtom),
        useFormAsWebComp: get(screenLoginOptionAtoms.useFormAsWebCompAtom),
        useWebComp: get(screenLoginOptionAtoms.useWebCompAtom),
        nestLevel: get(screenLoginOptionAtoms.nestLevelAtom),
    }
    return rv;
}
