(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global['tachyons-for-js'] = factory());
}(this, (function () { 'use strict';

var aspectRatios = {
  aspect_ratio: {
    height: 0,
    position: 'absolute'
  },
  aspect_ratio__16x9: { paddingBottom: '56.25%' },
  aspect_ratio__9x16: { paddingBottom: '177.77%' },
  aspect_ratio__4x3: { paddingBottom: '75%' },
  aspect_ratio__3x4: { paddingBottom: '133.33%' },
  aspect_ratio__6x4: { paddingBottom: '66.6%' },
  aspect_ratio__4x6: { paddingBottom: '150%' },
  aspect_ratio__8x5: { paddingBottom: '62.5%' },
  aspect_ratio__5x8: { paddingBottom: '160%' },
  aspect_ratio__7x5: { paddingBottom: '71.42%' },
  aspect_ratio__5x7: { paddingBottom: '140%' },
  aspect_ratio__1x1: { paddingBottom: '100%' },
  aspect_ratio__object: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 100
  }
};

var backgroundPosition = {
  bg_center: {
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center'
  },

  bg_top: {
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top center'
  },

  bg_right: {
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center right'
  },

  bg_bottom: {
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom center'
  },

  bg_left: {
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center left'
  }
};

var backgroundSize = {
  cover: { backgroundSize: 'cover !important' },
  contain: { backgroundSize: 'contain !important' }
};

var v = {
  black: '#000',
  nearBlack: '#111',
  darkGray: '#333',
  midGray: '#555',
  gray: '#777',
  silver: '#999',
  lightSilver: '#aaa',
  moonGray: '#ccc',
  lightGray: '#eee',
  nearWhite: '#f4f4f4',
  white: '#fff',
  black_90: 'rgba(0,0,0,.9)',
  black_80: 'rgba(0,0,0,.8)',
  black_70: 'rgba(0,0,0,.7)',
  black_60: 'rgba(0,0,0,.6)',
  black_50: 'rgba(0,0,0,.5)',
  black_40: 'rgba(0,0,0,.4)',
  black_30: 'rgba(0,0,0,.3)',
  black_20: 'rgba(0,0,0,.2)',
  black_10: 'rgba(0,0,0,.1)',
  black_05: 'rgba(0,0,0,.05)',
  black_025: 'rgba(0,0,0,.025)',
  black_0125: 'rgba(0,0,0,.0125)',
  white_90: 'rgba(255,255,255,.9)',
  white_80: 'rgba(255,255,255,.8)',
  white_70: 'rgba(255,255,255,.7)',
  white_60: 'rgba(255,255,255,.6)',
  white_50: 'rgba(255,255,255,.5)',
  white_40: 'rgba(255,255,255,.4)',
  white_30: 'rgba(255,255,255,.3)',
  white_20: 'rgba(255,255,255,.2)',
  white_10: 'rgba(255,255,255,.1)',
  white_05: 'rgba(255,255,255,.05)',
  white_025: 'rgba(255,255,255,.025)',
  white_0125: 'rgba(255,255,255,.0125)',
  darkRed: '#e7040f',
  red: '#ff4136',
  lightRed: '#ff725c',
  orange: '#ff6300',
  gold: '#ffb700',
  yellow: '#ffd700',
  lightYellow: '#fbf1a9',
  purple: '#5e2ca5',
  lightPurple: '#a463f2',
  darkPink: '#d5008f',
  hotPink: '#ff41b4',
  pink: '#ff80cc',
  lightPink: '#ffa3d7',
  darkGreen: '#137752',
  green: '#19a974',
  lightGreen: '#9eebcf',
  navy: '#001b44',
  darkBlue: '#00449e',
  blue: '#357edd',
  lightBlue: '#96ccff',
  lightestBlue: '#cdecff',
  washedBlue: '#f6fffe',
  washedGreen: '#e8fdf5',
  washedYellow: '#fffceb',
  washedRed: '#ffdfdf',
  spacingNone: 0,
  spacingExtraSmall: '.25rem',
  spacingSmall: '.5rem',
  spacingMedium: '1rem',
  spacingLarge: '2rem',
  spacingExtraLarge: '4rem',
  spacingExtraExtraLarge: '8rem',
  spacingExtraExtraExtraLarge: '16rem'
};

var borderColors = {
  b__black: {
    borderColor: v.black
  },
  b__near_black: {
    borderColor: v.nearBlack
  },
  b__dark_gray: {
    borderColor: v.darkGray
  },
  b__mid_gray: {
    borderColor: v.midGray
  },
  b__gray: {
    borderColor: v.gray
  },
  b__silver: {
    borderColor: v.silver
  },
  b__light_silver: {
    borderColor: v.lightSilver
  },
  b__moon_gray: {
    borderColor: v.moonGray
  },
  b__light_gray: {
    borderColor: v.lightGray
  },
  b__near_white: {
    borderColor: v.nearWhite
  },
  b__white: {
    borderColor: v.white
  },
  b__white_90: {
    borderColor: v.white_90
  },
  b__white_80: {
    borderColor: v.white_80
  },
  b__white_70: {
    borderColor: v.white_70
  },
  b__white_60: {
    borderColor: v.white_60
  },
  b__white_50: {
    borderColor: v.white_50
  },
  b__white_40: {
    borderColor: v.white_40
  },
  b__white_30: {
    borderColor: v.white_30
  },
  b__white_20: {
    borderColor: v.white_20
  },
  b__white_10: {
    borderColor: v.white_10
  },
  b__white_05: {
    borderColor: v.white_05
  },
  b__white_025: {
    borderColor: v.white_025
  },
  b__white_0125: {
    borderColor: v.white_0125
  },
  b__black_90: {
    borderColor: v.black_90
  },
  b__black_80: {
    borderColor: v.black_80
  },
  b__black_70: {
    borderColor: v.black_70
  },
  b__black_60: {
    borderColor: v.black_60
  },
  b__black_50: {
    borderColor: v.black_50
  },
  b__black_40: {
    borderColor: v.black_40
  },
  b__black_30: {
    borderColor: v.black_30
  },
  b__black_20: {
    borderColor: v.black_20
  },
  b__black_10: {
    borderColor: v.black_10
  },
  b__black_05: {
    borderColor: v.black_05
  },
  b__black_025: {
    borderColor: v.black_025
  },
  b__black_0125: {
    borderColor: v.black_0125
  },
  b__dark_red: {
    borderColor: v.darkRed
  },
  b__red: {
    borderColor: v.red
  },
  b__light_red: {
    borderColor: v.lightRed
  },
  b__orange: {
    borderColor: v.orange
  },
  b__gold: {
    borderColor: v.gold
  },
  b__yellow: {
    borderColor: v.yellow
  },
  b__light_yellow: {
    borderColor: v.lightYellow
  },
  b__purple: {
    borderColor: v.purple
  },
  b__light_purple: {
    borderColor: v.lightPurple
  },
  b__dark_pink: {
    borderColor: v.darkPink
  },
  b__hot_pink: {
    borderColor: v.hotPink
  },
  b__pink: {
    borderColor: v.pink
  },
  b__light_pink: {
    borderColor: v.lightPink
  },
  b__dark_green: {
    borderColor: v.darkGreen
  },
  b__green: {
    borderColor: v.green
  },
  b__light_green: {
    borderColor: v.lightGreen
  },
  b__navy: {
    borderColor: v.navy
  },
  b__dark_blue: {
    borderColor: v.darkBlue
  },
  b__blue: {
    borderColor: v.blue
  },
  b__light_blue: {
    borderColor: v.lightBlue
  },
  b__lightest_blue: {
    borderColor: v.lightestBlue
  },
  b__washed_blue: {
    borderColor: v.washedBlue
  },
  b__washed_green: {
    borderColor: v.washedGreen
  },
  b__washed_yellow: {
    borderColor: v.washedYellow
  },
  b__washed_red: {
    borderColor: v.washedRed
  },
  b__transparent: {
    borderColor: 'transparent'
  },
  b__inherit: {
    borderColor: 'inherit'
  }
};

var borderRadius = {
  br0: { borderRadius: 0 },
  br1: { borderRadius: '.125rem' },
  br2: { borderRadius: '.25rem' },
  br3: { borderRadius: '.5rem' },
  br4: { borderRadius: '1rem' },
  br_100: { borderRadius: '100%' },
  br_pill: { borderRadius: '9999px' },
  br__bottom: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0
  },
  br__top: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  br__right: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0
  },
  br__left: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0
  }
};

var borderStyle = {
  b__dotted: {
    borderStyle: 'dotted'
  },
  b__dashed: {
    borderStyle: 'dashed'
  },
  b__solid: {
    borderStyle: 'solid'
  },
  b__none: {
    borderStyle: 'none'
  }
};

var borderWidths = {
  bw0: { borderWidth: 0 },
  bw1: { borderWidth: '.125rem' },
  bw2: { borderWidth: '.25rem' },
  bw3: { borderWidth: '.5rem' },
  bw4: { borderWidth: '1rem' },
  bw5: { borderWidth: '2rem' },
  bt_0: { borderTopWidth: 0 },
  br_0: { borderRightWidth: 0 },
  bb_0: { borderBottomWidth: 0 },
  bl_0: { borderLeftWidth: 0 }
};

var borders = {
  ba: { borderStyle: 'solid', borderWidth: '1px' },
  bt: { borderTopStyle: 'solid', borderTopWidth: '1px' },
  br: { borderRightStyle: 'solid', borderRightWidth: '1px' },
  bb: { borderBottomStyle: 'solid', borderBottomWidth: '1px' },
  bl: { borderLeftStyle: 'solid', borderLeftWidth: '1px' },
  bn: { borderStyle: 'none', borderWidth: 0 }
};

var boxShadow = {
  shadow_1: { boxShadow: '0px 0px 4px 2px rgba( 0, 0, 0, 0.2 )' },
  shadow_2: { boxShadow: '0px 0px 8px 2px rgba( 0, 0, 0, 0.2 )' },
  shadow_3: { boxShadow: '2px 2px 4px 2px rgba( 0, 0, 0, 0.2 )' },
  shadow_4: { boxShadow: '2px 2px 8px 0px rgba( 0, 0, 0, 0.2 )' },
  shadow_5: { boxShadow: '4px 4px 8px 0px rgba( 0, 0, 0, 0.2 )' }
};

var boxSizing = {
  border_box: {
    boxSizing: 'border-box'
  }
};

var clears = {
  cf: {
    ':before': {
      content: '',
      display: 'table'
    },
    ':after': {
      content: '',
      display: 'table',
      clear: 'both'
    }
  },
  cl: { clear: 'left' },
  cr: { clear: 'right' },
  cb: { clear: 'both' },
  cn: { clear: 'none' }
};

var code = {
  pre: {
    overflowX: 'auto',
    overflowY: 'hidden',
    overflow: 'scroll'
  }
};

var coordinates = {
  top_0: { top: 0 },
  right_0: { right: 0 },
  bottom_0: { bottom: 0 },
  left_0: { left: 0 },

  top_1: { top: '1rem' },
  right_1: { right: '1rem' },
  bottom_1: { bottom: '1rem' },
  left_1: { left: '1rem' },

  top_2: { top: '2rem' },
  right_2: { right: '2rem' },
  bottom_2: { bottom: '2rem' },
  left_2: { left: '2rem' },

  top__1: { top: '-1rem' },
  right__1: { right: '-1rem' },
  bottom__1: { bottom: '-1rem' },
  left__1: { left: '-1rem' },

  top__2: { top: '-2rem' },
  right__2: { right: '-2rem' },
  bottom__2: { bottom: '-2rem' },
  left__2: { left: '-2rem' },

  absolute__fill: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  }
};

var display = {
  dn: { display: 'none' },
  di: { display: 'inline' },
  db: { display: 'block' },
  dib: { display: 'inline-block' },
  dit: { display: 'inline-table' },
  dt: { display: 'table' },
  dtc: { display: 'table-cell' },
  dt_row: { display: 'table-row' },
  dt_row_group: { display: 'table-row-group' },
  dt_column: { display: 'table-column' },
  dt_column_group: { display: 'table-column-group' },

  dt__fixed: {
    tableLayout: 'fixed',
    width: '100%'
  }
};

var flexbox = {
  flex: { display: 'flex' },
  inline_flex: { display: 'inline-flex' },

  flex_auto: {
    flex: '1 1 auto',
    minWidth: 0,
    minHeight: 0
  },

  flex_none: { flex: 'none' },

  flex_column: { flexDirection: 'column' },
  flex_row: { flexDirection: 'row' },
  flex_wrap: { flexWrap: 'wrap' },
  flex_nowrap: { flexWrap: 'nowrap' },
  flex_wrap_reverse: { flexWrap: 'wrap-reverse' },
  flex_column_reverse: { flexDirection: 'column-reverse' },
  flex_row_reverse: { flexDirection: 'row-reverse' },

  items_start: { alignItems: 'flex-start' },
  items_end: { alignItems: 'flex-end' },
  items_center: { alignItems: 'center' },
  items_baseline: { alignItems: 'baseline' },
  items_stretch: { alignItems: 'stretch' },

  self_start: { alignSelf: 'flex-start' },
  self_end: { alignSelf: 'flex-end' },
  self_center: { alignSelf: 'center' },
  self_baseline: { alignSelf: 'baseline' },
  self_stretch: { alignSelf: 'stretch' },

  justify_start: { justifyContent: 'flex-start' },
  justify_end: { justifyContent: 'flex-end' },
  justify_center: { justifyContent: 'center' },
  justify_between: { justifyContent: 'space-between' },
  justify_around: { justifyContent: 'space-around' },

  content_start: { alignContent: 'flex-start' },
  content_end: { alignContent: 'flex-end' },
  content_center: { alignContent: 'center' },
  content_between: { alignContent: 'space-between' },
  content_around: { alignContent: 'space-around' },
  content_stretch: { alignContent: 'stretch' },

  order_0: { order: 0 },
  order_1: { order: 1 },
  order_2: { order: 2 },
  order_3: { order: 3 },
  order_4: { order: 4 },
  order_5: { order: 5 },
  order_6: { order: 6 },
  order_7: { order: 7 },
  order_8: { order: 8 },
  order_last: { order: 99999 }
};

var floats = {
  fl: { float: 'left' },
  fr: { float: 'right' },
  fn: { float: 'none' }
};

var fontFamily = {
  sans_serif: {
    fontFamily: '-apple-system, BlinkMacSystemFont,\n                 \'avenir next\', avenir,\n                 \'helvetica neue\', helvetica,\n                 ubuntu,\n                 roboto, noto,\n                 \'segoe ui\', arial,\n                 sans-serif'
  },

  serif: {
    fontFamily: 'georgia, times, serif'
  },

  system_sans_serif: {
    fontFamily: 'sans-serif'
  },

  system_serif: {
    fontFamily: 'serif'
  },

  code: {
    fontFamily: 'Consolas, monaco, monospace'
  },

  courier: {
    fontFamily: '"Courier Next", courier, monospace'
  },

  helvetica: {
    fontFamily: "'helvetica neue', helvetica, sans-serif"
  },

  avenir: {
    fontFamily: '"avenir next", avenir, sans-serif'
  },

  athelas: {
    fontFamily: 'athelas, georgia, serif'
  },

  georgia: {
    fontFamily: 'georgia, serif'
  },

  times: {
    fontFamily: 'times, serif'
  },

  bodoni: {
    fontFamily: '"Bodoni MT", serif'
  },

  calisto: {
    fontFamily: '"Calisto MT", serif'
  },

  garamond: {
    fontFamily: 'garamond, serif'
  },

  baskerville: {
    fontFamily: 'baskerville, serif'
  }
};

var fontStyle = {
  i: {
    fontStyle: 'italic'
  },
  fs_normal: {
    fontStyle: 'normal'
  }
};

var fontWeight = {
  normal: {
    fontWeight: 'normal'
  },
  b: {
    fontWeight: 'bold'
  },
  fw1: {
    fontWeight: 100
  },
  fw2: {
    fontWeight: 200
  },
  fw3: {
    fontWeight: 300
  },
  fw4: {
    fontWeight: 400
  },
  fw5: {
    fontWeight: 500
  },
  fw6: {
    fontWeight: 600
  },
  fw7: {
    fontWeight: 700
  },
  fw8: {
    fontWeight: 800
  },
  fw9: {
    fontWeight: 900
  }
};

var forms = {
  input_reset: {
    WebkitAppearance: 'none',
    MozAppearance: 'none'
  }
};

var heights = {
  h1: {
    height: '1rem'
  },
  h2: {
    height: '2rem'
  },
  h3: {
    height: '4rem'
  },
  h4: {
    height: '8rem'
  },
  h5: {
    height: '16rem'
  },
  h_25: {
    height: '25%'
  },
  h_50: {
    height: '50%'
  },
  'h_75': {
    height: '75%'
  },
  h_100: {
    height: '100%'
  },
  min_h_100: {
    minHeight: '100%'
  },
  vh_25: {
    height: '25vh'
  },
  vh_50: {
    height: '50vh'
  },
  vh_75: {
    height: '75vh'
  },
  vh_100: {
    height: '100vh'
  },
  min_vh_100: {
    minHeight: '100vh'
  },
  h_auto: {
    height: 'auto'
  },
  h_inherit: {
    height: 'inherit'
  }
};

var dimHoverFocus = {
  opacity: '.5',
  transition: 'opacity .15s ease-in'
};

var glowHoverFocus = {
  opacity: '1',
  transition: 'opacity .15s ease-in'
};

var hideChildHoverFocusActive = {
  child: {
    opacity: 1,
    transition: 'opacity .15s ease-in'
  }
};

var underlineHoverFocus = {
  textDecoration: 'underline'
};

var hovers = {
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
};

var letterSpacing = {
  tracked: {
    letterSpacing: '.1em'
  },
  tracked_tight: {
    letterSpacing: '-.05em'
  },
  tracked_mega: {
    letterSpacing: '.25em'
  }
};

var lineHeight = {
  lh_solid: {
    lineHeight: 1
  },
  lh_title: {
    lineHeight: 1.25
  },
  lh_copy: {
    lineHeight: 1.5
  }
};

var links = {
  link: {
    textDecoration: 'none',
    transition: 'color .15s ease-in',
    ':link': {
      transition: 'color .15s ease-in'
    },
    ':visited': {
      transition: 'color .15s ease-in'
    },
    ':hover': {
      transition: 'color .15s ease-in'
    },
    ':active': {
      transition: 'color .15s ease-in'
    },
    ':focus': {
      transition: 'color .15s ease-in',
      outline: '1px dotted currentColor'
    }
  }
};

var lists = {
  list: {
    listStyleType: 'none'
  }
};

var maxWidths = {
  mw_100: {
    maxWidth: '100%'
  },
  mw1: {
    maxWidth: '1rem'
  },
  mw2: {
    maxWidth: '2rem'
  },
  mw3: {
    maxWidth: '4rem'
  },
  mw4: {
    maxWidth: '8rem'
  },
  mw5: {
    maxWidth: '16rem'
  },
  mw6: {
    maxWidth: '32rem'
  },
  mw7: {
    maxWidth: '48rem'
  },
  mw8: {
    maxWidth: '64rem'
  },
  mw9: {
    maxWidth: '96rem'
  },
  mw_none: {
    maxWidth: 'none'
  }
};

var negativeMargins = {
  na1: {
    margin: '-' + v.spacingExtraSmall
  },
  na2: {
    margin: '-' + v.spacingSmall
  },
  na3: {
    margin: '-' + v.spacingMedium
  },
  na4: {
    margin: '-' + v.spacingLarge
  },
  na5: {
    margin: '-' + v.spacingExtraLarge
  },
  na6: {
    margin: '-' + v.spacingExtraExtraLarge
  },
  na7: {
    margin: '-' + v.spacingExtraExtraExtraLarge
  },
  nl1: {
    marginLeft: '-' + v.spacingExtraSmall
  },
  nl2: {
    marginLeft: '-' + v.spacingSmall
  },
  nl3: {
    marginLeft: '-' + v.spacingMedium
  },
  nl4: {
    marginLeft: '-' + v.spacingLarge
  },
  nl5: {
    marginLeft: '-' + v.spacingExtraLarge
  },
  nl6: {
    marginLeft: '-' + v.spacingExtraExtraLarge
  },
  nl7: {
    marginLeft: '-' + v.spacingExtraExtraExtraLarge
  },
  nr1: {
    marginRight: '-' + v.spacingExtraSmall
  },
  nr2: {
    marginRight: '-' + v.spacingSmall
  },
  nr3: {
    marginRight: '-' + v.spacingMedium
  },
  nr4: {
    marginRight: '-' + v.spacingLarge
  },
  nr5: {
    marginRight: '-' + v.spacingExtraLarge
  },
  nr6: {
    marginRight: '-' + v.spacingExtraExtraLarge
  },
  nr7: {
    marginRight: '-' + v.spacingExtraExtraExtraLarge
  },
  nb1: {
    marginBottom: '-' + v.spacingExtraSmall
  },
  nb2: {
    marginBottom: '-' + v.spacingSmall
  },
  nb3: {
    marginBottom: '-' + v.spacingMedium
  },
  nb4: {
    marginBottom: '-' + v.spacingLarge
  },
  nb5: {
    marginBottom: '-' + v.spacingExtraLarge
  },
  nb6: {
    marginBottom: '-' + v.spacingExtraExtraLarge
  },
  nb7: {
    marginBottom: '-' + v.spacingExtraExtraExtraLarge
  },
  nt1: {
    marginTop: '-' + v.spacingExtraSmall
  },
  nt2: {
    marginTop: '-' + v.spacingSmall
  },
  nt3: {
    marginTop: '-' + v.spacingMedium
  },
  nt4: {
    marginTop: '-' + v.spacingLarge
  },
  nt5: {
    marginTop: '-' + v.spacingExtraLarge
  },
  nt6: {
    marginTop: '-' + v.spacingExtraExtraLarge
  },
  nt7: {
    marginTop: '-' + v.spacingExtraExtraExtraLarge
  }
};

var opacity = {
  o_100: {
    opacity: 1
  },
  o_90: {
    opacity: 0.9
  },
  o_80: {
    opacity: 0.8
  },
  o_70: {
    opacity: 0.7
  },
  o_60: {
    opacity: 0.6
  },
  o_50: {
    opacity: 0.5
  },
  o_40: {
    opacity: 0.4
  },
  o_30: {
    opacity: 0.3
  },
  o_20: {
    opacity: 0.2
  },
  o_10: {
    opacity: 0.1
  },
  o_05: {
    opacity: 0.05
  },
  o_025: {
    opacity: 0.025
  },
  o_0: {
    opacity: 0
  }
};

var outlines = {
  outline: {
    outline: '1px solid'
  },
  outline_transparent: {
    outline: '1px solid transparent'
  },
  outline_0: {
    outline: 0
  }
};

var overflow = {
  overflow_visible: {
    overflow: 'visible'
  },
  overflow_hidden: {
    overflow: 'hidden'
  },
  overflow_scroll: {
    overflow: 'scroll'
  },
  overflow_auto: {
    overflow: 'auto'
  },
  overflow_x_visible: {
    overflowX: 'visible'
  },
  overflow_x_hidden: {
    overflowX: 'hidden'
  },
  overflow_x_scroll: {
    overflowX: 'scroll'
  },
  overflow_x_auto: {
    overflowX: 'auto'
  },
  overflow_y_visible: {
    overflowY: 'visible'
  },
  overflow_y_hidden: {
    overflowY: 'hidden'
  },
  overflow_y_scroll: {
    overflowY: 'scroll'
  },
  overflow_y_auto: {
    overflowY: 'auto'
  }
};

var position = {
  static: {
    position: 'static'
  },
  relative: {
    position: 'relative'
  },
  absolute: {
    position: 'absolute'
  },
  fixed: {
    position: 'fixed'
  }
};

var rotation = {
  rotate_45: {
    transform: 'rotate(45deg)'
  },
  rotate_90: {
    transform: 'rotate(90deg)'
  },
  rotate_135: {
    transform: 'rotate(135deg)'
  },
  rotate_180: {
    transform: 'rotate(180deg)'
  },
  rotate_225: {
    transform: 'rotate(225deg)'
  },
  rotate_270: {
    transform: 'rotate(270deg)'
  },
  rotate_315: {
    transform: 'rotate(315deg)'
  }
};

var spacing = {
  pa0: {
    padding: v.spacingNone
  },
  pa1: {
    padding: v.spacingExtraSmall
  },
  pa2: {
    padding: v.spacingSmall
  },
  pa3: {
    padding: v.spacingMedium
  },
  pa4: {
    padding: v.spacingLarge
  },
  pa5: {
    padding: v.spacingExtraLarge
  },
  pa6: {
    padding: v.spacingExtraExtraLarge
  },
  pa7: {
    padding: v.spacingExtraExtraExtraLarge
  },
  pl0: {
    paddingLeft: v.spacingNone
  },
  pl1: {
    paddingLeft: v.spacingExtraSmall
  },
  pl2: {
    paddingLeft: v.spacingSmall
  },
  pl3: {
    paddingLeft: v.spacingMedium
  },
  pl4: {
    paddingLeft: v.spacingLarge
  },
  pl5: {
    paddingLeft: v.spacingExtraLarge
  },
  pl6: {
    paddingLeft: v.spacingExtraExtraLarge
  },
  pl7: {
    paddingLeft: v.spacingExtraExtraExtraLarge
  },
  pr0: {
    paddingRight: v.spacingNone
  },
  pr1: {
    paddingRight: v.spacingExtraSmall
  },
  pr2: {
    paddingRight: v.spacingSmall
  },
  pr3: {
    paddingRight: v.spacingMedium
  },
  pr4: {
    paddingRight: v.spacingLarge
  },
  pr5: {
    paddingRight: v.spacingExtraLarge
  },
  pr6: {
    paddingRight: v.spacingExtraExtraLarge
  },
  pr7: {
    paddingRight: v.spacingExtraExtraExtraLarge
  },
  pb0: {
    paddingBottom: v.spacingNone
  },
  pb1: {
    paddingBottom: v.spacingExtraSmall
  },
  pb2: {
    paddingBottom: v.spacingSmall
  },
  pb3: {
    paddingBottom: v.spacingMedium
  },
  pb4: {
    paddingBottom: v.spacingLarge
  },
  pb5: {
    paddingBottom: v.spacingExtraLarge
  },
  pb6: {
    paddingBottom: v.spacingExtraExtraLarge
  },
  pb7: {
    paddingBottom: v.spacingExtraExtraExtraLarge
  },
  pt0: {
    paddingTop: v.spacingNone
  },
  pt1: {
    paddingTop: v.spacingExtraSmall
  },
  pt2: {
    paddingTop: v.spacingSmall
  },
  pt3: {
    paddingTop: v.spacingMedium
  },
  pt4: {
    paddingTop: v.spacingLarge
  },
  pt5: {
    paddingTop: v.spacingExtraLarge
  },
  pt6: {
    paddingTop: v.spacingExtraExtraLarge
  },
  pt7: {
    paddingTop: v.spacingExtraExtraExtraLarge
  },
  pv0: {
    paddingTop: v.spacingNone,
    paddingBottom: v.spacingNone
  },
  pv1: {
    paddingTop: v.spacingExtraSmall,
    paddingBottom: v.spacingExtraSmall
  },
  pv2: {
    paddingTop: v.spacingSmall,
    paddingBottom: v.spacingSmall
  },
  pv3: {
    paddingTop: v.spacingMedium,
    paddingBottom: v.spacingMedium
  },
  pv4: {
    paddingTop: v.spacingLarge,
    paddingBottom: v.spacingLarge
  },
  pv5: {
    paddingTop: v.spacingExtraLarge,
    paddingBottom: v.spacingExtraLarge
  },
  pv6: {
    paddingTop: v.spacingExtraExtraLarge,
    paddingBottom: v.spacingExtraExtraLarge
  },
  pv7: {
    paddingTop: v.spacingExtraExtraExtraLarge,
    paddingBottom: v.spacingExtraExtraExtraLarge
  },
  ph0: {
    paddingLeft: v.spacingNone,
    paddingRight: v.spacingNone
  },
  ph1: {
    paddingLeft: v.spacingExtraSmall,
    paddingRight: v.spacingExtraSmall
  },
  ph2: {
    paddingLeft: v.spacingSmall,
    paddingRight: v.spacingSmall
  },
  ph3: {
    paddingLeft: v.spacingMedium,
    paddingRight: v.spacingMedium
  },
  ph4: {
    paddingLeft: v.spacingLarge,
    paddingRight: v.spacingLarge
  },
  ph5: {
    paddingLeft: v.spacingExtraLarge,
    paddingRight: v.spacingExtraLarge
  },
  ph6: {
    paddingLeft: v.spacingExtraExtraLarge,
    paddingRight: v.spacingExtraExtraLarge
  },
  ph7: {
    paddingLeft: v.spacingExtraExtraExtraLarge,
    paddingRight: v.spacingExtraExtraExtraLarge
  },
  ma0: {
    margin: v.spacingNone
  },
  ma1: {
    margin: v.spacingExtraSmall
  },
  ma2: {
    margin: v.spacingSmall
  },
  ma3: {
    margin: v.spacingMedium
  },
  ma4: {
    margin: v.spacingLarge
  },
  ma5: {
    margin: v.spacingExtraLarge
  },
  ma6: {
    margin: v.spacingExtraExtraLarge
  },
  ma7: {
    margin: v.spacingExtraExtraExtraLarge
  },
  ml0: {
    marginLeft: v.spacingNone
  },
  ml1: {
    marginLeft: v.spacingExtraSmall
  },
  ml2: {
    marginLeft: v.spacingSmall
  },
  ml3: {
    marginLeft: v.spacingMedium
  },
  ml4: {
    marginLeft: v.spacingLarge
  },
  ml5: {
    marginLeft: v.spacingExtraLarge
  },
  ml6: {
    marginLeft: v.spacingExtraExtraLarge
  },
  ml7: {
    marginLeft: v.spacingExtraExtraExtraLarge
  },
  mr0: {
    marginRight: v.spacingNone
  },
  mr1: {
    marginRight: v.spacingExtraSmall
  },
  mr2: {
    marginRight: v.spacingSmall
  },
  mr3: {
    marginRight: v.spacingMedium
  },
  mr4: {
    marginRight: v.spacingLarge
  },
  mr5: {
    marginRight: v.spacingExtraLarge
  },
  mr6: {
    marginRight: v.spacingExtraExtraLarge
  },
  mr7: {
    marginRight: v.spacingExtraExtraExtraLarge
  },
  mb0: {
    marginBottom: v.spacingNone
  },
  mb1: {
    marginBottom: v.spacingExtraSmall
  },
  mb2: {
    marginBottom: v.spacingSmall
  },
  mb3: {
    marginBottom: v.spacingMedium
  },
  mb4: {
    marginBottom: v.spacingLarge
  },
  mb5: {
    marginBottom: v.spacingExtraLarge
  },
  mb6: {
    marginBottom: v.spacingExtraExtraLarge
  },
  mb7: {
    marginBottom: v.spacingExtraExtraExtraLarge
  },
  mt0: {
    marginTop: v.spacingNone
  },
  mt1: {
    marginTop: v.spacingExtraSmall
  },
  mt2: {
    marginTop: v.spacingSmall
  },
  mt3: {
    marginTop: v.spacingMedium
  },
  mt4: {
    marginTop: v.spacingLarge
  },
  mt5: {
    marginTop: v.spacingExtraLarge
  },
  mt6: {
    marginTop: v.spacingExtraExtraLarge
  },
  mt7: {
    marginTop: v.spacingExtraExtraExtraLarge
  },
  mv0: {
    marginTop: v.spacingNone,
    marginBottom: v.spacingNone
  },
  mv1: {
    marginTop: v.spacingExtraSmall,
    marginBottom: v.spacingExtraSmall
  },
  mv2: {
    marginTop: v.spacingSmall,
    marginBottom: v.spacingSmall
  },
  mv3: {
    marginTop: v.spacingMedium,
    marginBottom: v.spacingMedium
  },
  mv4: {
    marginTop: v.spacingLarge,
    marginBottom: v.spacingLarge
  },
  mv5: {
    marginTop: v.spacingExtraLarge,
    marginBottom: v.spacingExtraLarge
  },
  mv6: {
    marginTop: v.spacingExtraExtraLarge,
    marginBottom: v.spacingExtraExtraLarge
  },
  mv7: {
    marginTop: v.spacingExtraExtraExtraLarge,
    marginBottom: v.spacingExtraExtraExtraLarge
  },
  mh0: {
    marginLeft: v.spacingNone,
    marginRight: v.spacingNone
  },
  mh1: {
    marginLeft: v.spacingExtraSmall,
    marginRight: v.spacingExtraSmall
  },
  mh2: {
    marginLeft: v.spacingSmall,
    marginRight: v.spacingSmall
  },
  mh3: {
    marginLeft: v.spacingMedium,
    marginRight: v.spacingMedium
  },
  mh4: {
    marginLeft: v.spacingLarge,
    marginRight: v.spacingLarge
  },
  mh5: {
    marginLeft: v.spacingExtraLarge,
    marginRight: v.spacingExtraLarge
  },
  mh6: {
    marginLeft: v.spacingExtraExtraLarge,
    marginRight: v.spacingExtraExtraLarge
  },
  mh7: {
    marginLeft: v.spacingExtraExtraExtraLarge,
    marginRight: v.spacingExtraExtraExtraLarge
  }
};

var skins = {
  black_90: { color: v.black_90 },
  black_80: { color: v.black_80 },
  black_70: { color: v.black_70 },
  black_60: { color: v.black_60 },
  black_50: { color: v.black_50 },
  black_40: { color: v.black_40 },
  black_30: { color: v.black_30 },
  black_20: { color: v.black_20 },
  black_10: { color: v.black_10 },
  black_05: { color: v.black_05 },

  white_90: { color: v.white_90 },
  white_80: { color: v.white_80 },
  white_70: { color: v.white_70 },
  white_60: { color: v.white_60 },
  white_50: { color: v.white_50 },
  white_40: { color: v.white_40 },
  white_30: { color: v.white_30 },
  white_20: { color: v.white_20 },
  white_10: { color: v.white_10 },

  black: { color: v.black },
  near_black: { color: v.near_black },
  dark_gray: { color: v.dark_gray },
  mid_gray: { color: v.mid_gray },
  gray: { color: v.gray },
  silver: { color: v.silver },
  light_silver: { color: v.light_silver },
  moon_gray: { color: v.moon_gray },
  light_gray: { color: v.light_gray },
  near_white: { color: v.near_white },
  white: { color: v.white },

  dark_red: { color: v.dark_red },
  red: { color: v.red },
  light_red: { color: v.light_red },
  orange: { color: v.orange },
  gold: { color: v.gold },
  yellow: { color: v.yellow },
  light_yellow: { color: v.light_yellow },
  purple: { color: v.purple },
  light_purple: { color: v.light_purple },
  dark_pink: { color: v.dark_pink },
  hot_pink: { color: v.hot_pink },
  pink: { color: v.pink },
  light_pink: { color: v.light_pink },
  dark_green: { color: v.dark_green },
  green: { color: v.green },
  light_green: { color: v.light_green },
  navy: { color: v.navy },
  dark_blue: { color: v.dark_blue },
  blue: { color: v.blue },
  light_blue: { color: v.light_blue },
  lightest_blue: { color: v.lightest_blue },
  washed_blue: { color: v.washed_blue },
  washed_green: { color: v.washed_green },
  washed_yellow: { color: v.washed_yellow },
  washed_red: { color: v.washed_red },
  color_inherit: { color: 'inherit' },

  bg_black_90: { 'background-color': v.black_90 },
  bg_black_80: { 'background-color': v.black_80 },
  bg_black_70: { 'background-color': v.black_70 },
  bg_black_60: { 'background-color': v.black_60 },
  bg_black_50: { 'background-color': v.black_50 },
  bg_black_40: { 'background-color': v.black_40 },
  bg_black_30: { 'background-color': v.black_30 },
  bg_black_20: { 'background-color': v.black_20 },
  bg_black_10: { 'background-color': v.black_10 },
  bg_black_05: { 'background-color': v.black_05 },
  bg_white_90: { 'background-color': v.white_90 },
  bg_white_80: { 'background-color': v.white_80 },
  bg_white_70: { 'background-color': v.white_70 },
  bg_white_60: { 'background-color': v.white_60 },
  bg_white_50: { 'background-color': v.white_50 },
  bg_white_40: { 'background-color': v.white_40 },
  bg_white_30: { 'background-color': v.white_30 },
  bg_white_20: { 'background-color': v.white_20 },
  bg_white_10: { 'background-color': v.white_10 },

  bg_black: { 'background-color': v.black },
  bg_near_black: { 'background-color': v.near_black },
  bg_dark_gray: { 'background-color': v.dark_gray },
  bg_mid_gray: { 'background-color': v.mid_gray },
  bg_gray: { 'background-color': v.gray },
  bg_silver: { 'background-color': v.silver },
  bg_light_silver: { 'background-color': v.light_silver },
  bg_moon_gray: { 'background-color': v.moon_gray },
  bg_light_gray: { 'background-color': v.light_gray },
  bg_near_white: { 'background-color': v.near_white },
  bg_white: { 'background-color': v.white },
  bg_transparent: { 'background-color': v.transparent },

  bg_dark_red: { 'background-color': v.dark_red },
  bg_red: { 'background-color': v.red },
  bg_light_red: { 'background-color': v.light_red },
  bg_orange: { 'background-color': v.orange },
  bg_gold: { 'background-color': v.gold },
  bg_yellow: { 'background-color': v.yellow },
  bg_light_yellow: { 'background-color': v.light_yellow },
  bg_purple: { 'background-color': v.purple },
  bg_light_purple: { 'background-color': v.light_purple },
  bg_dark_pink: { 'background-color': v.dark_pink },
  bg_hot_pink: { 'background-color': v.hot_pink },
  bg_pink: { 'background-color': v.pink },
  bg_light_pink: { 'background-color': v.light_pink },
  bg_dark_green: { 'background-color': v.dark_green },
  bg_green: { 'background-color': v.green },
  bg_light_green: { 'background-color': v.light_green },
  bg_navy: { 'background-color': v.navy },
  bg_dark_blue: { 'background-color': v.dark_blue },
  bg_blue: { 'background-color': v.blue },
  bg_light_blue: { 'background-color': v.light_blue },
  bg_lightest_blue: { 'background-color': v.lightest_blue },
  bg_washed_blue: { 'background-color': v.washed_blue },
  bg_washed_green: { 'background-color': v.washed_green },
  bg_washed_yellow: { 'background-color': v.washed_yellow },
  bg_washed_red: { 'background-color': v.washed_red },
  bg_inherit: { 'background-color': 'inherit' }
};

var tables = {
  collapse: {
    borderCollapse: 'collapse',
    borderSpacing: 0
  },
  striped__light_silver: {
    ':nth-child(odd)': {
      backgroundColor: v.lightSilver
    }
  },
  striped__moon_gray: {
    ':nth-child(odd)': {
      backgroundColor: v.moonGray
    }
  },
  striped__light_gray: {
    ':nth-child(odd)': {
      backgroundColor: v.lightGray
    }
  },
  striped__near_white: {
    ':nth-child(odd)': {
      backgroundColor: v.nearWhite
    }
  },
  stripe_light: {
    ':nth-child(odd)': {
      backgroundColor: v.white_10
    }
  },
  stripe_dark: {
    ':nth-child(odd)': {
      backgroundColor: v.black_10
    }
  }
};

var textAlign = {
  tl: {
    textAlign: 'left'
  },
  tr: {
    textAlign: 'right'
  },
  tc: {
    textAlign: 'center'
  }
};

var textDecorators = {
  strike: {
    textDecoration: 'line-through'
  },
  underline: {
    textDecoration: 'underline'
  },
  no_underline: {
    textDecoration: 'none'
  }
};

var textTransform = {
  ttc: {
    textTransform: 'capitalize'
  },
  ttl: {
    textTransform: 'lowercase'
  },
  ttu: {
    textTransform: 'uppercase'
  },
  ttn: {
    textTransform: 'none'
  }
};

var typeScale = {
  f_6: {
    fontSize: '6rem'
  },
  f_headline: {
    fontSize: '6rem'
  },
  f_5: {
    fontSize: '5rem'
  },
  f_subheadline: {
    fontSize: '5rem'
  },
  f1: {
    fontSize: '3rem'
  },
  f2: {
    fontSize: '2.25rem'
  },
  f3: {
    fontSize: '1.5rem'
  },
  f4: {
    fontSize: '1.25rem'
  },
  f5: {
    fontSize: '1rem'
  },
  f6: {
    fontSize: '0.875rem'
  },
  f7: {
    fontSize: '.75rem'
  }
};

var typography = {
  measure: {
    maxWidth: '30em'
  },
  measure_wide: {
    maxWidth: '34em'
  },
  measure_narrow: {
    maxWidth: '20em'
  },
  indent: {
    textIndent: '1em',
    marginTop: 0,
    marginBottom: 0
  },
  small_caps: {
    fontVariant: 'small-caps'
  },
  truncate: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  }
};

var utilites = {
  overflow_container: {
    overflowY: 'scroll'
  },
  center: {
    marginRight: 'auto',
    marginLeft: 'auto'
  }
};

var verticalAlign = {
  v_base: {
    verticalAlign: 'baseline'
  },
  v_mid: {
    verticalAlign: 'middle'
  },
  v_top: {
    verticalAlign: 'top'
  },
  v_btm: {
    verticalAlign: 'bottom'
  }
};

var visibility = {
  clip: {
    position: 'fixed !important',
    _position: 'absolute !important',
    clip: 'rect(1px, 1px, 1px, 1px)'
  }
};

var whiteSpace = {
  ws_normal: {
    whiteSpace: 'normal'
  },
  nowrap: {
    whiteSpace: 'nowrap'
  },
  pre: {
    whiteSpace: 'pre'
  }
};

var widths = {
  w1: {
    width: '1rem'
  },
  w2: {
    width: '2rem'
  },
  w3: {
    width: '4rem'
  },
  w4: {
    width: '8rem'
  },
  w5: {
    width: '16rem'
  },
  w_10: {
    width: '10%'
  },
  w_20: {
    width: '20%'
  },
  w_25: {
    width: '25%'
  },
  w_30: {
    width: '30%'
  },
  w_33: {
    width: '33%'
  },
  w_34: {
    width: '34%'
  },
  w_40: {
    width: '40%'
  },
  w_50: {
    width: '50%'
  },
  w_60: {
    width: '60%'
  },
  w_70: {
    width: '70%'
  },
  w_75: {
    width: '75%'
  },
  w_80: {
    width: '80%'
  },
  w_90: {
    width: '90%'
  },
  w_100: {
    width: '100%'
  },
  w_third: {
    width: 'calc(100% / 3)'
  },
  w_two_thirds: {
    width: 'calc(100% / 1.5)'
  },
  w_auto: {
    width: 'auto'
  }
};

var wordBreak = {
  word_normal: {
    wordBreak: 'normal'
  },
  word_wrap: {
    wordBreak: 'break-all'
  },
  word_nowrap: {
    wordBreak: 'keep-all'
  }
};

var zIndex = {
  z_0: {
    zIndex: 0
  },
  z_1: {
    zIndex: 1
  },
  z_2: {
    zIndex: 2
  },
  z_3: {
    zIndex: 3
  },
  z_4: {
    zIndex: 4
  },
  z_5: {
    zIndex: 5
  },
  z_999: {
    zIndex: 999
  },
  z_9999: {
    zIndex: 9999
  },
  z_max: {
    zIndex: 2147483647
  },
  z_inherit: {
    zIndex: 'inherit'
  },
  z_initial: {
    zIndex: 'initial'
  },
  z_unset: {
    zIndex: 'unset'
  }
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var modules = Object.assign(aspectRatios, backgroundPosition, backgroundSize, borderColors, borderRadius, borderStyle, borderWidths, borders, boxShadow, boxSizing, clears, code, coordinates, display, flexbox, floats, fontFamily, fontStyle, fontWeight, forms, heights, hovers, letterSpacing, lineHeight, links, lists, maxWidths, negativeMargins, opacity, outlines, overflow, position, rotation, spacing, skins, tables, textAlign, textDecorators, textTransform, typeScale, typography, utilites, verticalAlign, visibility, whiteSpace, widths, wordBreak, zIndex);

var Chain = function Chain(props) {
  var _this = this;

  _classCallCheck(this, Chain);

  Object.assign(this, props);
  Object.keys(modules).forEach(function (key) {
    Object.defineProperty(_this, key, {
      enumerable: false,
      get: function get() {
        return new Chain(_extends({}, props, modules[key]));
      }
    });
  });
};

var index = new Chain();

return index;

})));
