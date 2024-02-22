import React, { useState, useEffect } from "react";
import Layout from "../Components/Layout";
import Card from "../Components/Card";


function Countries() {
  const [list, updateList] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/independent?status=true")
      .then((response) => response.json())
      .then((data) => updateList(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <Layout>
      <main>
        <h1>Countries List</h1>
        {list?.map((country) => (
          <Card key={country.common}>
            <h2>{country.common}</h2>
            {/* Otros elementos de información sobre el país */}
          </Card>
        ))}

        {console.log(list)}
      </main>
    </Layout>
  );
}

export default Countries;
