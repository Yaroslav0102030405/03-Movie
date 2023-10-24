import React, {useState} from "react";
import NavBar from "../NavBar";
import Hero from "../../Hero/Hero";
import Movie from "../../Movie/Movie";

const Home = () => {
  // const [movies, setMovies] = useState([])
    return (
      <>
        <NavBar />
        <Hero />
        <Movie />
      </>
    );
}
 
export default Home;