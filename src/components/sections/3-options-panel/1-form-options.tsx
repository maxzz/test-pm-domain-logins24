import { HTMLAttributes } from "react";
import { useAtom } from "jotai";
import { formOptionAtoms } from "@/store";
import { classNames } from "@/utils";
import { OptionInterval } from "./2-option-interval";
import { LevelSwitch } from "./8-level-switch";
import { Checkbox } from "./9-checkbox";

export function FormOptions({ className, ...rest }: HTMLAttributes<HTMLDivElement>) {
    const { revealAtom, pageReloadAtom, useWebCompAtom, } = formOptionAtoms;

    const [reveal, setReveal] = useAtom(revealAtom);
    const [pageReload, setPageReload] = useAtom(pageReloadAtom);
    const [useWebComp, setUseWebComp] = useAtom(useWebCompAtom);

    return (
        <div className={classNames("px-2 py-1 text-[.65rem] font-light rounded shadow select-none flex flex-col gap-0.5", className)} {...rest}>
            <Checkbox label="Reveal passwords" checked={reveal} onChange={() => setReveal((v) => !v)} />

            <OptionInterval />

            <Checkbox label="Reload the page instead of form" checked={pageReload} onChange={() => setPageReload((v) => !v)} />

            <div className="flex items-center gap-1">
                <Checkbox label="Use WebComponents" checked={useWebComp} onChange={() => setUseWebComp((v) => !v)} />

                <LevelSwitch className={useWebComp ? "" : "invisible"} />
            </div>
        </div>
    );
}

//TODO: hot keys for Use webComponents switch
