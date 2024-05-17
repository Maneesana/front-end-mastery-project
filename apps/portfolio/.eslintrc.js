/** @type {import("eslint").Linter.Config} */
module.exports = {
    root: true,
    extends: ['@repo/eslint-config/next.js', '@repo/eslint-config/library.js'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: true,
        project: ['tsconfig.json'],
    },
    rules: { 'no-new-object': 'error' },
};
