import React, { useState, useEffect } from "react";
import Layout from "../Components/Layout";



function Countries() {
  const [ list, updateList ] = useState([null]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/independent?status=true")
      .then((response) => response.json())
      .then((data) => updateList(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [])

  

  return (
    <Layout>
      <main>

      <h1>Countries List</h1>

      </main>
    </Layout>
  );
}

export default Countries;
