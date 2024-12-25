/**
 * @see https://github.com/lint-staged/lint-staged?tab=readme-ov-file#configuration
 * @type {import('lint-staged').Config}
 */
const config = {
  '*': ['pnpm run prettier', 'pnpm run lint'],
};

export default config;
