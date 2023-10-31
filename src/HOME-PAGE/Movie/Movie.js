import React, { useState, useEffect } from "react";
import MovieBox from "../MovieBox/MovieBox";
import './Movie.css';

const API_URL =
  'https://api.themoviedb.org/3/movie/popular?api_key=dca6039011122855ab691a23bc74a542&language=uk&page=1';

 
 

const Movie = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch(API_URL)
          .then(res => res.json())
          .then(data => {
            console.log(data);
            setMovies(data.results.slice(0, 15));
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