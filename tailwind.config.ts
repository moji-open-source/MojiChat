import { addDynamicIconSelectors } from '@iconify/tailwind'
import { nextui } from '@nextui-org/react'
import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx,css}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'media',
  plugins: [
    addDynamicIconSelectors(),
    nextui({
      themes: {
        dark: {
          colors: {
            background: '#1E1E1E',
          },
        },
      },
    }),
  ],
} satisfies Config
