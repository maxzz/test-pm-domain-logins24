import { useAtom } from "jotai";
import { screenLoginOptionAtoms } from "@/store/store";
import { Checkbox } from "./9-checkbox";

export function OptionInterval() {
    const [doInterval, setDoInterval] = useAtom(screenLoginOptionAtoms.doIntervalAtom);
    const [interval, setInterval] = useAtom(screenLoginOptionAtoms.intervalAtom);

    return (
        <div className="flex items-center">
            <Checkbox label="Reload interval" checked={doInterval} onChange={() => setDoInterval((v) => !v)} />

            {doInterval
                ? (
                    <div className="h-[18px] pl-1 pt-0.5">
                        <span className="font-bold">
                            {interval}
                        </span>
                        {' '}sec
                    </div>
                )
                : (
                    <div className="pl-1 flex items-center space-x-1">
                        <input
                            className="px-1 w-10 border-slate-400 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-slate-500 border rounded"
                            type="text"
                            value={interval} onChange={((e) => setInterval(+e.target.value))}
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
