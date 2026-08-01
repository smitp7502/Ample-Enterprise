import type { Config } from 'tailwindcss'

export default {
    content: ['./index.html', './src/**/*.{ts,tsx}'],
    theme: {
        extend: {
            colors: {
                background: '#f5f7fb',
                surface: '#ffffff',
                'surface-alt': '#eef2f7',
                foreground: '#171b24',
                muted: '#5c6473',
                primary: '#071527',
                'primary-soft': '#112748',
                accent: '#b8860b',
                'accent-soft': '#f1d58b',
                border: '#d7deea',
                success: '#0f8f52',
            },
            fontFamily: {
                sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
                display: ['Space Grotesk', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
            },
            boxShadow: {
                card: '0 16px 45px rgba(15, 23, 42, 0.08)',
            },
        },
    },
} satisfies Config