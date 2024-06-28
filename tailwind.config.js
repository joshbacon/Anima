/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'main': ["Kanit", "sans-serif"],
      },
      dropShadow: {
        'circle': '0 0 36px rgba(14, 165, 233, 0.5)'
      },
      animation: {
        'wriggle1': 'wobble1 60s ease-in-out infinite',
        'wriggle2': 'wobble2 60s ease-in-out infinite',
        'wriggle3': 'wobble3 60s ease-in-out infinite',
        'wriggle4': 'wobble4 60s ease-in-out infinite'
      },
      keyframes: {
        'wobble1': {
          '0%':   {transform: 'translate(0, 0)'},
          '15%':  {transform: 'skew( 8deg,  0deg) translate(-300px, -256px)'},
          '32%':  {transform: 'skew(-6deg, -7deg) translate(-300px, -256px)'},
          '50%':  {transform: 'skew( 2deg,  5deg) translate(-300px, -256px)'},
          '68%':  {transform: 'skew( 0deg, -3deg) translate(-300px, -256px)'},
          '85%':  {transform: 'skew( 0deg,  0deg) translate(-300px, -256px)'},
          '100%': {transform: 'translate(0, 0)'}
        },
        'wobble2': {
          '0%':   {transform: 'translate(0, 0)'},
          '15%':  {transform: 'skew( 6deg,  0deg) translate(200px, -180px)'},
          '32%':  {transform: 'skew(-8deg, -5deg) translate(200px, -180px)'},
          '50%':  {transform: 'skew( 3deg,  7deg) translate(200px, -180px)'},
          '68%':  {transform: 'skew( -1deg, -3deg) translate(200px, -180px)'},
          '85%':  {transform: 'skew( 0deg,  0deg) translate(200px, -180px)'},
          '100%': {transform: 'translate(0, 0)'}
        },
        'wobble3': {
          '0%':   {transform: 'translate(0, 0)'},
          '15%':  {transform: 'skew(-6deg,  0deg) translate(-250px, 156px)'},
          '32%':  {transform: 'skew( 7deg,  3deg) translate(-250px, 156px)'},
          '50%':  {transform: 'skew(-5deg, -8deg) translate(-250px, 156px)'},
          '68%':  {transform: 'skew( 2deg,  7deg) translate(-250px, 156px)'},
          '85%':  {transform: 'skew( 0deg,  0deg) translate(-250px, 156px)'},
          '100%': {transform: 'translate(0, 0)'}
        },
        'wobble4': {
          '0%':   {transform: 'translate(0, 0)'},
          '15%':  {transform: 'skew(-8deg,  0deg)  translate(220px, 230px)'},
          '32%':  {transform: 'skew( 8deg,  4deg)  translate(220px, 230px)'},
          '50%':  {transform: 'skew(-4deg, -9deg)  translate(220px, 230px)'},
          '68%':  {transform: 'skew( 4deg,  7deg)  translate(220px, 230px)'},
          '85%':  {transform: 'skew( 0deg,  0deg)  translate(220px, 230px)'},
          '100%': {transform: 'translate(0, 0)'}
        }
      },
    },
  },
  plugins: [],
}
