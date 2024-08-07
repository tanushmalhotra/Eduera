import React from 'react'
import './About.css'
import about_img from '../../assets/university-1.png'

const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>Embark on a transformative educational journey with our university's
            comprehensive education programs. Out cutting-edge curriculum is designed to 
            empower students with the knowledge, skills, and experiences needed to excel 
            in the dynamic fiels of education.</p>
        <p>With a focus on innovation, hands-on learning and personalized mentorship, our programs
            prepare aspiring educators to make a meaningful impact in classrooms, schools, and communities.</p>
        <p>Whether you aspire to become a teacher,administrator,counselor, or educational leader, our 
            diverse programs offers the perfect pathway to achieve your goals and unlock your full potential in 
            shaping te future of education.</p>
      </div>
    </div>
  )
}

export default About
