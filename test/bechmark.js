const { Suite } = require('benchmark')
const beautifyBenchmark = require('beautify-benchmark')

const tachyons = require('../dist/tachyons-for-js')

const run = () => {
  console.log(
    `Running benchmark tests`
  )

  const testSuite = new Suite()

  testSuite.add('Tachyons', () => {
    return tachyons('f1 fw6 ba b__light_gray lh_copy')
  })

  testSuite.on('cycle', e => {
    beautifyBenchmark.add(e.target)
  })

  testSuite.on('complete', function () {
    beautifyBenchmark.log()
    console.log(`Fastest is: ${this.filter('fastest').map('name')}`)
  })

  return testSuite.run({ async: true })
}

run()
