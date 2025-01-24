// https://eslint.org/docs/latest/use/configure/configuration-files

import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

import prettierPlugin from 'eslint-plugin-prettier';
import prettierBaseConfig from 'eslint-config-prettier';
import prettierConfig from './.prettierrc.mjs';

import reactQueryPlugin from '@tanstack/eslint-plugin-query';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  {
    ignores: [
      'node_modules/',
      'pnpm-lock.yaml',
      'build/',
      '.next/',
      'coverage/',
      'tests/e2e/playwright-report',
      'tests/e2e/test-results',
      '.git/',
      '.gitignore',
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
  ...reactQueryPlugin.configs['flat/recommended'],
];

export default eslintConfig;
