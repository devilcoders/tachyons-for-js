# Tachyons-For-JS

Tachyons for various CSS-in-JS solutions.

There few `Tachyons` modules, that's difficult to include in this library. I'm still working on proper solution for those.

Those modules are:

- `debug.css`
- `images.css`
- `nested.css`
- `skins-psuedo.css`

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
  - [x] debug-children.css
  - [x] debug-grid.css
  - [ ] debug.css
  - [x] hovers.css
  - [ ] images.css
  - [x] skins.css
  - [ ] skins-psuedo.css

- [ ] Add documentation

- [ ] Add examples for different CSS-in-JS solutions
  - [ ] fela.js
  - [ ] csx
  - [ ] styled-components
  - [ ] css modules
  - [ ] styled-jsx
  - [ ] glamourous
  - [ ] _...any other css-in-js engine out there_

- [ ] Add the ability to import individual modules only
- [x] Make it possible to chain modules
- [ ] Add utils module to provide various helpers
