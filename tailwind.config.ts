import type {Config} from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            screens: {
                sm: '360px',
                md: '580px',
                lg: '1024px',
                xl: '1024px'
            }
        },
        container: {
            center: true,
        },
        colors: {
            primary: '#ff6464',
            secondary: '#00a8cc',
            dark: '#21243d',
            light: '#8695a4'
        }
    },
    plugins: [],
};
export default config;
