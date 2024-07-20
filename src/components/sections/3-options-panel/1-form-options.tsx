import { screenLoginOptionAtoms } from "@/store/store";
import { classNames } from "@/utils";
import { useAtom } from "jotai";
import { Checkbox } from "./2-checkbox";
import { LevelSwitch } from "./3-level-switch";
import { OptionInterval } from "./3-option-interval";

export function FormOptions({ className, ...rest }: React.HTMLAttributes<HTMLDivElement>) {
    const { revealAtom, pageReloadAtom, useWebCompAtom, } = screenLoginOptionAtoms;

    const [reveal, setReveal] = useAtom(revealAtom);
    const [pageReload, setPageReload] = useAtom(pageReloadAtom);
    const [useWebComp, setUseWebComp] = useAtom(useWebCompAtom);

    return (
        <div className={classNames("px-2 py-1 text-xs bg-slate-100 border-slate-400 border rounded-sm shadow select-none", className)} {...rest}>
            <Checkbox label="Reveal passwords" checked={reveal} onChange={() => setReveal((v) => !v)} />

            <OptionInterval />

            <Checkbox label="Reload page vs. form" checked={pageReload} onChange={() => setPageReload((v) => !v)} />

            <div className="flex items-center">
                <Checkbox label="Use WebComponents" checked={useWebComp} onChange={() => setUseWebComp((v) => !v)} />

                <LevelSwitch className={useWebComp ? "" : "invisible"} />
            </div>
        </div>
    );
}
