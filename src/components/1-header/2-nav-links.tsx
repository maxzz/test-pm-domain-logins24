import { Children, HTMLAttributes, ReactNode, useState } from 'react';
import { a, useTrail } from '@react-spring/web';
import { SvgScreenCPass, SvgScreenLogin } from '../ui/icons';

/** /
const ALogin = a(SvgScreenLogin);
const ACPass = a(SvgScreenCPass);

function NavLinks0() {
    const anim = useSpring({
        from: { backgroundColor: '#0000', scale: 0 },
        to: { backgroundColor: '#3b82f6', scale: 1 }, //bg-blue-500
        config: { duration: 700, easing: easings.easeOutCubic },
        delay: 1000
    });
    return (
        <div className="absolute bottom-1 left-2">
            <div className="flex space-x-2">
                <ALogin style={anim} className="w-12 h-12" />
                <ACPass style={anim} className="w-12 h-12" />
                <ALogin style={anim} className="w-12 h-12" />
                <ACPass style={anim} className="w-12 h-12" />
            </div>
        </div>
    );
}
/**/

function Trail({ open, children }: { open: boolean; children: ReactNode; }) {
    const items = Children.toArray(children);
    const trail = useTrail(items.length, {
        from: {
            opacity: 0,
            // x: 20,
            // y: -1000,
            x: 1000,
            height: '0px',
            scale: 0,
            backgroundColor: '#010101',
        },
        to: {
            opacity: open ? 1 : 0,
            x: open ? 0 : 1000,
            // x: open ? 0 : 20,
            // y: open ? 0 : -1000,
            height: open ? '48px' : '0px',
            scale: open ? 1 : 0,
            backgroundColor: open ? '#3b82f6' : '#010101',
        },
        delay: 500,
        config: {
            mass: 5, tension: 2000, friction: 200,
            //duration: 1000,
            //easing: easings.easeInOutCubic,
        },
    });
    return (<>
        {trail.map(({ height, ...style }, index) => (
            <a.div key={index} className="" style={style}>
                <a.div style={{ height }}>{items[index]}</a.div>
            </a.div>
        ))}
    </>);
}

function TestReloadButton(props: HTMLAttributes<HTMLInputElement>) {
    return (
        <input
            type="button"
            className="self-center mr-2 px-2 py-2 h-12 text-xs text-yellow-100 border-yellow-100 hover:bg-blue-500 border rounded active:scale-y-[.97] cursor-pointer"
            value="Reload"
            {...props}
        />
    );
}

export function NavLinks() {
    const open = true;
    // const [open, setOpen] = useState(true);
    return (
        <div className="absolute left-6 bottom-6 h-12 flex ">
            {/* <TestReloadButton onClick={() => setOpen((v) => !v)} /> */}

            <div className="flex space-x-2">
                <Trail open={open}>
                    <SvgScreenLogin className="w-12 h-full overflow-hidden" preserveAspectRatio="none" />
                    <SvgScreenCPass className="w-12 h-full overflow-hidden" preserveAspectRatio="none" />
                    <SvgScreenLogin className="w-12 h-full overflow-hidden" preserveAspectRatio="none" />
                    <SvgScreenCPass className="w-12 h-full overflow-hidden" preserveAspectRatio="none" />
                </Trail>
            </div>
        </div>
    );
}
