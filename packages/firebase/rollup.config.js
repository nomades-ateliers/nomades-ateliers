import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';
import {terser} from "rollup-plugin-terser";
console.log('Rollup work..........');

export default {
 input: 'src/firebase.ts', // our source file
 output: [
  {
   file: pkg.main,
   format: 'cjs'
  },
  {
   file: pkg.module,
   format: 'es' // the preferred format
  },
  // {
  //  file: pkg.browser,
  //  format: 'iife',
  //  name: 'MyPackage' // the global which can be used in a browser
  // }
 ],
 external: [
  ...Object.keys(pkg.dependencies || {})
 ],
 plugins: [
  typescript({
   typescript: require('typescript'),
  }),
  terser() // minifies generated bundles
 ]
};