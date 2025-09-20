/** @type {import('prettier').Config} */
const config = {
  semi: true,
  singleQuote: false,
  trailingComma: "es5",
  plugins: ["prettier-plugin-tailwindcss"],
  tailwindFunctions: ["clsx", "cn"],
  printWidth: 90
};

export default config;
