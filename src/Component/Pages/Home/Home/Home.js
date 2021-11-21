import React from "react";
import NavBar from "../../../Shared/NavBar/NavBar";
import Banner from "../Banner/Banner";
import Benefits from "../Benefits/Benefits";
import Category from "../Category/Category";
import Rcservice from "../Rcservice/Rcservice";
import Rcuser from "../Rcuser/Rcuser";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Banner />
      <Category />
      <Benefits />
      <Rcservice />
      <Rcuser />
    </div>
  );
};

export default Home;
