import React from "react";
import './MovieBox.css'

const API_IMG = 'https://image.tmdb.org/t/p/w500';

const MovieBox = ({
  title,
  poster_path,
  vote_average,
  release_date,
  overview,
  backdrop_path,
 
}) => {
  return (
    <>
      <ul>
        <li className="galery__item">
          <img
            className="galery__image"
            src={API_IMG + poster_path}
          ></img>
        </li>
        {/* <li>
              <h1>{title.slice(0, 30)}</h1>
            </li>
            <li>
              {' '}
              <p>{overview.slice(0, 70)}</p>
            </li>
            <li>
              <p>{vote_average}</p>
            </li>
            <li>
              {' '}
              <p>{release_date}</p>
            </li> */}
      </ul>
    </>
  );
};
 
export default MovieBox;