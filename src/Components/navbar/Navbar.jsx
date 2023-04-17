import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className="n-wrapper">
        <div className="n-left">
        <div className="n-name">Artemísia</div>
        <span>Toggle</span>
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul style={{listStyleType: 'none'}}>
                    <li>Home</li>
                    <li>Services</li>
                    <li>Portfólio</li>
                    <li>Experience</li>
                </ul>
            </div>
            <button className="button n-button">
                Contact
            </button>
        </div>
    </div>
  )
}

export default Navbar