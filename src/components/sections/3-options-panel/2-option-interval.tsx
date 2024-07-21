import { useAtom } from "jotai";
import { screenLoginOptionAtoms } from "@/store";
import { Checkbox } from "./9-checkbox";

const inputClasses = "px-1 w-10 \
bg-sky-500/50 \
border-sky-500 \
focus:ring-sky-500 focus:ring-1 focus:ring-offset-1 focus:outline-none \
border rounded-sm";

export function OptionInterval() {
    const [doRunInterval, setDoRunInterval] = useAtom(screenLoginOptionAtoms.doRunIntervalAtom);
    const [intervalSec, setIntervalSec] = useAtom(screenLoginOptionAtoms.intervalSecAtom);

    return (
        <div className="flex items-center">
            <Checkbox label="Reload interval" checked={doRunInterval} onChange={() => setDoRunInterval((v) => !v)} />

            {doRunInterval
                ? (
                    <div className="h-[18px] pl-1 pt-0.5">
                        <span className="font-bold">
                            {intervalSec}
                        </span>
                        {' '}sec
                    </div>
                )
                : (
                    <div className="pl-1 flex items-center space-x-1">
                        <input
                            type="text"
                            className={inputClasses}
                            data-dbg-tm
                            value={intervalSec}
                            onChange={((e) => setIntervalSec(+e.target.value))}
                        />
                        <div>
                            sec
                        </div>
                    </div>
                )}
        </div>
    );
}
