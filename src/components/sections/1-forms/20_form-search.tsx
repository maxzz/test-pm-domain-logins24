import { useSetAtom } from "jotai";
import { navOptionAtoms, credAtoms } from "@/store/store";
import { FormHeader, FormType } from "./1-login-title";
import { FieldUsername } from "./2-field-user";
import { FieldSubmit } from "./4-field-submit";
import { boxShadow, formFrameSClasses } from "./49-shared-styles";

export function A1_FormSearch({ suffix = '' }: { suffix?: string; }) {
    const showSearch = useSetAtom(navOptionAtoms.showSearchAtom);

    return (<>
        {/* Don't use 'search' word in form name or field names/IDs */}
        <form id="tm-sear-form" className="flex flex-col rounded-sm bg-slate-50 border-slate-300 border" style={boxShadow}>

            <FormHeader formType={FormType.search} />

            <div className={formFrameSClasses}>
                <div className="flex items-center space-x-2">
                    <FieldUsername fieldAtom={credAtoms.searchAAAtom} fieldId={`sear${suffix}`} placeholder="Search" />

                    <div>
                        <select className="h-[37px] px-1 py-1.5 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-slate-500 border-slate-300 border" name="state">
                            <option value="">CA</option>
                            <option value="">WA</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="self-end">
                <FieldSubmit className="m-4" label="Search" onClick={(e) => { e.preventDefault(); showSearch(false); }} />
            </div>

        </form>
    </>);
}
