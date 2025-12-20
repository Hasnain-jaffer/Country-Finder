import React from 'react'
import { NavLink } from "react-router-dom";
import { FaArrowRightToBracket } from "react-icons/fa6";
import "./HeroSection.css"

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1>Discover New Places with Place Finder</h1>
        <p>
          Explore beautiful countries, learn about diverse cultures, and find
          your next destination — all in one place.
        </p>
        <NavLink to="/country" className="hero-btn">
          <span className="btn-text">Start Exploring</span>
          <FaArrowRightToBracket className="btn-icon" />
        </NavLink>
      </div>
      <div className="hero-image">
        <img src="./title.webp" alt="Travel Destination" />
      </div>
    </div>
  )
}

export default HeroSection
