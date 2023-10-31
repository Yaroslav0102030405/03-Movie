import React from "react";
import './MovieBox.css'

const API_IMG = 'https://image.tmdb.org/t/p/original/';

  // const defaultPath = 'https://api.themoviedb.org/3/movie'; //popular';
  // const imagePath = 'https://image.tmdb.org/t/p/w500/';
  // const API_KEY = 'dca6039011122855ab691a23bc74a542';
  // const language = 'uk';
  // const _url = `${defaultPath}/${url}?api_key=${API_KEY}&language=${language}&page=1`;

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
          <img className="galery__image" src={API_IMG + poster_path}></img>
        </li>
        <li>
          <h1>{title.slice(0, 20)}</h1>
        </li>
        {/* <li>
          {' '}
          <p>{overview.slice(0, 20)}</p>
        </li> */}
        <li>
          <p>{Number(vote_average).toFixed(1)}</p>
        </li>
        {/* <li>
              {' '}
              <p>{release_date}</p>
            </li> */}
      </ul>
    </>
  );
};
 
export default MovieBox;