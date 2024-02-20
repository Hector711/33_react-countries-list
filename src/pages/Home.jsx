import React from "react";
import Navbar from "../Components/Navbar";
import Layout from "../Components/Layout";
import { Link } from "react-router-dom"

function Home() {
  return (
    <Layout className="lay">
      <section className="flex flex-col justify-center items-center h-96 m-2 w-4/5">
        <h1 className="w-80">API Countries</h1>
        <h5 className="p-7">The most incredible countries list all over the world.</h5>

        {/* <Link to="/countries" className="flex justify-center items-center w-2/5 border border-indigo-400	shadow-2xl rounded-md p-3 mt-40 ">
          <h5>CLICK HERE TO SEE IT</h5>
        </Link> */}

      </section>
    </Layout>
  );
}

export default Home;
