import { PrimitiveAtom } from "jotai";
import { Atomize, atomWithCallback, OnValueChangeAny } from "@/util-hooks";

export function createAtomizedAtoms<T>(initialValues: T, save: OnValueChangeAny): Atomize<T> {
    const atoms: any = {};

    for (const key in initialValues) {
        atoms[`${key}Atom`] = atomWithCallback(initialValues[key], save) as PrimitiveAtom<T[keyof T]>;
    }

    return atoms  as Atomize<T>;
}
