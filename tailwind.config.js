/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        skybrand: {
          light: "#9EE2FF",
          DEFAULT: "#66C8FF",
          deep: "#0D67A5",
        },
        accent: {
          coral: "#FF6B4A",
          orange: "#FF7A59",
        },
        anchor: {
          navy: "#0D2438",
          forest: "#0E3B2C",
        },
        neutral: {
          sand: "#F4EDE3",
          beige: "#F7F1E8",
          taupe: "#E8DFD3",
        },
      },
      boxShadow: {
        soft: "0 18px 40px rgba(4, 47, 82, 0.16)",
      },
      borderRadius: {
        xl2: "1.5rem",
      },
    },
    fontFamily: {
      sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif'],
      display: ['"Playfair Display"', 'Georgia', 'serif'],
    },
  },
  plugins: [],
}
