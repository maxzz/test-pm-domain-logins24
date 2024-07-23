import { IconProps } from "./90-icon-props";

export function IconSiteLink({ title, ...rest }: IconProps) {
    return (
        <svg viewBox="0 0 12 12" {...rest}>
            {title && <title>{title}</title>}
            <text x={0} y={'50%'}>11</text>
            <foreignObject className="w-full h-full flex items-center justify-center">
                <div className="text-xs">11</div>
            </foreignObject>
        </svg>
    );
}
