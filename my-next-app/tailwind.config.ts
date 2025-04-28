import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        // Adjusted content paths to match the App Router structure
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        screens: {
            sm: '375px',
            md: '768px',
            lg: '1200px',
            ms: '541px',
        },
    },
    plugins: [],
};

export default config;
