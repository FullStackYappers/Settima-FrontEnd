/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        kumbh: ["Kumbh Sans", 'sans-serif'],
        outfit: ["Outfit", 'sans-serif']
      },
      colors: {
        "primary": "#E7E7CF",
        "accent": "#16171B",
        "bgcolor": "#000000",
        "accent2" : "#992434" 
      },
      borderRadius: {
        "custom" : "25px",
      },
      width: {
        "90p" : "98%",
      },
      height: {
        "navbar-height": "75px",
      },
      fontSize: {
        "vp" : "3vh",
        "sm-vp" : "1.2vw",
        "smst-vp" : "1.1vw",
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "base-100": "#000000",
          "accent": "#992434",
          "primary": "#E7E7CF",
          "secondary": "#16171B",
        },
      },
    ],
  },
}
