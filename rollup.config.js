import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import filesize from 'rollup-plugin-filesize'
import uglify from 'rollup-plugin-uglify'

export default {
  input: 'index.js',
  treeshake: true,
  output: {
    file: 'dist/tachyons-for-js.js',
    format: 'umd',
    name: 'tachyons-for-js'
  },
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**'
    }),
    uglify(),
    filesize()
  ]
}
