import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        rust: '#C4470A',
        ochre: '#C8882A',
        burgundy: '#3D1A10',
        cream: '#F5EDE0',
        'dusty-rose': '#D4897A',
        sage: '#4A5E3A',
        'off-white': '#FAF6F0',
        'dark-brown': '#2C1A0E',
      },
      fontFamily: {
        cormorant: ['var(--font-cormorant)', 'serif'],
        homemade: ['var(--font-homemade-apple)', 'cursive'],
        jost: ['var(--font-jost)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
