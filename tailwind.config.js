/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                spotify: {
                    black: '#121212',
                    dark: '#181818',
                    light: '#282828',
                    green: '#1DB954',
                    white: '#FFFFFF',
                    grey: '#B3B3B3'
                },
                tesla: {
                    red: '#E82127'
                },
                neon: {
                    blue: '#00f3ff',
                    pink: '#ff00ff',
                    purple: '#bd00ff'
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                orbitron: ['Orbitron', 'sans-serif'],
                rajdhani: ['Rajdhani', 'sans-serif']
            }
        },
    },
    plugins: [],
}
