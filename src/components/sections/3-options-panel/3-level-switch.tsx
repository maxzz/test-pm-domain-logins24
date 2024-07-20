import { ChangeEvent, HTMLAttributes, InputHTMLAttributes } from "react";
import { useAtom } from "jotai";
import { screenLoginOptionAtoms } from "@/store/store";
import { classNames } from "@/utils";

function OneRadio(props: InputHTMLAttributes<HTMLInputElement>) {
    return (
        <label className="flex items-center">
            <input
                type="radio"
                data-dbg-tm
                className="form-radio size-2.5 text-slate-400 focus:ring-1 focus:ring-offset-1 focus:ring-slate-500"
                name={`nest-level-${props.value}`}
                {...props}
            />
        </label>
    );
}

export function LevelSwitch({ className, ...rest }: HTMLAttributes<HTMLUListElement>) {

    const [nestLevel, setNestLevel] = useAtom(screenLoginOptionAtoms.nestLevelAtom);

    function onChange(event: ChangeEvent<HTMLInputElement>) {
        return setNestLevel(+event.target.value);
    }

    return (
        <ul className={classNames("ml-2 flex items-center space-x-0.5", className)} title="WebComponents render level" {...rest}>
            <OneRadio onChange={onChange} checked={nestLevel === 0} value={0} />
            <OneRadio onChange={onChange} checked={nestLevel === 1} value={1} />
            <OneRadio onChange={onChange} checked={nestLevel === 2} value={2} />
            <OneRadio onChange={onChange} checked={nestLevel === 3} value={3} />
        </ul>
    );
}
