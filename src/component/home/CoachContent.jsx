import React from 'react'
import styled from 'styled-components'

import media from '@utils/cssMedia'
import { clearfix } from '@utils/styleMixins'

import BgCoach from '@assets/images/bg-coach.jpg'
import BgPoly from '@assets/images/bg-poly.png'
import ImgCoach01 from '@assets/images/img-coach01.png'
import ImgTitleCoach from '@assets/images/img-titleCoach.png'

const CoachContent = ({className}) => (
  // className 是 styled-Component 產生的隨機值，定義在 class 以外的 全域 style 會變成 className 的 props 傳進去
  <section className={className}>
    <div className="inbox">
        <div className="coach_box">
            <ul>
                <li>
                    <div className="coach_img">
                        <img src={ImgCoach01} alt="" />
                    </div>
                    <div className="coach_txt">
                        <h4>Tony 教練</h4>
                        <p>健身是和自己不斷的戰鬥，唯有不停戰鬥，才能成為完美。</p>
                    </div>
                </li>
            </ul>
        </div>
        <div className="title_box">
            <div className="title">
                <img src={ImgTitleCoach} alt="" />
            </div>
        </div>
    </div>
  </section>
)

const StyledCoachContent = styled(CoachContent)`
  position: relative;
  background: url(${BgCoach}) no-repeat;
  background-size: cover;
  padding: 8% 0;
  ${media.sm`padding: 3% 0;`}
  .coach{
      &_box{
          text-align: center;
          width: 58%;
          float: left;
          ${media.sm`
            float: none;
            width: 100%;
            padding: 56% 0 20% 0;
          `}
      }
      &_img{
          img{
              max-width: 250px;
              ${media.sm`
                width: 50%;
              `}
          }
      }
      &_txt{
          color: #fff;
          h4{
              font-size: 24px;
              font-weight: 300;
              font-style: italic;
              ${media.sm`
                margin: 12px 0;
                font-size: 20px;
              `}
          }
      }
  }
  .inbox{
    ${clearfix}
  }
  .title{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 16%;
    max-width: 250px;
    width: 60%;
    ${media.sm`
      left: 9%;
      top: 5%;
      transform: translateY(0);
      width: 43%;
    `}
    &_box{
      position: absolute;
      height: 100%;
      top: 0;
      width: 37%;
      right: 0;
      ${media.sm`
        width: 100%;
        overflow: hidden;
      `}
      &:before{
          content: "";
          background: url(${BgPoly}) no-repeat;
          background-size: cover;
          height: 100%;
          top: 0;
          bottom: 0;
          width: 100%;
          display: block;
          position: absolute;
          right: 0;
          ${media.sm`
            height: 0;
            padding-bottom: 66%;
            background-size: 100% 80%;
                width: 120%;
                right: -10%;
                left: -10%;
              `}
          }
      }
  }
`

export default StyledCoachContent
