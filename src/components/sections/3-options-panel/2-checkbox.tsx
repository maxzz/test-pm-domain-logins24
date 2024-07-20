import { InputHTMLAttributes } from "react";

const checkboxClasses = "\
size-3 \
form-checkbox text-slate-400 \
focus:ring-1 focus:ring-offset-1 focus:ring-slate-500 \
rounded cursor-pointer";

type CheckboxProps = InputHTMLAttributes<HTMLInputElement> & {
    label: string;
};

export function Checkbox({ label, checked, onChange }: CheckboxProps) {
    return (
        <label className="flex items-center space-x-2 cursor-pointer">
            <input
                type="checkbox"
                data-dbg-tm
                className={checkboxClasses}
                {...{ checked, onChange }}
            />
            <div className="whitespace-nowrap">{label}</div>
        </label>
    );
}
