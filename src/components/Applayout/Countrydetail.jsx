import React, { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import Country from "../../pages/Country";
import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import "./Countrydetail.css"

const Countrydetail = () => {
  const { name } = useParams();
  const [detail, setDetail] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        `https://restcountries.com/v3.1/name/${encodeURIComponent(name)}?fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`
      );
      const data = await res.json();
      setDetail(data[0]);
    };
    getData();
  }, [name]);

  if (!detail) return <div>Loading or country not found...</div>;

  return (
    <div className="country-detail-container">
  <h1 className="country-name">{detail.name?.common}</h1>

  {detail.flags?.svg && (
    <img
      className="country-flag"
      src={detail.flags.svg}
      alt={`${detail.name?.common} flag`}
    />
  )}

  <p>
    <strong>Capital:</strong> {detail.capital?.[0]}
  </p>
  <p>
    <strong>Population:</strong> {detail.population?.toLocaleString()}
  </p>
  <p>
    <strong>Region:</strong> {detail.region}
  </p>
  <p>
    <strong>Subregion:</strong> {detail.subregion}
  </p>
  <p>
    <strong>Top Level Domain:</strong> {detail.tld?.[0]}
  </p>
  <p>
    <strong>Currencies:</strong>{" "}
    {Object.values(detail.currencies || {})
      .map((c) => c.name)
      .join(", ")}
  </p>
  <p>
    <strong>Languages:</strong>{" "}
    {Object.values(detail.languages || {}).join(", ")}
  </p>

   <NavLink to={"/country"} className="country-detail-btn">
              <IoIosArrowBack  className="btn-icon" />
              <span className="btn-text">Go Back</span>
            </NavLink>
</div>

  );
};

export default Countrydetail;
