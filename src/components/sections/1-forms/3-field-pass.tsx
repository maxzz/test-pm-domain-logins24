import { HTMLAttributes } from "react";
import { PrimitiveAtom, useAtom, useAtomValue } from "jotai";
import { screenLoginOptionAtoms } from "@/store/store";

type FieldPassProps = HTMLAttributes<HTMLInputElement> & {
    fieldAtom: PrimitiveAtom<string>;
    fieldId: string;
    placeholder: string;
};

export function FieldPassword({ fieldAtom, fieldId, placeholder = ' ', ...rest }: FieldPassProps) {
    const [value, setValue] = useAtom(fieldAtom);
    const reveal = useAtomValue(screenLoginOptionAtoms.revealAtom);
    return (
        <label className="relative">
            <input
                className="py-1.5 w-full peer float-input border-slate-300 border"
                id={fieldId}
                type={reveal ? "text" : "password"}
                placeholder={placeholder}
                autoComplete="current-password"
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
