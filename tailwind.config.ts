import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#064F82',       // Primary Ocean Navy Blue from c2elng.com
          'navy-dark': '#043254',  // Deep Shadow Navy
          'navy-darker': '#021C30',// Hero & Section Base
          'navy-light': '#0B68A8', // Hover Light Navy
          orange: '#FF8400',     // Energy Flame Orange Accent from c2elng.com
          'orange-hover': '#E07300',
          amber: '#FFA000',      // Safety Amber
          slate: '#0F2C59',      // Card Background Surface
        },
        industrial: {
          950: '#020C1B',
          900: '#04172C',
          850: '#08233C',
          800: '#0E3050',
          700: '#1A436B',
          600: '#2A5D8F',
          500: '#407BAA',
          400: '#75A8D3',
          300: '#A9CDE9',
          100: '#E1EFF9',
          50: '#F2F8FC',
        },
        c2e: {
          navy: '#064F82',
          orange: '#FF8400',
          cyan: '#00C2E8',
          mint: '#10B981',
          steel: '#0A2540',
        },
      },
      fontFamily: {
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      backgroundImage: {
        'grid-pattern': "radial-gradient(circle, rgba(6, 79, 130, 0.2) 1px, transparent 1px)",
        'cad-grid': "linear-gradient(to right, rgba(6, 79, 130, 0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(6, 79, 130, 0.15) 1px, transparent 1px)",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'ocean-hero': 'linear-gradient(135deg, #021C30 0%, #064F82 50%, #042E4E 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
