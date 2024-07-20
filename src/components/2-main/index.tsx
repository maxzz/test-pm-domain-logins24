import { AppHeader } from '../1-header';
import { AppFooter } from '../3-footer';
import { A3_Screens } from '../sections/4-screens';
import { OptionsPanel } from '../sections/3-options-panel';

const testAreaStyles = {
    overflow: 'overlay',
    // backgroundImage: 'linear-gradient(135deg, rgb(210 232 255) 10%, transparent)',
    // backgroundImage: 'linear-gradient(135deg, transparent 1%, #003165 10%, transparent)', // hid-bg
    // backgroundImage: 'linear-gradient(135deg, transparent, 10%, #003165, 50%, transparent)', // hid-bg
    // backgroundImage: 'linear-gradient(45deg, red, 20%, #003165, transparent)', // hid-bg
    // backgroundImage: 'linear-gradient(45deg, #003165, transparent)', // hid-bg
};

export function AppMain() {
    return (<>
        <AppHeader />

        <div className="flex-1 overflow-y-auto bg-gradient-to-r from-slate-100 to-slate-50" style={testAreaStyles}>
            <div className="pb-4 h-full flex flex-col justify-between text-slate-900">
                <A3_Screens />
                <OptionsPanel />
            </div>
        </div>

        <AppFooter />
    </>);
}
