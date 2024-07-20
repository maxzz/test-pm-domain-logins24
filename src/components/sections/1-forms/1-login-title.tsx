import { HTMLAttributes, ReactNode } from "react";
import { a, useSpring } from "@react-spring/web";
import { IconLogin, IconCpass, IconSearch } from "@/components/ui";
import { classNames } from "@/utils";

type LoginTitleProps = HTMLAttributes<HTMLDivElement> & {
    label: ReactNode;
    logo: ReactNode;
};

const font = {
    fontFamily: 'Source Sans Pro, sans-serif',
    textShadow: '1px 1px #c4c4c4',
    // WebkitTextStroke: '1px #6e6e6e45',
    // WebkitTextFillColor: 'white',
    WebkitTextStroke: '1px #dadada3d',
    WebkitTextFillColor: '#003165', // hid-bg
    //transform: 'scaleY(1.2)',
};

const titleClasses = "\
px-4 py-4 \
bg-slate-200 border-slate-200 \
border-b \
rounded-t-sm shadow \
select-none \
flex items-center justify-between";

const logoClasses = "\
px-4 size-16 text-5xl \
text-slate-50 bg-slate-300/40 border-slate-50 \
border-4 rounded-md \
flex items-center justify-center";

export function LoginTitle({ label, logo, className, ...rest }: LoginTitleProps) {
    const styles = useSpring({
        from: { scale: 0, borderWidth: '4px', opacity: 0 },
        to: { scale: 1, borderWidth: '1px', opacity: 1, },
        delay: 400,
    });

    return (
        <div className={classNames(titleClasses, className)} {...rest}>
            <div className="font-bold" style={font}>
                {label}
            </div>

            <a.div style={styles} className={logoClasses}>
                {logo}
            </a.div>
        </div>
    );
}

const labelClasses = "text-xl tracking-tight text-slate-50 [text-shadow:1px_2px_2px_#8885] uppercase";

function LoginTitleLogin() {
    return (
        <LoginTitle
            label={<div className={labelClasses}>User login</div>}
            logo={<div className="inset-0"><IconLogin className="size-12 stroke-slate-400/50" /></div>}
        />
    );
}

function LoginTitleCpass() {
    return (
        <LoginTitle
            label={<div className={labelClasses}>Password Change</div>}
            logo={<div className="inset-0"><IconCpass className="size-12 stroke-slate-400/50" /></div>}
        />
    );
}

function LoginTitleSearch() {
    return (
        <LoginTitle
            label={<div className={labelClasses}>Search</div>}
            logo={<div className="text-orange-500"><IconSearch className="size-12 fill-transparent stroke-slate-100" strokeWidth={2} /></div>}
        />
    );
}

export const enum FormType {
    login,
    cpass,
    search,
}

export function FormHeader({ formType }: { formType: FormType; }) {
    return (
        formType === FormType.login
            ? <LoginTitleLogin />
            : formType === FormType.cpass
                ? <LoginTitleCpass />
                : <LoginTitleSearch />
    );
}
