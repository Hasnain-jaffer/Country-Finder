import React from 'react'
import { FaArrowUp } from "react-icons/fa6";
import { FaArrowDown } from "react-icons/fa6";
import "./SearchFilter.css"


const SearchFilter = ({Search,setSearch,Filter,setFilter,data,setdata}) => {

 const handleInputChange = (event) =>{
  event.preventDefault();
  setSearch(event.target.value)
}
const handleSelectChange = (event) =>{
   event.preventDefault();
  setFilter(event.target.value)
 }

  const sortCountries = (value) => {
    const sortCountry = [...data].sort((a, b) => {
      return value === "Top"
        ? a.name.common.localeCompare(b.name.common)
        : b.name.common.localeCompare(a.name.common);
    });
    setdata(sortCountry);
  };

  return (
    <section className='filter'>
    <div className='search-filter'>
        <input type="text" placeholder='search' value={Search} onChange={handleInputChange} />
    </div>

 <div className='top-btn'>
        <button onClick={() => sortCountries("Top")}>Top
                 {<FaArrowUp />}
        </button>
      </div>

      <div className='bot-btn'>
        <button onClick={() => sortCountries("Bottom")}>Bottom
                 {<FaArrowDown />}
        </button>
      </div>



    <div>
        <select
          className="select-section"
          value={Filter}
          onChange={handleSelectChange}
        >
          <option value="all">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </section>
  )
}

export default SearchFilter
