import { classNames } from "@/utils";
import { InputHTMLAttributes } from "react";

type CheckboxProps = InputHTMLAttributes<HTMLInputElement> & {
    label: string;
};

export const checkboxClasses = "\
size-3 \
form-checkbox text-sky-700 bg-sky-500/30 \
focus:ring-1 focus:ring-offset-1 focus:ring-sky-500 \
rounded cursor-pointer";

export function Checkbox({ label, title, className, ...rest }: CheckboxProps) {
    return (
        <label className="flex items-center space-x-2 cursor-pointer" title={title}>
            <input
                type="checkbox"
                data-dbg-tm
                className={classNames(checkboxClasses, className)}
                {...rest}
            />

            <div className="whitespace-nowrap">
                {label}
            </div>
        </label>
    );
}
