const v = require('./variables')

module.exports = {
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
}
