import { useSetAtom } from "jotai";
import { doNextScreenAtom, credAtoms } from "@/store/store";
import { FormHeader, FormType } from "./1-login-title";
import { FieldUsername } from "./2-field-user";
import { FieldPassword } from "./3-field-pass";
import { FieldSubmit } from "./4-field-submit";
import { boxShadow, formClasses, formFrameLClasses } from "./49-shared-styles";
import { Wrap } from "./51-wrap";

export function A1_FormLogin_Raw({ suffix = '' }: { suffix?: string; }) {
    const doNextLoginOrCPassScreen = useSetAtom(doNextScreenAtom);

    return (
        <Wrap level={1}>
            <form id="tm-login-a-form" className={formClasses} style={boxShadow}>

                <FormHeader formType={FormType.login} />

                <Wrap level={2} className="flex-1">
                    <div className={formFrameLClasses}>
                        <Wrap><FieldUsername fieldAtom={credAtoms.usernameAtom} fieldId={`user${suffix}`} placeholder="Username" /></Wrap>
                        <Wrap><FieldPassword fieldAtom={credAtoms.passwordAtom} fieldId={`pass${suffix}`} placeholder="Password" /></Wrap>
                    </div>
                </Wrap>

                <div className="self-end">
                    <FieldSubmit className="m-4" label="Log in" onClick={(e) => { e.preventDefault(); doNextLoginOrCPassScreen(); }} />
                </div>

            </form>
        </Wrap>
    );
}

export function A1_FormLogin({ suffix = '' }: { suffix?: string; }) {

    // The following code will trigger warning: Attempted to synchronously unmount a root while React was already rendering.
    // const useWebComponents = useAtomValue(screenLoginOptionAtoms.useWebCompAtom);
    // if (useWebComponents) {
    //     return <div><web-wrapshadow-login /></div>;
    // }

    return (
        <A1_FormLogin_Raw suffix={suffix} />
    );
}
