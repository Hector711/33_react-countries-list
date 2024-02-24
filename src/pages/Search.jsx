import React, { useState } from "react";
import Layout from "../Components/Layout";
import Card from "../Components/Card";

function Search() {
  const [ countryItem, upCountry ] = useState();
  const [idCountry, upId] = useState("");

  const handleInputChange = (e) => {
    upId(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  const fetchData = async () => {
    if (!idCountry) return; // No hagas nada si idCountry está vacío
    const baseURL = "https://restcountries.com/v3.1/name/";
    const secURL = "?fields=name,flags,languages,capital,region,population,currencies";
    const url = `${baseURL}${idCountry
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "-")}${secURL}`;
    try {
      const res = await fetch(url);
      const result = await res.json();
      // console.log(result);
      console.log(countryItem)

      upCountry(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Layout className="lay">
      <h2>Country Search Engine</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <input 
            type="text" 
            value={idCountry}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
        </label>
        <button type="submit">Search</button>
        {countryItem?.map((country, index) => (
            <Card key={index} data={country} />
          ))}
      </form>
    </Layout>
  );
}

export default Search;
