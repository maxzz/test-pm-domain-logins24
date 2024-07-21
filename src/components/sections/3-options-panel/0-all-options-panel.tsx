import { useAtomValue } from "jotai";
import { isLoginScreenAtom } from "@/store";
import { FormOptions } from "./1-form-options";
import { CheckboxSearchNext } from "./3-checkbox-search-next";
import { classNames } from "@/utils";

export function OptionsPanel() {
    const isLoginScreen = useAtomValue(isLoginScreenAtom);

    return (
        <div className="px-4 py-3 font-montserrat bg-sky-900/50 rounded select-none flex flex-col justify-center gap-2">
            {/*
            <MountOptions showAtom={isLoginScreenAtom}>
                <FormOptions className={`${!isLoginScreen && 'invisible'}`} />
            </MountOptions>
            */}

            <FormOptions className={classNames("py-3 text-sky-100 bg-sky-700/50 border-sky-700/20 border", !isLoginScreen && "invisible")} />

            <CheckboxSearchNext className="text-slate-200" />
        </div>
    );
}
