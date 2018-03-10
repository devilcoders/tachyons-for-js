// @flow
const dimHoverFocus = {
  opacity: '.5',
  transition: 'opacity .15s ease-in'
}

const glowHoverFocus = {
  opacity: '1',
  transition: 'opacity .15s ease-in'
}

const hideChildHoverFocusActive = {
  child: {
    opacity: 1,
    transition: 'opacity .15s ease-in'
  }
}

const underlineHoverFocus = {
  textDecoration: 'underline'
}

export default {
  dim: {
    opacity: 1,
    transition: 'opacity .15s ease-in',

    ':hover': dimHoverFocus,
    ':focus': dimHoverFocus,
    ':active': {
      opacity: '.8',
      transition: 'opacity .15s ease-in'
    }
  },
  glow: {
    transition: 'opacity .15s ease-in',

    ':hover': glowHoverFocus,
    ':focus': glowHoverFocus
  },
  hide_child: {
    child: {
      opacity: 0,
      transition: 'opacity .15s ease-in'
    },
    ':hover': hideChildHoverFocusActive
  },
  underilne_hover: {
    ':hover': underlineHoverFocus,
    ':focus': underlineHoverFocus
  },
  grow: {
    '-moz-osx-font-smoothing': 'grayscale',
    backfaceVisibility: 'hidden',
    transform: 'translateZ(0)',
    transition: 'transform .25s ease-out'
  }
}
