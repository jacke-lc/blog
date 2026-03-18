/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        surface: '#0a0a0a',
        panel: '#111111',
        muted: '#a3a3a3',
        line: '#262626',
        brand: '#f5f5f5'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      maxWidth: {
        content: '72rem'
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0, 0, 0, 0.25)'
      }
    }
  },
  plugins: []
};
