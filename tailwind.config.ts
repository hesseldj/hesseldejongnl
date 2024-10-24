import type {Config} from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-lato)', 'sans-serif'],
            },
            gridTemplateColumns: {
                'cv': 'minmax(min-content, 25ch) minmax(min-content, 4em) minmax(min-content, 70ch)',
                'cv-mobile': 'minmax(min-content, 4em) minmax(min-content, 70ch)',
            },
            backgroundColor: {
                'primary': 'var( --hdj-primary)',
                'primary-faded': 'var( --hdj-primary-faded)',
                'secondary': 'var( --hdj-secondary)',
                'secondary-faded': 'var( --hdj-secondary-faded)',
            },
            backgroundImage: {
                'blob': "url('../img/oval.svg')",
            },
        },
    },
    plugins: [],
};
export default config;
