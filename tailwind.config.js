/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        Fustat : ["Fustat", 'sans-serif']
      },
      screens:{
        xs:'550px'
      },
      colors:{
        darkmain : "#191825" , 
        lightmain : '#76ABAE' , 
        nightmain : '#503C3C' , 
        warmmain:'#31363F' , 
        darkpurple : '#392467' , 
        light : "#EEEEEE"
      }
    },
  },
  plugins: [],
}