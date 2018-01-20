export default {
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
}
