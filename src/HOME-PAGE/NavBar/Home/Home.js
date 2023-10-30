import React, { useState } from "react";
import NavBar from "../NavBar";
import Hero from "../../Hero/Hero";
import Movie from "../../Movie/Movie";
// import Backround from "../../Hero/Background/Backround";

import { API_KEY } from "../../../API-KEY/ApiKey";

const Home = () => {
  // const [movies, setMovies] = useState([])
    return (
      <>
        <NavBar />
        <Hero />
        {/* <Backround /> */}
        <Movie />
      
      </>
    );
}
 
export default Home;