/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'image-small': "url('/src/assets/headingbackground_mobil_640.png')",
        'image-medium': "url('/src/assets/headingbackground_tablet_2.png')",
        'image-large': "url('/src/assets/headingbackgrounddesktop5.png')",}),
    },
  },
  plugins: [],
}