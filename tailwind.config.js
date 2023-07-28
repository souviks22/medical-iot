/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './app/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend:
        {
            fontFamily: {
                'poppins': ['Poppins', 'sans-serif'],
                'customFont':["Oswald"],
                'my-font':['Georgia','Helvetica']
            },
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            }
        },
        extend: {

        },
    },
    plugins: [],
    variants: {
        extend: {
            display: ["group-hover"],
        }
    }
}
}
