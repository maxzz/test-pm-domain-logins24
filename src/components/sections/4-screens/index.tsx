import { useAtomValue } from "jotai";
import { a, AnimatedProps, config, easings, useTransition } from "@react-spring/web";
import { navOptionAtoms } from "@/store/store";
import { A1_FormLogin, A1_FormCPass, A1_FormSearch } from "../1-forms";
import { Mount } from "./1-mount";
import { BlankScreen } from "./2-blank-screen";

const screens: ((props: AnimatedProps<{ style: React.CSSProperties; }>) => React.ReactElement)[] = [
    ({ style }: { style: any; }) => <a.div style={style}><A1_FormLogin suffix={'-1'} /></a.div>,
    ({ style }: { style: any; }) => <a.div style={style}><A1_FormCPass suffix={'-2'} /></a.div>,
];

export function A3_Screens() {
    const showSearch = useAtomValue(navOptionAtoms.showSearchAtom);
    //const blankScreen = true;
    const blankScreen = useAtomValue(navOptionAtoms.blankScreenAtom);
    const currentIdx = useAtomValue(navOptionAtoms.screenIdxAtom);

    const transitions = useTransition(currentIdx, {
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
                    ? <BlankScreen />
                    : showSearch
                        ? (
                            <Mount showAtom={navOptionAtoms.showSearchAtom}>
                                <A1_FormSearch />
                            </Mount>
                        )
                        : (<>
                            {transitions(
                                (styles, item, transition) => {
                                    // console.log('%c...................transitions() currentIdx = %i %o phase %c%s%c transition', colorIdx(), currentIdx, { item }, 'color: green', transition.phase, 'color: gray', transition);
                                    const Screen = screens[currentIdx];
                                    return Screen ? <Screen style={styles} /> : null;
                                })
                            }
                        </>)
                }
            </div>
        </div>
    );
}
