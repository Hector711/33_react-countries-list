import React, { useState, useEffect } from "react";
import Layout from "../Components/Layout";
import Card from "../Components/Card";

function Countries() {
  const [list, updateList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url =
        "https://restcountries.com/v3.1/all?fields=name,flags,languages,capital,region,population,currencies";
      try {
        const response = await fetch(url);
        const result = await response.json();
        console.log(result);
        updateList(result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <Layout>
      <main>
        <h1>Countries List</h1>
        <div className="grid grid-cols-4 gap-10 ">
          {list.map((country, index) => (
            <Card key={index} data={country} />
          ))}
        </div>
      </main>
    </Layout>
  );
}

export default Countries;
