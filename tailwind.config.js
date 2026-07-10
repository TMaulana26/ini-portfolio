/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neoBg: '#FDFBF7', // Putih Tulang / Bone White
        neoYellow: '#F3E500', // Lemon / Neon Yellow
        neoCyan: '#00F0FF', // Neon Cyan
        neoPink: '#FF007F', // Neon Pink
        neoGreen: '#00FF66', // Neon Green
        neoOrange: '#FF6F00', // Neon Orange
        neoDarkBg: '#18181b', // Zinc-900 for dark mode background
        
        // shadcn-vue variables mapping
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
        },
        destructive: {
          DEFAULT: 'var(--destructive)',
          foreground: 'var(--destructive-foreground)',
        },
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--accent-foreground)',
        },
        popover: {
          DEFAULT: 'var(--popover)',
          foreground: 'var(--popover-foreground)',
        },
        card: {
          DEFAULT: 'var(--card)',
          foreground: 'var(--card-foreground)',
        },
      },
      boxShadow: {
        'neo': '4px 4px 0px 0px rgba(0,0,0,1)',
        'neo-hover': '2px 2px 0px 0px rgba(0,0,0,1)',
        'neo-dark': '4px 4px 0px 0px rgba(255,255,255,1)',
        'neo-dark-hover': '2px 2px 0px 0px rgba(255,255,255,1)',
      }
    },
  },
  plugins: [],
}
