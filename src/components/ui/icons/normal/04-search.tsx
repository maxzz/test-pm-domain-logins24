import { IconProps } from "./90-icon-props";

export function IconSearch({ title, ...rest }: IconProps) {
    return (
        <svg viewBox="0 0 24 24" {...rest}>
            {title && <title>{title}</title>}
            <path d="M15.5 15.5L19 19M5 11a6 6 0 1 0 12 0a6 6 0 0 0-12 0Z" />
        </svg>
    );
}
