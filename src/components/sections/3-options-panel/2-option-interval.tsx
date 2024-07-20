import { useAtom } from "jotai";
import { screenLoginOptionAtoms } from "@/store/store";
import { Checkbox } from "./9-checkbox";

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
                            className="px-1 w-10 border-slate-400 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-slate-500 border rounded"
                            type="text"
                            value={intervalSec} onChange={((e) => setIntervalSec(+e.target.value))}
                            data-dbg-tm
                        />
                        <div>
                            sec
                        </div>
                    </div>
                )}
        </div>
    );
}
