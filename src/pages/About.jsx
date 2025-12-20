import React from 'react'
import Countrydata from "../api/Countrydata.json"
import "./About.css"

const About = () => {
  return (
    <div>
      <h1 className='card-title'>
        Explore the World
        <br />
         With Us &
        <br />
         Discover New Destinations
      </h1>
      <div className="card-container">
      {Countrydata.map((country)=>{
        return (
      <div className="country-card" key={country.id}>
      <h2 className="country-name">{country.countryName}</h2>
      <p><strong>Capital:</strong> {country.capital}</p>
      <p><strong>Population:</strong> {country.population}</p>
      <p><strong>National Sport:</strong> {country.nationalSport}</p>
      <p><strong>Interesting Fact:</strong> {country.interestingFact}</p>
      <p><strong>Best Places to Visit:</strong>{country.bestPlaces}</p>
      <ul className="best-places"></ul>
      </div>
        )
      })}
      </div>
    </div>
  )
}

export default About
