import { Atom, useAtomValue } from "jotai";
import { a, easings, useTransition } from "@react-spring/web";

export function Mount({ showAtom, children }: { showAtom: Atom<boolean>; } & React.HTMLAttributes<HTMLDivElement>) {

    const show = useAtomValue(showAtom);

    const transition = useTransition(show, {
        from: { y: -400, opacity: 0, },
        enter: { y: 0, opacity: 1, config: { duration: 500, easing: easings.easeOutCubic }, },
        leave: { y: -200, opacity: 0, config: { duration: 400, easing: easings.easeOutQuad }, /* onRest: () => console.log('done') */ },
        //config: { duration: 200, },
    });

    return transition(
        (styles, item) => {
            return item && (
                <a.div style={styles}>
                    {children}
                </a.div>
            );
        }
    );
}
