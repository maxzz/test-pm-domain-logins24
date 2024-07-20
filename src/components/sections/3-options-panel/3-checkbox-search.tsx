import { navOptionAtoms, doNextScreenAtom, isLoginScreenAtom } from "@/store/store";
import { classNames } from "@/utils";
import { useAtom, useSetAtom } from "jotai";
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

export function CheckboxSearch() {
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
                    onChange={() => setShowSearch((v) => !v)} />

                <div>
                    Search page
                </div>
            </label>

            {/* Button: Next */}
            <MountButtonNext showAtom={isLoginScreenAtom}>
                <input
                    type="button"
                    data-dbg-tm
                    className={classNames(input2Classes)}
                    value="Next"
                    onClick={doNextLoginOrCPassScreen}
                    title="Next screen" />
            </MountButtonNext>

        </div>
    );
}
