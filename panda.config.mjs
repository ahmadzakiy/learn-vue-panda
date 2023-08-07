import { defineConfig } from "@pandacss/dev"

export default defineConfig({
    // Whether to use css reset
    preflight: true,
    
    // Where to look for your css declarations
    include: ['./src/**/*.{js,jsx,ts,tsx,vue}'],

    // Files to exclude
    exclude: [],

    // Useful for theme customization
    theme: {
      extend: {
        tokens: {
          colors: {
            primary: { value: '#651FFF' },
            danger: {
              value: '#EE0F0F',
              description: 'Color for errors'
            }
          },
          fonts: {
            body: { value: 'system-ui, sans-serif' }
          }
        },
        breakpoints: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1536px'
        }
      }
    },

    // The output directory for your css system
    outdir: "styled-system",
})