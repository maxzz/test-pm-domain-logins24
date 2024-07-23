import { classNames } from "@/utils";
import { IconProps, svgRoundedCaps } from "./90-icon-props";

export function IconDownload(props: IconProps) {
    const { title, className, ...rest } = props;
    return (
        <svg className={classNames("fill-none text-current stroke-2", className)} {...svgRoundedCaps} viewBox="0 0 24 24" {...rest}>
            {title && <title>{title}</title>}
            <path d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
    );
}
