import { IconProps, svgRoundedCaps } from "./90-icon-props";
import { classNames } from "@/utils/classnames";

export function IconDownload(props: IconProps) {
    const { title, className, ...rest } = props;
    return (
        <svg className={classNames("fill-none text-current stroke-2", className)} {...svgRoundedCaps} viewBox="0 0 24 24" {...rest}>
            {title && <title>{title}</title>}
            <path d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
    );
}

export function IconClipboard(props: IconProps) {
    const { title, className, ...rest } = props;
    return (
        <svg className={classNames("fill-none text-current stroke-2", className)} {...svgRoundedCaps} viewBox="0 0 24 24" {...rest}>
            {title && <title>{title}</title>}
            <path d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
        </svg>
    );
}
