import { HTMLAttributes } from "react";
import { classNames } from "@/utils";

type FieldSubmitProps = HTMLAttributes<HTMLButtonElement> & {
    label?: string;
};

const buttonClasses = "\
px-4 py-1.5 \
\
border \
border-slate-400 \
\
hover:bg-slate-300 \
\
focus:bg-slate-300 focus:ring-1 focus:ring-offset-2 focus:ring-slate-500 focus:outline-none \
\
active:scale-[.97] \
rounded shadow-sm select-none";

export function FieldSubmit({ label = '', className, ...rest }: FieldSubmitProps) {
    return (
        <button className={classNames(buttonClasses, className)} {...rest}>
            {label}
        </button>
    );
}
