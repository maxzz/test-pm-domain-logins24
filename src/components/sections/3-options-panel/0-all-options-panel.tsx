import { useAtomValue } from "jotai";
import { isLoginScreenAtom } from "@/store/store";
import { FormOptions } from "./1-form-options";
import { CheckboxSearch } from "./3-checkbox-search";

export function OptionsPanel() {
    const isLoginScreen = useAtomValue(isLoginScreenAtom);

    return (
        <div className="self-center w-[290px] bg-slate-100 border-slate-200 border rounded-sm select-none flex flex-col justify-center gap-2">
            {/*
            <MountOptions showAtom={isLoginScreenAtom}>
                <FormOptions className={`${!isLoginScreen && 'invisible'}`} />
            </MountOptions>
            */}

            <FormOptions className={`${!isLoginScreen && "invisible"}`} />

            <CheckboxSearch />
        </div>
    );
}
