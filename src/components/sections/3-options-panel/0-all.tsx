import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { doNextScreenAtom, isLoginScreenAtom, navOptionAtoms } from "@/store/store";
import { classNames } from "@/utils";
import { FormOptions } from "./1-form-options";
import { MountButtonNext } from "./4-mount-button-next";

const input1Classes = "size-5 form-checkbox text-slate-400 focus:ring-slate-500 focus:ring-1 rounded cursor-pointer";
const input2Classes = "\
px-4 py-1 \
border-slate-400 \
hover:bg-slate-300 \
focus:bg-slate-300 \
focus:ring-slate-500 focus:ring-1 focus:ring-offset-2 \
border rounded \
active:scale-[.97] \
cursor-pointer \
outline-none";

function CheckboxSearch() {
    const [showSearch, setShowSearch] = useAtom(navOptionAtoms.showSearchAtom);
    const doNextLoginOrCPassScreen = useSetAtom(doNextScreenAtom);

    return (
        <div className="h-9 flex items-center justify-between">

            {/* Checkbox: Show search page */}
            <label className="flex items-center justify-center space-x-2 cursor-pointer">
                <input
                    type="checkbox"
                    data-dbg-tm
                    className={input1Classes}
                    checked={showSearch}
                    onChange={() => setShowSearch((v) => !v)}
                />

                <div>
                    Search page
                </div>
            </label>

            {/* Button: Next */}
            <MountButtonNext showAtom={isLoginScreenAtom}>
                <input
                    type="button"
                    data-dbg-tm
                    className={classNames(input2Classes, /*showSearch && 'invisible'*/)}
                    value="Next"
                    onClick={doNextLoginOrCPassScreen}
                    title="Next screen"
                />
            </MountButtonNext>

        </div>
    );
}

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

//TODO: hot keys for Use webComponents switch
