import { HTMLAttributes } from "react";
import { useAtom } from "jotai";
import { formOptionAtoms } from "@/store";
import { classNames } from "@/utils";
import { OptionInterval } from "./2-option-interval";
import { LevelSwitch } from "./8-level-switch";
import { Checkbox } from "./9-checkbox";

export function FormOptions({ className, ...rest }: HTMLAttributes<HTMLDivElement>) {
    const { revealAtom, twoPswLoginAtom, pageReloadAtom, useFormAsWebCompAtom, useWebCompAtom, } = formOptionAtoms;

    const [reveal, setReveal] = useAtom(revealAtom);
    const [twoPswLogin, setTwoPswLogin] = useAtom(twoPswLoginAtom);
    const [pageReload, setPageReload] = useAtom(pageReloadAtom);
    const [useFormAsWebComp, setUseFormAsWebComp] = useAtom(useFormAsWebCompAtom);
    const [useWebComp, setUseWebComp] = useAtom(useWebCompAtom);

    return (
        <div className={classNames("px-2 py-1 text-[.65rem] font-light rounded shadow select-none flex flex-col gap-1", className)} {...rest}>
            <Checkbox label="Reveal passwords" checked={reveal} onChange={() => setReveal((v) => !v)} />

            <Checkbox label="Use two password login form" checked={twoPswLogin} onChange={() => setTwoPswLogin((v) => !v)} />
            
            <OptionInterval />

            <Checkbox label="Reload the page instead of form" checked={pageReload} onChange={() => setPageReload((v) => !v)} />

            <Checkbox label="Use form as WebComponents" checked={useFormAsWebComp} onChange={() => setUseFormAsWebComp((v) => !v)} title="This is just to show <form> element inside shadowRoot wo/ using <slot>" />

            <div className="flex items-center gap-1">
                <Checkbox label="Use WebComponents" checked={useWebComp} onChange={() => setUseWebComp((v) => !v)} />

                <LevelSwitch className={useWebComp ? "" : "invisible"} />
            </div>
        </div>
    );
}

//TODO: hot keys for Use webComponents switch
