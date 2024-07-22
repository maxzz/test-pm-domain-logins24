import { useEffect } from "react";
import { useAtomValue } from "jotai";
import { a, easings, useSpring } from "@react-spring/web";
import { isCountdownDoneAtom } from "@/store";
import { IconHeroAlien } from "@/components/ui/icons";

const alienAnimProps = {
    from: {
        fill: '#5fa4ed',
        stroke: 'black',
        strokeWidth: 2,
        scale: 0
    },
    to: {
        fill: 'transparent',
        strokeWidth: .2,
        //stroke: 'transparent',
        stroke: 'rgb(100 116 139 / 0.2)',
        scale: 1,
    },
};

export function IconAlienLogo() {

    const [anim, api] = useSpring(() => ({
        ...alienAnimProps,
        config: { easing: easings.easeOutCubic, duration: 1000 }
    }));

    const isCountdownDone = useAtomValue(isCountdownDoneAtom);

    useEffect(() => {
        if (isCountdownDone) {
            api.start(alienAnimProps);
        }
    }, [isCountdownDone]);

    return (
        <a.div style={anim} className="size-56 flex items-center justify-center">
            <IconHeroAlien className="" preserveAspectRatio="xMidYMid slice" />
        </a.div>
    );
}
