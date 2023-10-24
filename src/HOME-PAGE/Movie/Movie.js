import React, { useState, useEffect } from "react";
import MovieBox from "../MovieBox/MovieBox";

const API_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=bcc4ff10c2939665232d75d8bf0ec093';

const Movie = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch(API_URL)
            .then((res) => res.json())
            .then(data => {
                console.log(data);
                setMovies(data.results)
        })
    }, [])

    return (
        <>
            {movies.map((movieReq) =>
                <MovieBox key={movieReq.id} {...movieReq} />)}
        </>
      );
}
 
export default Movie;