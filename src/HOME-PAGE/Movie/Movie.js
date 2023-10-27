import React, { useState, useEffect } from "react";
import MovieBox from "../MovieBox/MovieBox";
import './Movie.css';


// const API_SEARCH =
//   'https://api.themoviedb.org/3/search/movie?api_key=bcc4ff10c2939665232d75d8bf0ec093&page=1?_limit=5';
const API_URL =
  'https://api.themoviedb.org/3/movie/popular?api_key=bcc4ff10c2939665232d75d8bf0ec093&language=uk&page=1';

const Movie = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch(API_URL)
          .then(res => res.json())
          .then(data => {
            console.log(data);
            setMovies(data.results);
          });
    }, [])

    return (
      <>
        <div className="container">
          <div className="galery">
            {movies.map(movieReq => (
              <MovieBox key={movieReq.id} {...movieReq} />
            ))}
          </div>
        </div>
      </>
    );
}
 
export default Movie;