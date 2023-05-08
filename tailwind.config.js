/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./*.{html,js}"],
	theme: {
		textColor: {
			black: "#1E1E1E",
			white: "#F3F4F6",
			gray: "#D9D9D9",
		},
		backgroundColor: {
			black: "#1E1E1E",
			white: "#F3F4F6",
			gray: "#D9D9D9",
		},
		borderColor: {
			black: "#1E1E1E",
			white: "#F3F4F6",
			gray: "#D9D9D9",
		},

		extend: {
			fontFamily: {
				inter: ["Inter", "sans-serif"],
			},
			borderRadius: {
				"2xl": "20px",
			},
		},
	},
	plugins: [],
};
