/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'header-img' : "url('https://assets.nflxext.com/ffe/siteui/vlv3/d1532433-07b1-4e39-a920-0f08b81a489e/67033404-2df8-42e0-a5a0-4c8288b4da2c/IN-en-20231120-popsignuptwoweeks-perspective_alpha_website_small.jpg')"
      },
      screens: {
        'nav-sec':'274px',
        'nav-brk':'600px',
        'mobile': '900px',
        // => @media (min-width: 992px) { ... }
      },
    },
  },
  plugins: [],
}
