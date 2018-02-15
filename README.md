# Tachyons-For-JS

Tachyons for various CSS-in-JS solutions.

There few `Tachyons` modules, that's difficult to include in this library. I'm still working on proper solution for those.

Those modules are:

- `debug.css`
- `images.css`
- `nested.css`
- `skins-psuedo.css`

## v0.3.0 Breaking API change

Object properties chaining API is now replaced with functional API for speed.
Now we export a function that accepts a string of tachyons classes and
returns an Object with styles for those classes.

```js
...tc('ma0 pa0 ttu')

/**
 {
   margin: 0,
   padding: 0,
   textTransform: 'uppercase'
 }
*/
```

## Quick Example (Fela.js)

```js
import tc from 'tachyons-for-js'
import { createComponent } from 'react-fela'

const style = () => ({
  ...tc('ma0 pa0 ttu')
})

export default createComponent(style)
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
