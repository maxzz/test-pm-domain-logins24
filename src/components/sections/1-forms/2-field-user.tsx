import { HTMLAttributes } from "react";
import { PrimitiveAtom, useAtom, useAtomValue } from "jotai";
import { formOptionAtoms } from "@/store";

type FieldUserProps = HTMLAttributes<HTMLInputElement> & {
    fieldAtom: PrimitiveAtom<string>;
    fieldId: string;
    placeholder?: string;
};

export function FieldUsername({ fieldAtom, fieldId, placeholder = ' ', ...rest }: FieldUserProps) {
    const twoPswLogin = useAtomValue(formOptionAtoms.twoPswLoginAtom);
    const [value, setValue] = useAtom(fieldAtom);

    return (
        <label className="relative">
            <input
                className="py-1.5 w-full peer float-input border-slate-300 border"
                id={twoPswLogin ? "username_id": fieldId} // "username_id" is to test BOC login, SFLINK-1354, 07.26.24
                type={twoPswLogin ? "password" : "text"}
                placeholder={placeholder}
                value={value}
                onChange={((e) => setValue(e.target.value))}
                {...rest}
            />
            
            <div className="float-label">
                {placeholder}
            </div>
        </label>
    );
}
