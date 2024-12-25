/**
 * @type {import('lint-staged').Config}
 */
const config = {
  '*': ['pnpm run prettier', 'pnpm run lint'],
};

export default config;
