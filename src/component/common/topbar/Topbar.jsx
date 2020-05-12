import React from 'react'
import styled from 'styled-components'

import media from '@utils/cssMedia'

import bgWomanCover from '@assets/images/bg-womanCover.jpg'

const TopBar = (props) => (
  <div className={props.className}>
    <div className="topBanner_title">
      <h2>
        {props.children}
      </h2>
    </div>
  </div>
)

const styledTopBar = styled(TopBar)`
    position: relative;
    width: 100%;
    height: 30vh;
    background: url(${bgWomanCover}) no-repeat center;
    background-size: cover;
    h2{
        font-size: 40px;
        font-weight: 500;
        color:#fff;
        letter-spacing: 2px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translateX(-50%) translateY(-50%);
        ${media.px375`font-size: 24px;`}
    }
`

export default styledTopBar
