import React from 'react'

import HeaderContent from '@component/home/HeaderContent'
import LessonContent from '@component/home/LessonContent'
import BnrContent from '@component/home/BannerContent'
import AboutContent from '@component/home/AboutContent'
import CoachContent from '@component/home/CoachContent'

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <HeaderContent />
        <div className="container__box">
          <LessonContent />
          <BnrContent />
          <AboutContent />
          <CoachContent />
        </div>
      </div>
    )
  }
}
