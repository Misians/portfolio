import React from 'react'
import './Intro.css'
import Github from '../../../img/github.png'
import FloatingDiv from '../../FloatingDiv/FloatingDiv'
import LinkedIn from '../../../img/linkedin.png'
import Instagram from '../../../img/instagram.png'
import Misia from '../../../img/misia.jpg'
import Crown from '../../../img/crown.png'
import Thumbup from '../../../img/thumbup.png'


const Intro = () => {
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span> Hy! I am </span>
                <span> Artemísia Kimberlly </span>
                <span>Junior Fullstack developer </span>

            </div>
            <button className="button i-button">Hire me</button>
            <div className="i-icons">
                <a href=' '>
                    <img src={Github} alt="" />
                </a>
                <a>
                    <img src={LinkedIn} alt="" />
                </a>
                <a>
                    <img src={Instagram} alt="" />
                </a>
                
            </div>
        </div>
        <div className="i-right">

            <img className='misia-ft' src={Misia} alt="" />
            <div style={{top:' -4%', left: '69%'}}>
                    <FloatingDiv image={Crown} txt1='Web' txt2='Developer'/>
            </div>
            <div style={{top:' 16rem', left: '0 rem'}}>
                <FloatingDiv image={Thumbup} txt1 ='Graduation' txt2='Student'/>
            </div>
            {/* blurrrrrrrr c:*/}
            <div className="blur" style={{background: "rgb(238 210 255)"}} ></div>
            <div className="blur" style={
                {
                    background: '#C1F5FF',
                    top: '15rem',
                    width: '21rem',
                    height: '11rem',
                    left: '-9rem'
                }
            }> </div>
        </div>
    </div>
  )
}

export default Intro