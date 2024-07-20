import { HTMLAttributes } from "react";
import { Atom, useAtomValue } from "jotai";
import { a, easings, useTransition } from "@react-spring/web";
import { screenLoginOptionAtoms } from "@/store/store";

type MountProps = HTMLAttributes<HTMLDivElement> & {
    showAtom: Atom<boolean>;
};

/* Too many motion * /
export function MountOptions({ showAtom, children }: MountProps) {

    const show = useAtomValue(showAtom);

    const transitions = useTransition(show ? 1 : 0, {
        from: { x: -200, opacity: 0, },
        enter: { x: 0, opacity: 1, config: { duration: 200, easing: easings.easeOutCubic }, },
        leave: { x: -100, opacity: 0, config: { duration: 200, easing: easings.easeOutQuad }, },
    });

    return transitions(
        (styles, item) => {
            return !!item && (
                <a.div style={styles}>
                    {children}
                </a.div>
            );
        }
    );
}
/**/

export function Mount({ showAtom, children }: MountProps) {

    const doInterval = useAtomValue(screenLoginOptionAtoms.doIntervalAtom);
    const show = useAtomValue(showAtom);

    const transitions = useTransition(show && !doInterval, {
        from: { x: -200, opacity: 0, },
        enter: { x: 0, opacity: 1, config: { duration: 150, easing: easings.easeOutCubic }, },
        leave: { x: -100, opacity: 0, config: { duration: 150, easing: easings.easeOutQuad }, /* onRest: () => console.log('done') */ },
    });

    return transitions(
        (styles, item) => {
            return !!item && (
                <a.div style={styles}>
                    {children}
                </a.div>
            );
        }
    );
}
