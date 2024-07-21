import { ChangeEvent, HTMLAttributes, InputHTMLAttributes } from "react";
import { useAtom } from "jotai";
import { formOptionAtoms } from "@/store";
import { classNames } from "@/utils";

const radioClasses = "\
form-radio \
size-2.5 \
text-sky-500 \
bg-sky-500/50 \
border-sky-400 \
border \
focus:ring-1 \
focus:ring-offset-1 \
focus:ring-sky-500 \
";

function OneRadio(props: InputHTMLAttributes<HTMLInputElement>) {
    return (
        <label className="flex items-center">
            <input
                type="radio"
                data-dbg-tm
                className={radioClasses}
                name={`nest-level-${props.value}`}
                {...props}
            />
        </label>
    );
}

export function LevelSwitch({ className, ...rest }: HTMLAttributes<HTMLUListElement>) {

    const [nestLevel, setNestLevel] = useAtom(formOptionAtoms.nestLevelAtom);

    function onChange(event: ChangeEvent<HTMLInputElement>) {
        return setNestLevel(+event.target.value);
    }

    return (
        <ul className={classNames("relative z-10 px-0.5 flex items-center gap-x-0.5", className)} title="WebComponents render level" {...rest}>
            <div className="absolute -z-10 left-0 top-1/2 w-full h-px bg-sky-500"></div>

            <OneRadio onChange={onChange} checked={nestLevel === 0} value={0} />
            <OneRadio onChange={onChange} checked={nestLevel === 1} value={1} />
            <OneRadio onChange={onChange} checked={nestLevel === 2} value={2} />
            <OneRadio onChange={onChange} checked={nestLevel === 3} value={3} />
        </ul>
    );
}
