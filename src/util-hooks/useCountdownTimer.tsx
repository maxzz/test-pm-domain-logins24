import { useCallback, useEffect, useRef, useState } from "react";
import { PrimitiveAtom, useAtom, useAtomValue, useSetAtom } from "jotai";
import { countdownDisplayNumberAtom, runCountdownAtom, screenLoginOptionAtoms } from "@/store/store";

type useCountdownTimerProps = {
    intervalSecVal: number;
    countdownDisplayNumberAtom: PrimitiveAtom<number>;
    runCountdownAtom: PrimitiveAtom<boolean>;
};

export function useCountdownTimer({ intervalSecVal, countdownDisplayNumberAtom, runCountdownAtom }: useCountdownTimerProps) {
    const setCountdownDisplayNumber = useSetAtom(countdownDisplayNumberAtom);
    const [isRunning, setIsRunning] = useAtom(runCountdownAtom);

    const [localIsRunning, setLocalIsRunning] = useState(false);
    const intervalIdRef = useRef<ReturnType<typeof setInterval>>();

    const stopInterval = useCallback(() => { clearInterval(intervalIdRef.current); intervalIdRef.current = undefined; }, []);

    useEffect(
        () => {
            if (isRunning && intervalSecVal > 0) {
                stopInterval();
                setCountdownDisplayNumber(intervalSecVal);
                setLocalIsRunning(true);
            } else {
                setLocalIsRunning(false);
            }
        }, [isRunning, intervalSecVal]
    );

    useEffect(
        () => {
            if (localIsRunning) {
                intervalIdRef.current = setInterval(
                    () => {
                        setCountdownDisplayNumber(
                            (v) => {
                                v--;
                                v < 0 && setIsRunning(false);
                                return v;
                            }
                        );
                    }, 1000
                );
            } else {
                stopInterval();
                setCountdownDisplayNumber(-1);
            }
        }, [localIsRunning]
    );

    useEffect(() => stopInterval, []);
}

export function HiddenCountdownTimer() {
    const doRunInterval = useAtomValue(screenLoginOptionAtoms.doRunIntervalAtom);
    const intervalSecVal = useAtomValue(screenLoginOptionAtoms.intervalSecAtom);

    useCountdownTimer({ intervalSecVal, countdownDisplayNumberAtom: countdownDisplayNumberAtom, runCountdownAtom });

    const runCountdown = useSetAtom(runCountdownAtom);
    useEffect(
        () => {
            runCountdown(doRunInterval);
        },
        [doRunInterval, intervalSecVal]
    );

    return null;
}
