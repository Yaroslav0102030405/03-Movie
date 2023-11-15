import React, { useState, useEffect } from "react";
import MovieBox from "../MovieBox/MovieBox";
import './Movie.css';
import axios from "axios";
// import server from "../../API-KEY/Server";
import { Container, Pagination, Stack } from '@mui/material'

const API_URL =
  'https://api.themoviedb.org/3/movie/popular?api_key=dca6039011122855ab691a23bc74a542&language=uk';

  // const BASE_URL = 'http://hn.algolia.com/api/v1/search?'

const Movie = () => {
  const [movies, setMovies] = useState([])
  const [query, setQuery] = useState('react')
  const [page, setPage] = useState(1)
  const [pageQty, setPageQty] = useState(0)

    useEffect(() => {
      fetch(API_URL + `query=${query}&page=${page}`)
        // axios.get(API_URL + `query=${query}&page=${page}`)
        .then(res => res.json())
        .then(data => {
          console.log(data);
          setMovies(data.results.slice(0, 15));
          setPageQty(data.total_pages)
        });
    }, [query, page])

    return (
      <>
        <div className="container">
          <div className="galery">
            {movies.map(movieReq => (
              <MovieBox key={movieReq.id} {...movieReq} />
            ))}
          </div>
          <Container sx={{ marginTop: 5 }}>
            <Stack spacing={2}>
              {!!pageQty && (
                //      <Pagination
                //   count={pageQty}
                //   page={page}
                //   color="primary"
                //   onChange={(_, num) => setPage(num)}
                // />
                // <Pagination
                //   count={pageQty}
                //   color="primary"
                //   page={page}
                //   onChange={(_, num) => setPage(num)}
                // />
                <Pagination
                  count={pageQty}
                  page={page}
                  onChange={(_, num) => setPage(num)}
                  sx={{ marginY: 0, marginX: 'auto' }}
                />
              )}
            </Stack>
          </Container>
        </div>
      </>
    );
}
 
export default Movie;