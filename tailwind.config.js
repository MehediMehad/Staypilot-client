/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily:{
        lato: "'Lato', satisfies", 
      },
      colors: {
        primary: "#ff8901",
        hoverPrimary: "#ff8901",
        secondary: "#fb923c",
      },
    },
  },
  plugins: [
    // require('daisyui'),
    require('flowbite/plugin')
  ],
}

