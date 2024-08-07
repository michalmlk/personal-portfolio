import type { Preview } from '@storybook/react';

import { withThemeByClassName, withThemeFromJSXProvider } from '@storybook/addon-themes';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    body {
        font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    }
`;

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },

    decorators: [
        withThemeByClassName({
            themes: {
                light: '',
                dark: 'dark',
            },
            defaultTheme: 'light',
        }),
        withThemeFromJSXProvider({
            GlobalStyles,
            Provider: ThemeProvider,
        }),
    ],
};

export default preview;
