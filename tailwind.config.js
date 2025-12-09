import daisyui from 'daisyui'

export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        'navy': {
          DEFAULT: '#173FC2',
          50: '#E8EDF5',
          100: '#D1DBEB',
          200: '#A3B7D7',
          300: '#7593C3',
          400: '#476FAF',
          500: '#0A1F44',
          600: '#081937',
          700: '#06132A',
          800: '#040D1C',
          900: '#02060F',
        },
        'light-bg': '#FFFFFF',
        'light-gray': '#F5F7FA',
        'medium-gray': '#E5E9F0',
        'text-dark': '#1A1A1A',
        'text-gray': '#666666',
        'accent': '#039BE5',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        'serif': ['Georgia', 'serif'],
      },
    },
  },
  plugins: [daisyui],
}
