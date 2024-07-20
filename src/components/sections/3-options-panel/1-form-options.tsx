import { HTMLAttributes } from "react";
import { useAtom } from "jotai";
import { screenLoginOptionAtoms } from "@/store/store";
import { classNames } from "@/utils";
import { OptionInterval } from "./2-option-interval";
import { LevelSwitch } from "./8-level-switch";
import { Checkbox } from "./9-checkbox";

export function FormOptions({ className, ...rest }: HTMLAttributes<HTMLDivElement>) {
    const { revealAtom, pageReloadAtom, useWebCompAtom, } = screenLoginOptionAtoms;

    const [reveal, setReveal] = useAtom(revealAtom);
    const [pageReload, setPageReload] = useAtom(pageReloadAtom);
    const [useWebComp, setUseWebComp] = useAtom(useWebCompAtom);

    return (
        <div className={classNames("px-2 py-1 text-xs bg-slate-100 border-slate-400 border rounded-sm shadow select-none", className)} {...rest}>
            <Checkbox label="Reveal passwords" checked={reveal} onChange={() => setReveal((v) => !v)} />

            <OptionInterval />

            <Checkbox label="Reload the page instead of form" checked={pageReload} onChange={() => setPageReload((v) => !v)} />

            <div className="flex items-center">
                <Checkbox label="Use WebComponents" checked={useWebComp} onChange={() => setUseWebComp((v) => !v)} />

                <LevelSwitch className={useWebComp ? "" : "invisible"} />
            </div>
        </div>
    );
}

//TODO: hot keys for Use webComponents switch
