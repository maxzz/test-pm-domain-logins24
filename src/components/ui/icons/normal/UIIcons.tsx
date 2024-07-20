import { forwardRef } from "react";
import { IconProps, svgRoundedCaps } from "./90-icon-props";
import { classNames } from "@/utils/classnames";

// export function IconSiteLink({ title, ...rest }: IconProps) {
//     return (
//         <svg viewBox="0 0 12 12" {...rest}>
//             {title && <title>{title}</title>}
//             <text x={0} y={'50%'}>11</text>
//             <foreignObject className="w-full h-full flex items-center justify-center">
//                 <div className="text-xs">11</div>
//             </foreignObject>
//         </svg>
//     );
// }

export function IconGithubLogo({ title, ...rest }: IconProps) {
    return (
        <svg viewBox="0 0 1024 1024" {...rest}>
            {title && <title>{title}</title>}
            <path d="M512 76a447 447 0 00-148 870c23 6 20-11 20-22v-78c-136 16-141-74-151-89-18-31-61-39-48-54 30-16 62 4 98 58 27 39 78 32 104 26 6-24 18-45 35-61-141-25-199-111-199-213 0-49 16-95 48-132-20-60 2-112 5-120 58-5 119 42 123 46a435 435 0 01226 0c12-9 68-49 122-44 3 8 25 58 5 118 33 37 49 83 49 132 0 103-59 189-200 213a128 128 0 0138 91v113c1 9 0 18 15 18A448 448 0 00512 76z" />
        </svg>
    );
}

// export const IconHeroWRef { title, ...rest }forwardRef<SVGSVGElement, IconProps>((props: IconProps, ref) => {
//     return (
//         <svg ref={ref} viewBox="0 0 14 14" {...rest}>
//             {title && <title>{title}</title>}
//             <path d="M7.5,6.4L7.68,1.14L12.73,6.4L7.79,8.41L10.73,6.4L7.5,12.9L4.27,6.4L7.21,8.41L2.27,6.4L7.32,1.14z" />
//         </svg>
//     );
// })

// export function IconImagePlus(props: IconProps) {
//     const { title, className, ...rest } = props;
//     return (
//         <svg className={classNames("fill-current", className)} viewBox="0 0 24 24" {...rest}>
//             {title && <title>{title}</title>}
//             <path d="M19 10a1 1 0 0 0-1 1v3.38l-1.48-1.48a2.79 2.79 0 0 0-3.93 0l-.7.71l-2.48-2.49a2.79 2.79 0 0 0-3.93 0L4 12.61V7a1 1 0 0 1 1-1h8a1 1 0 0 0 0-2H5a3 3 0 0 0-3 3v12.22A2.79 2.79 0 0 0 4.78 22h12.44a2.88 2.88 0 0 0 .8-.12a2.74 2.74 0 0 0 2-2.65V11A1 1 0 0 0 19 10zM5 20a1 1 0 0 1-1-1v-3.57l2.89-2.89a.78.78 0 0 1 1.1 0L15.46 20zm13-1a1 1 0 0 1-.18.54L13.3 15l.71-.7a.77.77 0 0 1 1.1 0L18 17.21zm3-15h-1V3a1 1 0 0 0-2 0v1h-1a1 1 0 0 0 0 2h1v1a1 1 0 0 0 2 0V6h1a1 1 0 0 0 0-2z" />
//         </svg>
//     );
// }

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
