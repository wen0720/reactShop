const clearfix = `
  &:after{
    content: '';
    display: block;
    height: 0px;
    clear: both;
    visibility: hidden;
  }
`

const transition = `
  transition: all 0.35s ease-in-out;
`

const translateCenter = `
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
`


export {
  clearfix,
  transition,
  translateCenter
}
