/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            colors: {
                "kape-green": "#4b6158",
                "kape-beige": "#eeebe2",
            },
        },
    },
    plugins: [],
};
