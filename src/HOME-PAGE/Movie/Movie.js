import React, { useState, useEffect } from 'react';
import MovieBox from '../MovieBox/MovieBox';
import './Movie.css';

import { orange } from '@mui/material/colors';
import { Link } from 'react-router-dom';
import { Box } from '@mui/system';
import axios from 'axios';
import Footer from '../Footer/Footer';
// import server from "../../API-KEY/Server";
// import { styled } from '@mui/material/styles';
import { Container, Pagination, PaginationItem } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const API_URL =
  'https://api.themoviedb.org/3/movie/popular?api_key=dca6039011122855ab691a23bc74a542&language=uk';

// const BASE_URL = 'http://hn.algolia.com/api/v1/search?'


const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('react');
  const [page, setPage] = useState(1);
  const [pageQty, setPageQty] = useState(0);

  const theme = createTheme({
    palette: {
      mode: 'dark', // Set to 'dark' for dark mode, 'light' for light mode
      primary: {
        main: '#f87719',
        // accent: '#ffffff',
        // Define the primary color for Pagination in dark mode
      },
      background: {
        paper: '#000000', // Define the background color for Pagination in dark mode
      },
    },
  });

  useEffect(() => {
    axios
      .get(API_URL + `query=${query}&page=${page}`)
      // fetch(API_URL + `query=${query}&page=${page}`)
      // axios.get(API_URL + `query=${query}&page=${page}`)
      // .then(res => res.json())
      .then(({ data }) => {
        console.log(data);
        setMovies(data.results.slice(0, 18));
        setPageQty(data.total_pages);

        // if (data.total_pages < page) {
        //   page('/')
        //   // page('/')
        // }
      });
  }, [query, page]);

  return (
    <>
      <div className="container">
        <div className="galery">
          {movies.map(movieReq => (
            <MovieBox key={movieReq.id} {...movieReq} />
          ))}
        </div>

        <Container sx={{ marginTop: 6 }}>
          {!!pageQty && (
            <Box
              justifyContent={'center'}
              alignItems="center"
              display={'flex'}
              // sx={{ margin: "20px 0px" }}
            >
              <ThemeProvider theme={theme}>
                <Pagination
                  // sx={{ color: '#f87719' }}
                  count={100}
                  // count={pageQty}
                  color="primary"
                  page={page}
                  onChange={(_, num) => setPage(num)}
                  renderItem={item => (
                    <PaginationItem
                      component={Link}
                      to={`/?page=${item.page}`}
                      {...item}
                    />
                  )}
                />
              </ThemeProvider>
            </Box>
          )}
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Movie;
