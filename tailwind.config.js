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
      container:{
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm:'2rem',
          lg:'4rem',
          xl:'5rem',
          "2xl":'6rem',
        }
      },
    },
  },
  plugins: [
    // require('daisyui'),
    require('flowbite/plugin')
  ],
}

