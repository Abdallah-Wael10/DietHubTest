export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dietOrange: "#f97316", // pick the exact HEX from their site
        dietBlack: "rgb(28 28 28 / var(--tw-bg-opacity, 1))"
      },
    },
  },
  plugins: [],
}
