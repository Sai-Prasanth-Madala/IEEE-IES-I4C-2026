/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0A1E3D',      // deep blueprint navy — headings, dark sections
        blue: '#145DA0',     // primary brand blue
        teal: '#17B8A6',     // circuit-trace accent / signature color
        amber: '#F2A93B',    // signal amber — dates, live tags
        paper: '#F5F7FA',    // light background
        line: 'rgba(10,30,61,0.10)',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"IBM Plex Sans"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      backgroundImage: {
        blueprint:
          'linear-gradient(rgba(10,30,61,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(10,30,61,0.06) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '28px 28px',
      },
    },
  },
  plugins: [],
}
