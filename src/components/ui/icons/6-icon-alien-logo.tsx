import { useEffect } from 'react';
import { useAtomValue } from 'jotai';
import { a, easings, useSpring } from '@react-spring/web';
import { isCountdownDoneAtom } from '@/store/store';
import { IconHeroAlien } from '@/components/ui/icons';

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
    const [styles, api] = useSpring(() => ({
        ...alienAnimProps,
        // from: {
        //     fill: '#5fa4ed',
        //     stroke: 'black',
        //     strokeWidth: 2,
        //     scale: 0
        // },
        // to: {
        //     fill: 'transparent',
        //     strokeWidth: .2,
        //     //stroke: 'transparent',
        //     stroke: 'rgb(100 116 139 / 0.2)',
        //     scale: 1,
        // },
        config: { easing: easings.easeOutCubic, duration: 1000 }
    }));
    // useAtom... call api
    const isCountdownDone = useAtomValue(isCountdownDoneAtom);

    // useEffect(() => {
    //     if (isCountdownDone) {
    //         //api.reset();
    //         api.
    //     }
    // }, [isCountdownDone]);

    useEffect(() => {
        if (isCountdownDone) {
            // api.set(animValues.from);
            // api.start(animValues.to);
            api.start(alienAnimProps);
        }
    }, [isCountdownDone]);

    // useEffect(() => {
    //     if (isCountdownDone) {
    //         api.set(animValues.to);
    //         api.start(animValues.from);
    //     }
    // }, [isCountdownDone]);

    // useEffect(() => {
    //     async function run() {
    //         if (isCountdownDone) {
    //             //console.log('111111');

    //             // api.set(animValues.to);
    //             // await api.start(animValues.from);
    //             api.set(animValues.from);
    //             await api.start(animValues.to);
    //         }
    //     }
    //     run();
    // }, [isCountdownDone]);

    return (
        <a.div style={styles} className="w-56 h-56 flex items-center justify-center">
            <IconHeroAlien className="" preserveAspectRatio="xMidYMid slice" />
        </a.div>
    );
}
