import { CSSProperties, ReactNode } from "react";
import { useAtomValue } from "jotai";
import { a, AnimatedProps, config, easings, useTransition } from "@react-spring/web";
import { blankScreenAtom, navOptionAtoms } from "@/store";
import { A1_FormLogin, A1_FormCPass, A1_FormSearch } from "../1-forms";
import { MountSearch } from "./1-mount-search";
import { BlankScreen } from "./2-blank-screen";

type ScreensProps = (props: AnimatedProps<{ anim: CSSProperties; }>) => ReactNode;

const screens: (ScreensProps)[] = [
    ({ anim }) => {
        return (
            <a.div style={anim}>
                <A1_FormLogin suffix={'-1'} />
            </a.div>
        );
    },
    ({ anim }) => {
        return (
            <a.div style={anim}>
                <A1_FormCPass suffix={'-2'} />
            </a.div>
        );
    },
];

export function A3_Screens() {
    //const blankScreen = true;
    const blankScreen = useAtomValue(blankScreenAtom);
    const showSearch = useAtomValue(navOptionAtoms.showSearchAtom);
    const currentScreenIdx = useAtomValue(navOptionAtoms.screenIdxAtom);

    const transitions = useTransition(currentScreenIdx, {
        from: { opacity: 0, x: '150%', scale: 1, },
        enter: { opacity: 1, x: '0%', config: { easing: easings.easeInCubic, duration: 300, } },
        leave: { opacity: 0, x: '-150%', scale: 0, config: { easing: easings.easeInCubic, duration: 0, }, }, // or duration: 300
        config: { ...config.molasses },
        exitBeforeEnter: true,
        // onRest: (result, ctrl, item) => {
        //     console.log('%c--------------------------onRest %ccurrentIdx = %i%c %o %o', 'color: slateblue', colorIdx(), currentIdx, 'color: slateblue', { item }, { result }, { ctrl });
        // }
    });

    // const colorIdx = () => currentIdx === 0 ? 'color: orange' : 'color: khaki';
    // console.log('%c----------------------- render() %ccurrentIdx = %i', 'color: gray', colorIdx(), currentIdx);

    return (
        <div className="overflow-hidden">
            <div className="mt-8 min-h-[26rem] flex items-start justify-center">
                {blankScreen
                    ? (
                        <BlankScreen />
                    )
                    : showSearch
                        ? (
                            <MountSearch showAtom={navOptionAtoms.showSearchAtom}>
                                <A1_FormSearch />
                            </MountSearch>
                        )
                        : (<>
                            {transitions(
                                (anim, item, transition) => {
                                    // console.log('%c...................transitions() currentIdx = %i %o phase %c%s%c transition', colorIdx(), currentIdx, { item }, 'color: green', transition.phase, 'color: gray', transition);
                                    const Screen = screens[currentScreenIdx];
                                    return Screen ? <Screen anim={anim} /> : null;
                                })
                            }
                        </>)
                }
            </div>
        </div>
    );
}
