import { SVGProps, HTMLAttributes, SVGAttributes } from "react";

export type IconProps = SVGProps<SVGSVGElement> & HTMLAttributes<SVGSVGElement>;

export const svgRoundedCaps: SVGAttributes<SVGElement> = {
    strokeLinecap: "round",
    strokeLinejoin: "round",
};
