import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
    theme: {
        extend: {
            colors: {
                'persian-blue': {
                    '50': '#eaf4ff',
                    '100': '#dae9ff',
                    '200': '#bcd6ff',
                    '300': '#93baff',
                    '400': '#6891ff',
                    '500': '#4569ff',
                    '600': '#253cff',
                    '700': '#1a2de8',
                    '800': '#192bc2',
                    '900': '#1d2d92',
                    '950': '#111855',
                },
            }
        }
    }
}
