import { AnchorHTMLAttributes } from 'react';
import { classNames } from '@/utils/classnames';
import { IconGithubLogo } from '../ui';
import { pageTitles } from '../xlinks';

export function IconSiteLink({ label, className, ...rest }: { label: string; } & AnchorHTMLAttributes<HTMLAnchorElement>) {
    return (
        <a className={classNames(
            "w-[18px] h-[18px] text-xs text-yellow-100 border-current opacity-30 border rounded-full flex items-center justify-center",
            "hover:opacity-100 hover:text-white hover:bg-[#4445] hover:scale-[1.25] transition-transform",
            className
        )}
            {...rest}
        >
            {label}
        </a>
    );
}

export function AppFooter() {
    return (
        <div className="px-2 py-2 bg-hid-bg flex items-center justify-between">
            <a href="https://github.com/maxzz/test-pm-domain-logins22" target="_blank">
                <IconGithubLogo className="w-5 h-5 fill-[#004997] stroke-[14] stroke-yellow-300 hover:stroke-white hover:scale-[1.5] hover:stroke-[34] transition-all" />
            </a>
            <div className="flex items-center space-x-1">
                <IconSiteLink label="1" {...pageTitles.t0} />
                <IconSiteLink label="2" {...pageTitles.t1} />
                <IconSiteLink label="3" {...pageTitles.t2} />
                <IconSiteLink label="4" {...pageTitles.re} />
            </div>
        </div>
    );
}

//TODO: for 1,2,3,4 links add popup with image preview
