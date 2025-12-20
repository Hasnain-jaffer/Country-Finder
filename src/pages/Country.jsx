import React from "react";
import { useState, useEffect } from "react";
import "./Country.css";
import { NavLink } from "react-router-dom";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import SearchFilter from "../components/UI/SearchFilter";

const Country = () => {
  const [data, setdata] = useState([]);
  const [Search, setSearch] = useState("")
  const [Filter, setFilter] = useState("all")

    useEffect(() => {
          const fetchData = async () => {
            const response = await fetch("https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags")
           let data = await response.json();
           setdata(data);
  
         };
         fetchData();
       }, []);
   
       const searchCountry = (country) =>{
         if(Search) {
          return country.name.common.toLowerCase().includes(Search.toLowerCase())
         } return country;
       }

       const filterRegion = (country) =>{
        if(Filter === "all") return country;
        return country.region=== Filter;
       }

       const filterCountries = data.filter((country) => searchCountry(country) && filterRegion(country))

  return (
    <>
      <SearchFilter Search={Search} setSearch={setSearch} Filter={Filter} setFilter={setFilter} data={data} setdata={setdata}/>
    <div className="card-wrapper">
      {filterCountries.map((country, index) => (
        <div className="custom-card" key={index}>
          <img
            className="custom-flag"
            src={country.flags.svg}
            alt={country.flags.alt || country.name.common}
          />
          <div className="custom-card-content">
            <h2 className="custom-country-name">{country.name.common}</h2>
            <p>
              <strong>Population:</strong> {country.population.toLocaleString()}
            </p>
            <p>
              <strong>Region:</strong> {country.region}
            </p>
            <p>
              <strong>Capital:</strong> {country.capital}
            </p>
            <NavLink
              to={`/country/${encodeURIComponent(country.name.common)}`}
              className="country-btn"
            >
              <span className="btn-text">Read more</span>
              <FaRegArrowAltCircleRight className="btn-icon" />
            </NavLink>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default Country;
