/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
       "primary-01": "#49699A",
       "primary-02": "#97B5E2",
       "gray-01": "#333333",
       "gray-02": "#6C6C6C",
       "gray-03": "#637381",
       "light-blue": "#F6F7FA",
       "light-gray": "#F7F7F7"
      },
    },
  },
  plugins: [],
}

