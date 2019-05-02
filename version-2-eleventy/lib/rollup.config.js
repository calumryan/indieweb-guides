const commonjs = require('rollup-plugin-commonjs');
const resolve = require('rollup-plugin-node-resolve');
const {terser} = require('rollup-plugin-terser');

const plugins = [
  resolve({
    browser: true
  }),
  commonjs(),
  terser()
];

module.exports = [{
    input: '_includes/assets/scripts/app.js',
    output: {
      file: '_site/assets/scripts/app.js',
      format: 'iife',
      sourcemap: true,
      name: 'app'
    },
    plugins
  },{
    input: '_includes/assets/scripts/search.js',
    output: {
      file: '_site/assets/scripts/search.js',
      format: 'iife',
      sourcemap: true,
      name: 'search'
    },
    plugins
}];
