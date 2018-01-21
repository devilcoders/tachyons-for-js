import v from './variables'

export default {
  nested_copy_line_height: {
    p: { lineHeight: 1.5 },
    ul: { lineHeight: 1.5 },
    ol: { lineHeight: 1.5 }
  },

  nested_headline_line_height: {
    h1: { lineHeight: 1.25 },
    h2: { lineHeight: 1.25 },
    h3: { lineHeight: 1.25 },
    h4: { lineHeight: 1.25 },
    h5: { lineHeight: 1.25 },
    h6: { lineHeight: 1.25 }
  },

  nested_list_reset: {
    ul: {
      paddingLeft: 0,
      marginLeft: 0,
      listStyleType: 'none'
    },
    ol: {
      paddingLeft: 0,
      marginLeft: 0,
      listStyleType: 'none'
    }
  },

  nested_copy_indent: {
    'p+p': {
      textIndent: '1em',
      marginTtop: 0,
      marginBottom: 0
    }
  },

  nested_copy_separator: {
    'p+p': {
      marginTop: '1.5em'
    }
  },

  nested_img: {
    'img': {
      width: '100%',
      maxWidth: '100%',
      display: 'block'
    }
  },

  nested_links: {
    a: {
      color: v.blue,
      transition: 'color .15s ease-in',

      ':hover': {
        color: v.light_blue,
        transition: 'color .15s ease-in'
      },

      ':focus': {
        color: v.light_blue,
        transition: 'color .15s ease-in'
      }
    }
  }
}
