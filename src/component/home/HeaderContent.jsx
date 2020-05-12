import React from 'react'
import styled from 'styled-components';

import BgWomanCover from '@assets/images/bg-womanCover.jpg'

const Header = styled.header`
.mainContent{
  position: relative;
  height: 100vh;
  background-size: cover;
  background: url(${BgWomanCover}) no-repeat center;
}
.slogan{
  color:#fff;
  text-align: center;
  font-style: italic;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  top:45%;
  width: 90%;
  h2{
      margin: 0;
      font-family: 'Muli', sans-serif;
      font-size: 100px;
      line-height: 1.2;
  }
  p{
      font-size: 30px;
  }
}
`

class HeaderContent extends React.Component {
  render() {
    return (
      <Header>
          <div className="mainContent">
              <div className="slogan">
                  <h2>Fitness Life</h2>
                  <p>Your Personal Coach</p>
              </div>
              <div className="mainbtn gradient01"></div>
          </div>
      </Header>
    )
  }
}

export default HeaderContent
