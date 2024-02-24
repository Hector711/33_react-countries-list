import React, { useState } from "react";
import Layout from "../Components/Layout";
import Card from "../Components/MiniCard";

import { Input, Button } from "@material-tailwind/react";

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
    if (!idCountry) return; 
    const baseURL = "https://restcountries.com/v3.1/name/";
    const secURL =
      "?fields=name,flags,languages,capital,region,population,currencies";
    const url = `${baseURL}${idCountry
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "-")}${secURL}`;
    try {
      const res = await fetch(url);
      if (!res.ok) {
        // Si la respuesta no es exitosa, lanza un error
        throw new Error("Country not found");
      }
      const result = await res.json();
      console.log(countryItem);

      upCountry(result);
    } catch (error) {
      console.error(error);
      alert("Country not found. Please enter a valid country name.");
    }
  };

  const [email, setEmail] = React.useState("");
  const onChange = ({ target }) => setEmail(target.value);

  return (
    <Layout className="lay">
      <main>
        <h1>Country Search Engine</h1>

          <form  onSubmit={handleSubmit} className="relative flex w-full max-w-[24rem] mt-5">
            <Input
              type="text"
              placeholder="Country Name"
              value={idCountry}
              onChange={handleInputChange}
              className=" p-1 rounded-lg text-black"
              containerProps={{
                className: "min-w-0",
              }}
              onKeyDown={handleKeyDown}

            />
            <Button
              size="sm"
              color={idCountry? "gray" : "black"}
              disabled={!email}
              className="!absolute right-2 top-1 rounded text-gray-500 "
              type="submit"
            >
              Search
            </Button>
          </form>

          {countryItem?.map((country, index) => (
            <Card key={index} data={country} />
          ))}
      </main>
    </Layout>
  );
}

export default Search;
