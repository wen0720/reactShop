import { css } from 'styled-components'

const sizes = {
  lg: 1450,
  md: 1200,
  sm: 1000,
  px480: 480,
  px375: 375,
  px320: 320
}

const media = Object.keys(sizes).reduce((accu, label) => {
  accu[label] = (...args) => css`
    @media (max-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `
  return accu
}, {})

export default media
