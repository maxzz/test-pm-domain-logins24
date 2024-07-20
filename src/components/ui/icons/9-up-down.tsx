import { SVGAttributes } from "react";
import { a, useSpring } from "@react-spring/web";
import { classNames } from "@/utils";
import { animationConfig } from "../UIListTransition";

export function IconUpDown({ open, className, ...rest }: { open: boolean; } & SVGAttributes<SVGSVGElement>) {
    const styles = useSpring({ open: open ? 1 : 0, ...animationConfig });
    return (
        <svg className={classNames("size-6 p-1 stroke-current stroke-[.6rem] fill-transparent", className)} viewBox="0 0 100 100" {...rest}>
            <a.path d={styles.open.to({ range: [0, 1], output: ["M 15 34 L 45 65 L 78 34", "M 15 53 L 45 23 L 78 53"] })} />
        </svg>
    );
}
