import React from 'react'
import './Services.css'
import HeartEmogi from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Card from '../Card/Card'
import Resume from './resume.pdf'

const Services = () => {
  return (
    <div className="services">
        {/* left side */}
        <div className="awesome">
            <span>My awesome</span>
            <span>Services</span>
            <span>Working with database management, web development (back orfront) or assisting <br />
in API'S control.
Experience in: C/C++, Python, Flutter, NodeJs, ReactJS, PHP and<br /> MySQL.
            <br />
            </span>
            <a href={Resume} download>
                <button className='button s-button'>Download CV</button>
            </a>
            
            <div className='blur s-blur1' style={{background: "ABF1FF94"}} ></div>
        </div>
        {/* right side */}
        <div className="cards">
            <div style={{left: '16rem'}}>
            <Card 
                emoji = {HeartEmogi}
                heading = {'Design'}
                detail = {"figma, Photoshop, adobe xd"}
            /></div>
            
            <div style={{top:'12rem', left: '0rem'}}>
            <Card 
                emoji = {Glasses}
                heading = {'Web Developer'}
                detail = {"HTML, CSS, ReactJs, Javascript, Styled-Components, PHP, Python, NodeJs"}
            /></div>

            <div style={{top: '18rem', left: '16rem'}}>
            <Card 
                emoji = {Humble}
                heading = {'Extras'}
                detail = {"Linux, Scrum"}
            /></div>
        </div>
    </div>
  )
}

export default Services