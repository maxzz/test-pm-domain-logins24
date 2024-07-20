import * as React from 'react';

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'tm-wrap': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {class?: string | undefined};
            'web-wrapshadow-login': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {class?: string | undefined};
            'web-wrapshadow-cpass': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {class?: string | undefined};
        }
    }
}
