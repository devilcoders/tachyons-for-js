# Tachyons-For-JS

Tachyons for various CSS-in-JS solutions.

## Quick Example

```js
import tc from 'tachyons-for-js'

const styles = () => ({
  ...tc.ma0.pa0.ttu
})

/* 
{
  margin: 0,
  padding: 0,
  textTransform: 'uppercase'
}
*/
```

## TODO

- [ ] Add missing tachyons modules
  - [x] border-colors.css
  - [x] border-style.css
  - [x] border-widths.css
  - [ ] debug-children.css
  - [ ] debug-grid.css
  - [ ] debug.css
  - [x] hovers.css
  - [x] skins.css

- [ ] Add documentation

- [ ] Add examples for different CSS-in-JS solutions
  - [ ] fela.js
  - [ ] csx
  - [ ] styled-components
  - [ ] css modules
  - [ ] styled-jsx
  - [ ] glamourous

- [ ] Add the ability to import individual modules only
- [x] Make it possible to chain modules
- [ ] Add utils module to provide various helpers
