import { HTMLAttributes } from "react";
import { Atom, useAtomValue } from "jotai";
import { a, easings, useTransition } from "@react-spring/web";
import { screenLoginOptionAtoms } from "@/store";

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

export function MountButtonNext({ showAtom, children }: MountProps) {

    const doRunInterval = useAtomValue(screenLoginOptionAtoms.doRunIntervalAtom);
    const show = useAtomValue(showAtom);

    const transition = useTransition(show && !doRunInterval, {
        from: { x: -200, opacity: 0, },
        enter: { x: 0, opacity: 1, config: { duration: 150, easing: easings.easeOutCubic }, },
        leave: { x: -100, opacity: 0, config: { duration: 150, easing: easings.easeOutQuad }, /* onRest: () => console.log('done') */ },
    });

    return transition(
        (anim, item) => {
            return !!item && (
                <a.div style={anim}>
                    {children}
                </a.div>
            );
        }
    );
}
