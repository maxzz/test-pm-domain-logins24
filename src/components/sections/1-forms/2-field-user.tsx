import { HTMLAttributes } from "react";
import { PrimitiveAtom, useAtom } from "jotai";

type FieldUserProps = HTMLAttributes<HTMLInputElement> & {
    fieldAtom: PrimitiveAtom<string>;
    fieldId: string;
    placeholder?: string;
};

export function FieldUsername({ fieldAtom, fieldId, placeholder = ' ', ...rest }: FieldUserProps) {
    const [value, setValue] = useAtom(fieldAtom);

    return (
        <label className="relative">
            <input
                className="py-1.5 w-full peer float-input border-slate-300 border"
                id={fieldId}
                type="text"
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
