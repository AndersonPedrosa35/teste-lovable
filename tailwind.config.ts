import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				'color-gray-50': 'hsl(var(--color-gray-50))',
				'color-gray-100': 'hsl(var(--color-gray-100))',
				'color-gray-400': 'hsl(var(--color-gray-400))',
				'color-gray-500': 'hsl(var(--color-gray-500))',
				'color-gray-600': 'hsl(var(--color-gray-600))',
				'color-gray-700': 'hsl(var(--color-gray-700))',
				'color-gray-900': 'hsl(var(--color-gray-900))',
				'color-blue-50': 'hsl(var(--color-blue-50))',
				'color-blue-100': 'hsl(var(--color-blue-100))',
				'color-blue-200': 'hsl(var(--color-blue-200))',
				'color-blue-500': 'hsl(var(--color-blue-500))',
				'color-blue-600': 'hsl(var(--color-blue-600))',
				'color-blue-700': 'hsl(var(--color-blue-700))',
				'color-green-50': 'hsl(var(--color-green-50))',
				'color-green-100': 'hsl(var(--color-green-100))',
				'color-green-500': 'hsl(var(--color-green-500))',
				'color-green-600': 'hsl(var(--color-green-600))',
				'color-green-700': 'hsl(var(--color-green-700))',
				'color-red-100': 'hsl(var(--color-red-100))',
				'color-red-500': 'hsl(var(--color-red-500))',
				'color-red-700': 'hsl(var(--color-red-700))',
				'color-yellow-100': 'hsl(var(--color-yellow-100))',
				'color-yellow-500': 'hsl(var(--color-yellow-500))',
				'color-yellow-600': 'hsl(var(--color-yellow-600))',
				'color-yellow-700': 'hsl(var(--color-yellow-700))',
				'color-purple-50': 'hsl(var(--color-purple-50))',
				'color-purple-100': 'hsl(var(--color-purple-100))',
				'color-purple-600': 'hsl(var(--color-purple-600))',
				'color-orange-600': 'hsl(var(--color-orange-600))',
				'color-white': 'hsl(var(--color-white))',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
