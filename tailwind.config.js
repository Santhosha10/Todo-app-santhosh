/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'login-bg':"url('my_react\src\bg.jpg.webp')",
      }
    },
  },
  plugins: [],
}