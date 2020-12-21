module.exports = {
	env: {
		browser: true,
		es6: true,
		jest: true,
	},
	extends: ["plugin:react/recommended", "airbnb", "prettier", "prettier/react"],
	globals: {
		Atomics: "readonly",
		SharedArrayBuffer: "readonly",
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2018,
		sourceType: "module",
	},
	plugins: ["react", "react-hooks", "prettier"],
	rules: {
		"spaced-comment": ["error", "always", { markers: ["/"] }],
		"react/react-in-jsx-scope": "off",
		"react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
		"jsx-a11y/anchor-is-valid": "off",
		"jsx-a11y/anchor-has-content": "off",
	},
};
