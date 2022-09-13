/* eslint-disable unicorn/prefer-module */
/* eslint-disable @typescript-eslint/no-var-requires */
/**
 * @type {import('next').NextConfig}
 */

module.exports = {
    productionBrowserSourceMaps: true,
    reactStrictMode: true,
    typescript: {
        tsconfigPath: './tsconfig.json',
    },
};
