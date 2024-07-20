import { CountdownDisplay } from './1-countdown-display';
import { NavLinks } from './2-nav-links';
import { IconAlienLogo, IconHeroLines, IconHIDLogo } from "../ui/icons";
import { HiddenCountdownTimer } from '@/util-hooks';

export const textShadow = { textShadow: '1px 1px 2px #000' };
export const elevation4Shadow = {
    boxShadow: '0 2px 4px -1px rgb(0 0 0 / 20%), 0 4px 5px 0 rgb(0 0 0 / 14%), 0 1px 10px 0 rgb(0 0 0 / 12%)',
};

export function AppHeader() {
    return (<>
        <div className="h-2/5 relative bg-hid-bg shadow-sm cursor-default">

            <IconHeroLines
                className="absolute left-0 top-0 w-full h-full fill-transparent stroke-slate-500/20 stroke-[.05vmin]"
                preserveAspectRatio="none slice"
            />

            <div className="px-6 py-5 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                    <div className="pb-1 text-3xl tracking-tighter font-light text-slate-100 uppercase whitespace-nowrap" style={textShadow}>

                        <div className="flex items-center space-x-3">
                            <div className="w-20 py-2 flex items-center justify-center bg-white rounded-md">
                                <IconHIDLogo className="px-2 fill-hid-bg" />
                            </div>

                            <div className="font-old-normal pb-1">
                                PM Credentials Test Pages 2024
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute inset-0 flex items-center justify-center">
                <IconAlienLogo />
            </div>

            <div className="absolute inset-0 flex items-center justify-center">
                <CountdownDisplay />
            </div>

            {/* <NavLinks0 /> */}
            <NavLinks />

            <div className="absolute left-0 bottom-px w-full h-px bg-yellow-500" style={elevation4Shadow}></div>
        </div>
       
       <HiddenCountdownTimer />
    </>);
}

//TODO: alien animation on countdown come to 0
//TODO: add derived atom countdown === 0 to use inside AlienLogo
