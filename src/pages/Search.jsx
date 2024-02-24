import React, { useState } from "react";
import Layout from "../Components/Layout";
import Card from "../Components/Card";

import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";

function Search() {
  const [countryItem, upCountry] = useState();
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
    const secURL =
      "?fields=name,flags,languages,capital,region,population,currencies";
    const url = `${baseURL}${idCountry
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "-")}${secURL}`;
    try {
      const res = await fetch(url);
      const result = await res.json();
      // console.log(result);
      console.log(countryItem);

      upCountry(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Layout className="lay">
      <main>
        <h1>Country Search Engine</h1>
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



          <Stack spacing={2} sx={{ width: 400 }} className=" bg-indigo-400 rounded-2xl">
            
            <Autocomplete
              freeSolo
              id="free-solo-2-demo"
              // disableClearable
              options={top100Films.map((option) => option.title)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Country Name"
                  InputProps={{
                    ...params.InputProps,
                    type: "search",
                  }}
                />
              )}
            />
          </Stack>

          {countryItem?.map((country, index) => (
            <Card key={index} data={country} />
          ))}
        </form>
      </main>
    </Layout>
  );
}

const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
];

export default Search;

// import * as React from 'react';
