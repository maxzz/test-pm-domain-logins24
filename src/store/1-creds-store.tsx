import { Atomize, OnValueChangeAny } from "@/util-hooks";
import { createAtomizedAtoms } from "./9-create-atomized-atoms";
import { Getter } from "jotai";

export type Creds = {
    username: string;       // username
    password: string;       // current password
    updtpass: string;       // new password
    confpass: string;       // confirm new password
    searchAA: string;       // search text for AA screen
};

export const initialCreds: Creds = {
    username: '',
    password: '',
    updtpass: '',
    confpass: '',
    searchAA: '',
};

//export type CredsAtoms = Prettify<Atomize<Creds>>;

export function createCreadAtoms<T>(initialValues: T, save: OnValueChangeAny): Atomize<T> {
    const rv = createAtomizedAtoms(initialValues, save);
    return rv;
}

export function extractCreds<T>(credAtoms: Atomize<Creds>, get: Getter): Creds {
    const rv = {
        username: get(credAtoms.usernameAtom),
        password: get(credAtoms.passwordAtom),
        updtpass: get(credAtoms.updtpassAtom),
        confpass: get(credAtoms.confpassAtom),
        searchAA: get(credAtoms.searchAAAtom),
    }
    return rv;
}
