/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-01": "#49699A",
        "primary-50": "rgba(73, 105, 154, 0.05)",
        "primary-02": "#97B5E2",
        "primary-04": "#E8F0F7",
        "gray-01": "#333333",
        "gray-02": "#6C6C6C",
        "gray-03": "#637381",
        "gray-04": "#AFB7C3",
        "gray-05": "#545454",
        "light-blue": "#F6F7FA",
        "light-gray": "#F7F7F7",
      },
      boxShadow: {
    
        field: "0px 1px 2px rgba(0, 0, 0, 0.05);",
      },
    },
  },
  plugins: [],
};
