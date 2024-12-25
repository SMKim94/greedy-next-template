// https://eslint.org/docs/latest/use/configure/configuration-files

import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

import prettierPlugin from 'eslint-plugin-prettier';
import prettierBaseConfig from 'eslint-config-prettier';
import prettierConfig from './.prettierrc.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  {
    ignores: [
      'node_modules/',
      'build/',
      'coverage/',
      '.next/',
      '.git/',
      '.gitignore',
      'pnpm-lock.yaml',
      'README.md',
    ],
  },
  ...compat.config({
    extends: ['next/core-web-vitals', 'next/typescript'],
  }),
  {
    // files: ['**/*'],
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      ...prettierBaseConfig.rules,
      'prettier/prettier': ['error', prettierConfig],
    },
  },
];

export default eslintConfig;
