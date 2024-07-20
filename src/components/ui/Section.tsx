import { PrimitiveAtom, useAtom } from "jotai";
import { UISectionPane } from "./UISectionPane";
import { UIAccordion } from "./UIAccordion";
import { textShadow } from "../1-header";

function Section({ title, children, openAtom }: { title: React.ReactNode; children: React.ReactNode; openAtom: PrimitiveAtom<boolean>; }) {
    const [open, setOpen] = useAtom(openAtom);
    return (
        <div>
            <UISectionPane
                className="pl-4 px-2 py-2 bg-[#003f82] text-stone-100 uppercase rounded flex items-center justify-between select-none cursor-pointer font-ui"
                style={textShadow}
                open={open}
                onClick={() => setOpen(v => !v)}
            >
                {title}
            </UISectionPane>
            <UIAccordion toggle={open}>
                {children}
            </UIAccordion>
        </div>
    );
}
