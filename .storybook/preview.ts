import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import '../src/app/globals.css';

const lightTheme = createGlobalStyle`
    body {
        color: red;
    }
`;

const darkTheme = createGlobalStyle`
    body {
        color: #dfdfdf
    }
`;

const GlobalStyles = createGlobalStyle`
    body {
        font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    }
`;

export const decorators = [
    withThemeFromJSXProvider({
        themes: {
            light: lightTheme,
            dark: darkTheme,
        },
        defaultTheme: 'light',
        Provider: ThemeProvider,
        GlobalStyles,
    }),
];
