import { useAtom, useSetAtom } from "jotai";
import { navOptionAtoms, doNextScreenAtom, isLoginScreenAtom } from "@/store";
import { classNames } from "@/utils";
import { MountButtonNext } from "./4-mount-button-next";
import { checkboxClasses } from "./9-checkbox";

const inputCheckboxLocalClasses = "size-3 form-checkbox text-slate-400 focus:ring-slate-500 focus:ring-1 rounded cursor-pointer";

const inputButtonClasses = "\
px-4 py-1 text-base font-ui \
border-slate-400 \
hover:bg-sky-600 \
focus:bg-sky-700 \
focus:ring-slate-500 focus:ring-1 focus:ring-offset-2 \
border rounded \
active:scale-[.97] \
cursor-pointer \
outline-none";

export function CheckboxSearchNext({ className, ...rest }: React.HTMLAttributes<HTMLDivElement>) {
    const [showSearch, setShowSearch] = useAtom(navOptionAtoms.showSearchAtom);
    const doNextLoginOrCPassScreen = useSetAtom(doNextScreenAtom);

    return (
        <div className={classNames("h-9 flex items-center justify-between", className)} {...rest}>

            {/* Checkbox: Show search page */}
            <label className="pl-2 flex items-center justify-center space-x-2 cursor-pointer">
                <input
                    type="checkbox"
                    data-dbg-tm
                    className={checkboxClasses}
                    checked={showSearch}
                    onChange={() => setShowSearch((v) => !v)}
                />

                <div className="text-xs font-light font-ui">
                    Search page
                </div>
            </label>

            {/* Button: Next */}
            <MountButtonNext showAtom={isLoginScreenAtom}>
                <input
                    type="button"
                    data-dbg-tm
                    className={classNames(inputButtonClasses)}
                    value="Next"
                    onClick={doNextLoginOrCPassScreen}
                    title="Next screen"
                />
            </MountButtonNext>
        </div>
    );
}
