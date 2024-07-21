import { atom, SetStateAction } from "jotai";
import { formOptionAtoms } from "./0-all";
import { doReloadScreenAtom } from "./12-do-reload-screen-atom";

//#endregion ScreenOptions
//#region Countdown
const _countdownDisplayNumberAtom = atom(-2); // -1 is for inactive; 0 = for window.location.reload(); -2 initial state on page load


export const countdownDisplayNumberAtom = atom(
    (get) => get(_countdownDisplayNumberAtom),
    (get, set, value: SetStateAction<number>) => {
        const v = typeof value === 'function' ? value(get(_countdownDisplayNumberAtom)) : value;

        if (v === 0 && get(formOptionAtoms.doRunIntervalAtom)) {
            set(doReloadScreenAtom);
        }
        set(_countdownDisplayNumberAtom, v);
    }
);

export const isCountdownDoneAtom = atom<boolean>(
    (get) => {
        return get(_countdownDisplayNumberAtom) === 0;
    }
);
