import { ReactNode, HTMLAttributes } from "react";
import { useAtomValue } from "jotai";
import { formOptionAtoms } from "@/store";
import { classNames } from "@/utils";

type FormWrapperProps = HTMLAttributes<HTMLElement> & {
    children: ReactNode;
    level?: number;
};

export function Wrap({ children, level = 3, className }: FormWrapperProps) {

    const useWebComponents = useAtomValue(formOptionAtoms.useWebCompAtom);
    const nestLevel = useAtomValue(formOptionAtoms.nestLevelAtom);

    if (!useWebComponents) {
        return (<>
            {children}
        </>);
    }

    if (nestLevel < level) {
        return null;
    }

    return (<>
        <div className={classNames("relative outline outline-1 outline-sky-500/50", className)}>
            <div className="absolute left-1 top-0 z-10 text-[.65rem] text-sky-500">
                {level}
            </div>

            <div>
                <tm-wrap>
                    <div slot="tm-default">
                        {children}
                    </div>
                </tm-wrap>
            </div>
        </div>
    </>);
}
