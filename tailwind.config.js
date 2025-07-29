/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            container: {
                center: true,
                padding: {
                    DEFAULT: '1rem',
                    sm: '2rem',
                    lg: '4rem',
                    xl: '5rem',
                    '2xl': '6rem',
                },
            },
            colors: {
                primary: '#1587F9',
                dark: '#2F2F2F',
                grey: '#949494',
                text: '#171717',
                light: '#FAFAFA',
            },
            fontFamily: {
                // Define custom fonts if you use @next/font or @fontsource
                poppins: ['var(--font-poppins-sans)', 'sans-serif'],
            },
            
        },
    },
    plugins: [],
}
