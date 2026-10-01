/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          emerald: '#10B981',
          'emerald-dark': '#059669',
          'emerald-light': '#D1FAE5',
          purple: '#8B5CF6',
          'purple-dark': '#7C3AED',
          'purple-light': '#EDE9FE',
          rose: '#F43F5E',
          'rose-dark': '#E11D48',
          'rose-light': '#FFE4E6',
          yellow: '#FACC15',
          'yellow-light': '#FEF9C3',
          dark: '#0F172A',
          charcoal: '#1E293B',
          canvas: '#FAFAFA'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem'
      },
      boxShadow: {
        'soft-sm': '0 1px 3px 0 rgba(0, 0, 0, 0.04), 0 1px 2px -1px rgba(0, 0, 0, 0.04)',
        'soft-md': '0 4px 16px -2px rgba(15, 23, 42, 0.06), 0 2px 6px -2px rgba(15, 23, 42, 0.04)',
        'soft-lg': '0 12px 32px -4px rgba(15, 23, 42, 0.08), 0 4px 12px -2px rgba(15, 23, 42, 0.03)',
        'soft-xl': '0 20px 48px -6px rgba(15, 23, 42, 0.1), 0 8px 16px -4px rgba(15, 23, 42, 0.04)',
        'glow-emerald': '0 8px 24px -4px rgba(16, 185, 129, 0.25)',
        'glow-purple': '0 8px 24px -4px rgba(139, 92, 246, 0.25)'
      }
    },
  },
  plugins: [],
}
