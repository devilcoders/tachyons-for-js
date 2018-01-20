import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'

export default {
  input: 'index.js',
  output: {
    file: 'dist/tachyons-for-js.js',
    format: 'umd',
    name: 'tachyons-for-js'
  },
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**'
    })
  ]
}
