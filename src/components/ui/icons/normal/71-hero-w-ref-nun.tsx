import { forwardRef } from "react";
import { IconProps } from "./90-icon-props";

export const IconHeroWRef = forwardRef<SVGSVGElement, IconProps>(({ title, ...rest }: IconProps, ref) => {
    return (
        <svg ref={ref} viewBox="0 0 14 14" {...rest}>
            {title && <title>{title}</title>}
            <path d="M7.5,6.4L7.68,1.14L12.73,6.4L7.79,8.41L10.73,6.4L7.5,12.9L4.27,6.4L7.21,8.41L2.27,6.4L7.32,1.14z" />
        </svg>
    );
});
