import React from 'react'
import Button from './Button'
import Card from './Card'
import AboutTick from '../Assets/Icons/About/about_tick.svg'
import RightArrow from '../Assets/Icons/About/about_learn-more.svg'
import HomeTitle from '../components/HomeTitle'
import yone from '../Assets/Images/yone.jpg'

const About = () => {
  return (
    <div className="about-container">
      <div className="about-left">
        <div className="about-pic">
          <img src={yone} alt="" srcSet="" />
        </div>
        <Card />
      </div>
      <div className="about-description">
        <HomeTitle>ABOUT</HomeTitle>
        <div className="about-bold-text">
          Why our service is the best <span>easily!</span>
        </div>
        <div className="about-text-description">
          Lorem ipsum dolor sit amet, consectetur adip elit. Donec posuere dolor
          massa, pellentesque aliquam nisl facilisis sed.
        </div>
        <div className="about-guarantee">
          <div className="about-guarantee-1">
            <img src={AboutTick} alt="" />
            <span>Guarantee Letter</span>
          </div>
          <div className="about-guarantee-2">
            <img src={AboutTick} alt="" />
            <span>Special Discount 50%</span>
          </div>
        </div>
        <Button 
         className="learn-more-btn" 
         color="blue"
         type="submit">
          <span> Learn More</span>
          <img src={RightArrow} alt="" />
        </Button>
      </div>
    </div>
  )
}

export default About
