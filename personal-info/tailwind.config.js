/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'navbar-bg': '#2A9D8F',
        'home-bg': '#E9C46A',
        'skill-bg': '#E76F51',
        'project-bg': '#F4A261',
        'work-bg': '#E9C46A',
        'education-bg': '#93C5FD',
        'button-project': '#14213D',
        'button-hover': '#60A5FA',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

