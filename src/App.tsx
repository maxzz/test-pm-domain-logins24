import { AppMain } from './components/2-main';
import { UIToaster } from './components/ui/UiToaster';
import '@/components/sections/1-forms/50-register-web-components';

function PopperRoot() {
    return (
        <div className="absolute z-50">
            <div id="portal"></div>
        </div>
    );
}

export function App() {
    return (<>
        <UIToaster />
        <PopperRoot />

        <div className="h-screen min-h-full overflow-hidden flex flex-col">
            <AppMain />
        </div>
    </>);
}
