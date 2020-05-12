import React from 'react'
import styled from 'styled-components'

import media from '@utils/cssMedia'
import { clearfix } from '@utils/styleMixins'

//img
import BgNormal from '@assets/images/bg-normal.jpg'
import ImgTitleAbout from '@assets/images/img-titleAbout.png'
import IconDot from '@assets/images/icon-dot.png'

const AboutWrapper = styled.section`
    padding: 10% 0 100px;
    background: url(${BgNormal}) no-repeat;
    background-size: cover;
    position: relative;
    z-index: 1;
    ${clearfix}
    ${media.px480`padding: 10% 0 50px;`}

    .inbox{
        font-size: 0;
    }
    .title{
        width: 46%;
        text-align: center;
        display: inline-block;
        vertical-align: middle;
        ${media.sm`
          margin: 20px 0 0;
          width: 100%;
        `}
        ${media.px480`
          margin: 50px 0 10px;
        `}
        img{
            max-width: 360px;
            width: 60%;
            ${media.sm`
              width: 50%;
            `}
            ${media.px480`
              width: 70%;
            `}
        }
    }
    .about__txt{
        width: 54%;
        max-width: 700px;
        text-align: center;
        display: inline-block;
        vertical-align: middle;
        ${media.sm`
          width: 100%;
          margin: 20px 0 0 0;
        `}
        > img{
            max-width: 25px;
            ${media.sm`
              display: none;
            `}
        }
        p{
            &:nth-of-type(1){
                margin: 14px 0 0 0;
                font-size: 28px;
                font-weight: bold;
                font-style: italic;
                ${media.lg`
                  font-size: 24px;
                `}
            }
            &:nth-of-type(2){
                text-align: left;
                font-size: 16px;
                margin: 20px 0 0;
                line-height: 2.2;
                ${media.lg`
                  font-size: 15px;
                `}
            }
        }
    }
`

const AboutContent = () => {
    return (
        <div className="inbox">
            <div className="title">
                <img src={ImgTitleAbout} alt="" />
            </div>
            <div className="about__txt">
                <img src={IconDot} alt="" />
                <p>最貼近您的貼身管家</p>
                <p>針對各種不同需求會員，提供多種專業服務。我們打破健身房團報課程的服務模式。提供您一對多的量身課程。從個人體態評估、飲食管理到實際訓練課程。針對各種不同需求會員，提供多種專業服務。我們打破健身房團報課程的服務模式。提供您一對一或一對多的量身課程。從個人體態評估、飲食管理到實際訓練課程。</p>
            </div>
        </div>
  )
}

const styledAboutContent = () => {
  return (
    <AboutWrapper>
      <AboutContent/>
    </AboutWrapper>
  )
}

export default styledAboutContent
