import React from 'react'
import styled from 'styled-components'

const Footer = ({ className }) => (
  <div className={className}>
      <footer>
          copyright©2019Stronger
      </footer>
  </div>
)

const StyledFooter = styled(Footer)`
  background:#151515;
  text-align: center;
  padding: 10px 0;
  color:#b8b8b8;
`

export default StyledFooter

