import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				// FinCare brand palette (from mobile app)
				primary: {
					DEFAULT: "#0092DD",
					50: "#E6F4FC",
					100: "#CCE9F8",
					200: "#99D3F1",
					300: "#66BDEA",
					400: "#33A7E3",
					500: "#0092DD",
					600: "#0075B1",
					700: "#005885",
					800: "#003A58",
					900: "#001D2C",
				},
				accent: {
					DEFAULT: "#21CC9E",
					light: "#E8F5E9",
				},
				danger: {
					DEFAULT: "#FF5266",
					light: "#FEF2F2",
				},
				warning: {
					DEFAULT: "#FF9500",
					light: "#FFF3E0",
				},
				ink: {
					DEFAULT: "#0D1420",
					soft: "#131313",
					muted: "#6B7280",
					subtle: "#9CA3AF",
				},
				surface: {
					DEFAULT: "#FFFFFF",
					soft: "#F7F7F7",
					alt: "#F9FAFB",
					border: "#DEDEDE",
				},
			},
			fontFamily: {
				sans: ["Inter", "system-ui", "sans-serif"],
			},
			boxShadow: {
				card: "0 1px 2px rgba(0,0,0,0.05), 0 4px 12px rgba(0,0,0,0.04)",
				soft: "0 1px 3px rgba(0,0,0,0.08)",
				glow: "0 10px 40px -10px rgba(0,146,221,0.35)",
			},
			borderRadius: {
				xl: "12px",
				"2xl": "16px",
				"3xl": "24px",
			},
			animation: {
				"fade-in": "fadeIn 0.6s ease-out",
				"slide-up": "slideUp 0.6s ease-out",
				float: "float 3s ease-in-out infinite",
			},
			keyframes: {
				fadeIn: {
					"0%": { opacity: "0" },
					"100%": { opacity: "1" },
				},
				slideUp: {
					"0%": { opacity: "0", transform: "translateY(20px)" },
					"100%": { opacity: "1", transform: "translateY(0)" },
				},
				float: {
					"0%, 100%": { transform: "translateY(0)" },
					"50%": { transform: "translateY(-10px)" },
				},
			},
		},
	},
	plugins: [],
};

export default config;
