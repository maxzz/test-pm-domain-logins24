import { useSetAtom } from "jotai";
import { a, easings, useSpring } from "@react-spring/web";
import { navOptionAtoms } from "@/store/store";

export function BlankScreen() {
    const blankScreen = useSetAtom(navOptionAtoms.blankScreenAtom);

    const anim = useSpring({
        from: { scaleY: 1, scaleX: 1, opacity: 1, background: '#94a3b8', },
        to: [
            { scaleY: .1, scaleX: .9, config: { duration: 700, } },
            { scaleY: 1, scaleX: 0, config: { duration: 1, } },
            { scaleY: 1, scaleX: .9, opacity: 0, config: { easing: easings.easeOutCubic, duration: 1000, } },
        ],
        onRest: () => blankScreen(false),
        //config: { duration: 400, },
    });//bg-orange-400/20

    return (
        <div className="relative w-full h-[24rem] flex items-center justify-center">
            <div className="text-2xl text-white">
                Reloading...
            </div>
            
            <a.div style={anim} className="absolute inset-0"></a.div>
        </div>
    );
}
