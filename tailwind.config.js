/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#6366f1', // Indigo 500
                    dark: '#4338ca',    // Indigo 700
                    light: '#818cf8',   // Indigo 400
                },
                secondary: {
                    DEFAULT: '#ec4899', // Pink 500
                    dark: '#be185d',    // Pink 700
                },
                dark: {
                    bg: '#0f172a',      // Slate 900
                    card: '#1e293b',    // Slate 800
                    text: '#f8fafc',    // Slate 50
                    muted: '#94a3b8',   // Slate 400
                }
            },
            fontFamily: {
                sans: ['var(--font-inter)', 'sans-serif'],
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'hero-glow': 'conic-gradient(from 180deg at 50% 50%, #2a8af6 0deg, #a853ba 180deg, #e92a67 360deg)',
            },
        },
    },
    plugins: [],
}
