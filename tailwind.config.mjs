/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0A84FF",       // blue accent
        accent: "#F5A623",        // orange accent

        // semantic background + text colors
        'background-light': "#F9FAFB",   // light gray background
        'background-dark': "#0B0C10",    // deep dark background
        'card-light': "#FFFFFF",         // white cards in light mode
        'card-dark': "#1F2937",          // slate cards in dark mode
        'text-light': "#111827",         // dark gray text for light mode
        'text-dark': "#E5E7EB",          // subtle gray text for dark mode
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};