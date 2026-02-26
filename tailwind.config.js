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
        primary: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          500: '#0EA5A5',
          600: '#0d9488',
          700: '#0f766e',
        },
        secondary: {
          500: '#F4A261',
          600: '#e8944e',
        },
        accent: {
          500: '#264653',
          600: '#1d3540',
        }
      },
    },
  },
  plugins: [],
}
