import React from "react";
import NavBar from "../NavBar";
import Hero from "../../Hero/Hero";
import Movie from "../../Movie/Movie";

// import Backround from './Backround/Backround'

// const API_IMG = 'https://image.tmdb.org/t/p/w500/';

// import server from "../../../API-KEY/Server";
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
};
 
export default Home;