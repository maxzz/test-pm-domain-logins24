import { HTMLAttributes, ReactNode } from "react";
import { PrimitiveAtom, useAtom, useAtomValue, useSetAtom } from "jotai";
import { a, useSpring } from "@react-spring/web";
import { credAtoms, doNextScreenAtom, navOptionAtoms, screenLoginOptionAtoms } from "@/store/store";
import { IconCpass, IconLogin, IconSearch } from "@/components/ui/icons";
import { classNames } from "@/utils";

const font = {
    fontFamily: 'Source Sans Pro, sans-serif',
    textShadow: '1px 1px #c4c4c4',
    // WebkitTextStroke: '1px #6e6e6e45',
    // WebkitTextFillColor: 'white',
    WebkitTextStroke: '1px #dadada3d',
    WebkitTextFillColor: '#003165', // hid-bg
    //transform: 'scaleY(1.2)',
};

function LoginTitle({ label, logo, className, ...rest }: { label: React.ReactNode; logo: ReactNode; } & React.HTMLAttributes<HTMLDivElement>) {
    const styles = useSpring({ from: { scale: 0, borderWidth: '4px', opacity: 0 }, to: { scale: 1, borderWidth: '1px', opacity: 1, }, delay: 400, });
    return (
        <div className={classNames("px-4 py-4 flex items-center justify-between border-b border-slate-200 bg-slate-200 rounded-t-sm shadow select-none", className)} {...rest}>
            <div className="font-bold" style={font}>
                {label}
            </div>

            <a.div style={styles}
                className="px-4 w-16 h-16 text-5xl flex items-center justify-center text-slate-50 bg-slate-300/40 border-slate-50 border-4 rounded-md"
            >
                {logo}
            </a.div>
        </div>
    );
}

function FieldUser({ fieldAtom, fieldId, placeholder = ' ' }: { fieldAtom: PrimitiveAtom<string>; fieldId: string; placeholder?: string; }) {
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
            />
            <div className="float-label">
                {placeholder}
            </div>
        </label>
    );
}

function FieldPass({ fieldAtom, fieldId, placeholder = ' ' }: { fieldAtom: PrimitiveAtom<string>; fieldId: string; placeholder: string; }) {
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
            />
            <div className="float-label">
                {placeholder}
            </div>
        </label>
    );
}

function FieldSubmit({ label = '', className, ...rest }: { label?: string; } & React.HTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            className={classNames(
                'px-4 py-1.5 hover:bg-slate-300 focus:bg-slate-300 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-slate-500 active:scale-[.97] border-slate-600 border rounded select-none',
                className
            )}
            {...rest}
        >
            {label}
        </button>
    );
}

// const boxShadow = { boxShadow: '0 1px 1px 0px rgba(0,0,0,.1), 0 1px 3px 0 rgba(0,0,0,.1)', };
const boxShadow = { boxShadow: '0 1px 1px 0px rgba(0,0,0,.1), 0 1px 3px 0 rgba(0,0,0,.1)', };

function Wrap({ children, level = 3, className }: { children: ReactNode; level?: number; } & HTMLAttributes<HTMLElement>) {
    const useWebComp = useAtomValue(screenLoginOptionAtoms.useWebCompAtom);
    const nestLevel = useAtomValue(screenLoginOptionAtoms.nestLevelAtom);
    return (
        <>
            {useWebComp
                ? nestLevel >= level
                    ?
                    <div className={classNames("relative outline outline-1 outline-sky-500/50", className)}>
                        <div className="absolute left-1 top-0 z-10 text-[.65rem] text-sky-500">{level}</div>
                        <tm-wrap>{children}</tm-wrap>
                    </div>
                    : null
                : <>{children}</>
            }
        </>
    );
}

export function A1_FormLogin({ suffix = '' }: { suffix?: string; }) {
    const doNextLoginOrCPassScreen = useSetAtom(doNextScreenAtom);
    return (
        <Wrap level={1} className="">
            <form id="tm-login-a-form" className="min-h-[24rem] flex flex-col rounded-sm bg-slate-50 border-slate-300 border" style={boxShadow}>
                <LoginTitle
                    label={<div className="text-xl tracking-tight text-slate-50 [text-shadow:1px_2px_2px_#8885] uppercase">User login</div>}
                    logo={<div className="inset-0"><IconLogin className="w-12 h-12 stroke-slate-400/50" /></div>}
                />
                <Wrap level={2} className="flex-1">
                    <div className="flex-1 mt-2 px-4 pt-8 pb-2 w-72 flex flex-col space-y-8">
                        <Wrap><FieldUser fieldAtom={credAtoms.usernameAtom} fieldId={`user${suffix}`} placeholder="Username" /></Wrap>
                        <Wrap><FieldPass fieldAtom={credAtoms.passwordAtom} fieldId={`pass${suffix}`} placeholder="Password" /></Wrap>
                    </div>
                </Wrap>
                <div className="self-end">
                    <FieldSubmit className="m-4" label="Log in" onClick={(e) => { e.preventDefault(); doNextLoginOrCPassScreen(); }} />
                </div>
            </form>
        </Wrap>
    );
}

export function A1_FormCPass({ suffix = '' }: { suffix?: string; }) {
    const doNextLoginOrCPassScreen = useSetAtom(doNextScreenAtom);
    return (
        <Wrap level={1}>
            <form id="tm-cpass-a-form" className="flex flex-col rounded-sm bg-slate-50 border-slate-300 border" style={boxShadow}>
                <LoginTitle
                    label={<div className="text-xl tracking-tight text-slate-50 [text-shadow:1px_2px_2px_#8885] uppercase">Password Change</div>}
                    logo={<div className="inset-0"><IconCpass className="w-12 h-12 stroke-slate-400/50" /></div>}
                />
                <Wrap level={2} className="flex-1">
                    <div className="px-4 mt-6 pt-4 pb-2 w-72 flex flex-col space-y-8">
                        <Wrap><FieldPass fieldAtom={credAtoms.passwordAtom} fieldId={`old-pass${suffix}`} placeholder="Old Password" /></Wrap>
                        <Wrap><FieldPass fieldAtom={credAtoms.updtpassAtom} fieldId={`new-pass${suffix}`} placeholder="New Password" /></Wrap>
                        <Wrap><FieldPass fieldAtom={credAtoms.confpassAtom} fieldId={`cnf-pass${suffix}`} placeholder="Confirm New Password" /></Wrap>
                    </div>
                </Wrap>
                <div className="self-end">
                    <FieldSubmit className="m-4" label="Change" onClick={(e) => { e.preventDefault(); doNextLoginOrCPassScreen(); }} />
                </div>
            </form>
        </Wrap>
    );
}

export function A1_FormSearch({ suffix = '' }: { suffix?: string; }) {
    const showSearch = useSetAtom(navOptionAtoms.showSearchAtom);
    return (<>
        {/* Don't use 'search' word in form name or field names/IDs */}
        <form id="tm-sear-form" className="flex flex-col rounded-sm bg-slate-50 border-slate-300 border" style={boxShadow}>
            <LoginTitle
                label={<div className="text-xl tracking-tight text-slate-50 [text-shadow:1px_2px_2px_#8885] uppercase">Search</div>}
                logo={<div className="text-orange-500"><IconSearch className="w-12 h-12 fill-transparent stroke-slate-100" strokeWidth={2} /></div>}
            />

            <div className="px-4 mt-4 pt-4 pb-2 w-72 flex flex-col space-y-8">
                <div className="flex items-center space-x-2">
                    <FieldUser fieldAtom={credAtoms.searchAAAtom} fieldId={`sear${suffix}`} placeholder="Search" />
                    <div className="">
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

//TODO: Wrap: make the nested level more visible
