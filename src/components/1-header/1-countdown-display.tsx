import { useAtomValue } from 'jotai';
import { countdownAtom } from '@/store/store';

export function CountdownDisplay() {
    const countdown = useAtomValue(countdownAtom);
    
    return (<>
        {countdown >= 0 && (
            <div className="text-5xl text-slate-100">{countdown}</div>
        )}
    </>);
}
