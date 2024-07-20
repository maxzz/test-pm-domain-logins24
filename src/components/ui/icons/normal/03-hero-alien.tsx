import { IconProps } from "./90-icon-props";

export function IconHeroAlien({ title, ...rest }: IconProps) {
    return (
        <svg viewBox="0 0 100 100" {...rest}>
            {title && <title>{title}</title>}
            <path d="M50 45.23 51.38 4.8 90.2 45.23 52.23 60.68l22.6-15.45L50 95.19 25.17 45.23l22.6 15.45L9.8 45.23 48.62 4.8 50 45.23Z" />
        </svg>
    );
}
