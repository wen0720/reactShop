import React from 'react'
import styled from 'styled-components'

import media from '@utils/cssMedia'

const StyleBnrWrapper = styled.div`
  background: #ff4b42;
  font-family: 'Libre Franklin', sans-serif;
  font-weight: 800;
  font-size: 24px;
  color:#fff;
  padding: 20px 0;
  text-align: center;
  transform: translateY(80%);
  margin: -12% 0 0;
  position: relative;
  z-index: 2;
  ${media.md`
    font-size: 18px;
    transform: translateY(60%);
    margin: -16% 0 0;
  `}
`

const Bnr = () => (
  <StyleBnrWrapper>
    <p>個人家教 Your Personal Coach</p>
  </StyleBnrWrapper>
)

export default Bnr
