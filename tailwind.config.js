
/** @type {import('tailwindcss').Config} */
const config = {
    content: [
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                primaryPlus: "#ff6b35",
                primary: "#DB6110",
                subprimary: "#fce1cf",
                secondary: "#F5F5F5",
                lineSocial: "#1f7135",
                facebookSocial: "#214c8e"
            },
            fontFamily: {
                sans: ["var(--font-sans)"],
                mono: ["var(--font-mono)"],
                poppins: ["var(--font-poppins)"],
                baskervville: ["var(--font-baskervville)"], // ← ชัดเจนที่สุด
            },
        },
    },

};

module.exports = config;
