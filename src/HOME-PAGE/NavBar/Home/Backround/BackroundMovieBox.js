import React from "react";

const API_IMG = 'https://image.tmdb.org/t/p/original/';

const BackroundMovieBox = ({
  backdrop_path,
  title,
  vote_average,
  overview
}) => {

  return (
    <>
      <ul>
        <li className="galery__item">
          <img className="galery__image" src={API_IMG + backdrop_path}></img>
        </li>
        {/* <li>
          <h1>{title.slice(0, 20)}</h1>
        </li>
        <li>
          {' '}
          <p>{overview.slice(0, 20)}</p>
        </li>
        <li>
          <p>{Number(vote_average).toFixed(1)}</p>
        </li> */}
        {/* <li>
              {' '}
              <p>{release_date}</p>
            </li> */}
      </ul>
    </>
  );
};
 
export default BackroundMovieBox;