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
                // Complex site-specific column configuration
                'cv': 'minmax(min-content, 30ch) minmax(min-content, 4em) minmax(min-content, 70ch)',
            },
            backgroundColor: {
                'primary': 'var( --hdj-primary)',
                'primary-faded': 'var( --hdj-primary-faded)',
                'secondary': 'var( --hdj-secondary)',
                'secondary-faded': 'var( --hdj-secondary-faded)',
            },
        },
    },
    plugins: [],
};
export default config;
