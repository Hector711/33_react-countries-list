import React from "react";
import Navbar from "../Components/Navbar";
import Layout from "../Components/Layout";
import { Link } from "react-router-dom"

function Home() {
  return (
    <Layout className="lay">
      <main className="flex flex-col justify-center items-center h-90 mt-40">
        <h1 className="w-80">API Countries</h1>
        <h5 className=" p-7">The most incredible countries list all over the world.</h5>

        <Link to="/countries" className="flex justify-center items-center w-full border border-indigo-400	 rounded-md p-3 mt-40">
          <h5>CLICK HERE TO SEE IT</h5>
        </Link>

      </main>
    </Layout>
  );
}

export default Home;
