const plugin = require('tailwindcss/plugin');

// Don't use plugin: tailwind cannot have two overlays: auto and overlay at the same time and will break for Firefox. Use index.css instead.

module.exports = plugin(function ({ addUtilities }) {
    const utils = {

        // overflow-overlay

        '.overflow-overlay': {
            'overflow': 'auto',
        },

        '@supports (overflow: overlay)': {
            '.overflow-overlay': {
                'overflow': 'overlay',
            },
        },

        // overflow-x-overlay

        '.overflow-x-overlay': {
            'overflow-x': 'auto',
        },

        '@supports (overflow-x: overlay)': {
            '.overflow-x-overlay': {
                'overflow-x': 'overlay',
            }
        },

        // overflow-y-overlay

        '.overflow-y-overlay': {
            'overflow-y': 'auto',
        },
        
        '@supports (overflow-y: overlay)': {
            '.overflow-y-overlay': {
                'overflow-y': 'overlay',
            },
        },

    };
    addUtilities(utils);
});
