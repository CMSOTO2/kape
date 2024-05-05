const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            colors: {
                "kape-green": "#4b6158",
                "kape-beige": "#eeebe2",
                "kape-black": "#0A0A0A",
                "kape-gray": "#242424",
                "kape-orange": "#F4A259"
            },
            fontFamily: {
                sans: ['"Roboto"', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [],
};
