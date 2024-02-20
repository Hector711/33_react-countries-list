import React from "react";
import Layout from "../Components/Layout";
import { Link } from "react-router-dom"

function Search() {
  return (
    <Layout className="lay">
      <section className="flex flex-col justify-center items-center h-96 m-2 w-4/5">
        <input type="text" />
      </section>
    </Layout>
  );
}

export default Search;
