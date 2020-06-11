// react
import React, { useState } from 'react'

// 3rd praty
import styled from 'styled-components'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// css utils
import media from '@utils/cssMedia'
import { clearfix } from '@utils/styleMixins'

// img
import ImgtitleLesson from '@assets/images/img-titleLesson.png'
import ImgLesson01 from '@assets/images/img-lesson01.png'
import ImgLesson02 from '@assets/images/img-lesson02.jpg'
import ImgLesson03 from '@assets/images/img-lesson03.png'
import bgWoman from '@assets/images/bg-woman.jpg'
import ImgArrowL from '@assets/images/img-arrowL.png'
import ImgArrowR from '@assets/images/img-arrowR.png'

const StyledSlider = styled(Slider)`
  .slick-prev, .slick-next{
    font-size: 0;
    line-height: 0;
    position: absolute;
    top: 50%;
    display: block;
    width: 20px;
    height: 20px;
    padding: 0;
    transform: translate(0, -50%);
    cursor: pointer;
    color: transparent;
    border: none;
    outline: none;
    background: transparent;
    z-index: 10;
  }

  .slick-prev{
    left: -25px;
  }

  .slick-next{
    right: -25px;
  }

  .slick-prev:before, .slick-next:before{
    content: '';
    font-family: auto;
    width: 30px;
    display: block;
    height: 30px;
    background-size: contain;
  }

  .slick-prev:before{
    background: url(${ImgArrowL}) no-repeat;
    background-size: contain;
  }

  .slick-next:before{
    background: url(${ImgArrowR}) no-repeat;
    background-size: contain;
  }
`

const Lesson = styled.div`
.lesson{
  background: url(${bgWoman}) no-repeat;
  background-size: cover;
  transform-origin: top left;
  transform: skewY(-3.5deg);
  padding: 8% 0 12%;
  ${clearfix}
  .inbox{
      transform-origin: top left;
      transform: skewY(3.5deg);
      ${media.lg`padding: 0 50px`}
  }
  .title{
      max-width: 230px;
      float: right;
      width: 20%;
  }
  &_introList{
      width: 60%;
      float:left;
      max-width: 800px;
  }
  &_intro{
      float: left;
      font-size: 0;
      outline: none;
  }
  &_imgbox{
      max-width: 520px;
      display: inline-block;
      width: 60%;
  }
  &_txt{
      position: relative;
      display: inline-block;
      vertical-align: top;
      padding: 20px;
      width: 40%;
      h3{
          font-size: 32px;
          font-weight: 500;
          margin: 40px 0 20px 0;
      }
      p{
          font-size: 16px;
      }
      span{
          position: relative;
          font-size: 15px;
          &:after{
              content: '';
              height: 4px;
              display: block;
              width: 90px;
              background: #2e2e2e;
              top: 40px;
              position: absolute;
              transform: translateX(-84%);
          }
      }
  }
}
`

const LessonContent = () => {
  const sliderSettingDefault = {
    infinite: false,
    slidesToShow: 1,
    autoplay: false,
    autoplaySpeed: 2000
  }

  const sliderContentDefault = [
    {
      title: '客製化體態分析',
      des: '全身性體態盲點檢測：<br/>經由教練評估設計解決方案。',
      des_eng: 'Personal Trainer',
      img: ImgLesson01
    },
    {
      title: '完整體態訓練',
      des: '根據課表進行有效訓練，調整體態均衡，提升肌力。',
      des_eng: 'Body Remodeling',
      img: ImgLesson02
    },
    {
      title: '個人飲食調整',
      des: '提供飲食建議，熱量計算，輔助體態雕塑。',
      des_eng: 'Diet Adjustment',
      img: ImgLesson03
    }
  ]

  const [sliderSetting, setSliderSetting] = useState(sliderSettingDefault)
  const [sliderContent, setSliderContent] = useState(sliderContentDefault)

  return (
    <Lesson>
      <section className="lesson">
          <div className="inbox">
              <div className="title">
                  <img src={ImgtitleLesson} />
              </div>
              <StyledSlider {...sliderSetting} className="lesson_introList">
                {
                  sliderContent.map(item => (
                    <div
                      className="lesson_intro"
                      key={item.title}>
                      <div className="lesson_imgbox">
                          <img src={item.img} />
                      </div>
                      <div className="lesson_txt">
                          <span>{item.des_eng}</span>
                          <h3>{item.title}</h3>
                          <p dangerouslySetInnerHTML={{__html: item.des}}></p>
                      </div>
                    </div>
                  ))
                }
              </StyledSlider>
          </div>
      </section>
    </Lesson>
  )
}

export default LessonContent
