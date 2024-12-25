/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import('prettier').Config}
 */
const config = {
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  endOfLine: 'lf',
  tailwindStylesheet: './src/app/globals.css',
  tailwindConfig: './tailwind.config.ts',
  tailwindAttributes: ['className'],
  plugins: ['prettier-plugin-tailwindcss'],
};

export default config;
