import { useAtomValue } from 'jotai';
import { countdownDisplayNumberAtom } from '@/store';

export function CountdownDisplay() {
    const countdownDisplayNumber = useAtomValue(countdownDisplayNumberAtom);

    return (<>
        {countdownDisplayNumber >= 0 && (
            <div className="text-5xl text-slate-100">
                {countdownDisplayNumber}
            </div>
        )}
    </>);
}
