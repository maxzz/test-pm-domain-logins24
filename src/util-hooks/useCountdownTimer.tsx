import { useCallback, useEffect, useRef, useState } from "react";
import { PrimitiveAtom, useAtom, useAtomValue, useSetAtom } from "jotai";
import { countdownAtom, runCountdownAtom, screenLoginOptionAtoms } from "@/store/store";

type useCountdownTimerProps = {
    intervalVal: number;
    countdownAtom: PrimitiveAtom<number>;
    runCountdownAtom: PrimitiveAtom<boolean>;
};

export function useCountdownTimer({ intervalVal, countdownAtom, runCountdownAtom }: useCountdownTimerProps) {
    const setCounter = useSetAtom(countdownAtom);
    const [isRunning, setIsRunning] = useAtom(runCountdownAtom);
    const [running, setRunning] = useState(false);

    const intervalIdRef = useRef<ReturnType<typeof setInterval>>();

    const stopTimer = useCallback(
        () => {
            clearInterval(intervalIdRef.current);
            intervalIdRef.current = undefined;
        }, []
    );

    useEffect(
        () => {
            if (isRunning && intervalVal > 0) {
                stopTimer();
                setCounter(intervalVal);
                setRunning(true);
            } else {
                setRunning(false);
            }
        }, [isRunning, setCounter]
    );

    useEffect(
        () => {
            if (running) {
                intervalIdRef.current = setInterval(
                    () => {
                        setCounter(
                            (v) => {
                                v--;
                                v < 0 && setIsRunning(false);
                                return v;
                            }
                        );
                    }, 1000
                );
            } else {
                stopTimer();
                setCounter(-1);
            }
        }, [running, setCounter]
    );

    useEffect(() => stopTimer, []);
}

export function HiddenCountdownTimer() {
    const doInterval = useAtomValue(screenLoginOptionAtoms.doIntervalAtom);
    const intervalVal = useAtomValue(screenLoginOptionAtoms.intervalAtom);

    useCountdownTimer({ intervalVal, countdownAtom, runCountdownAtom });

    const runCountdown = useSetAtom(runCountdownAtom);
    useEffect(
        () => {
            runCountdown(doInterval);
        }, [doInterval, intervalVal]
    );

    return null;
}
