import React from "react";
import MovieBox from "../../../MovieBox/MovieBox";

// const API_URL =
//   'https://api.themoviedb.org/3/movie/popular?api_key=dca6039011122855ab691a23bc74a542&language=uk&page=1';

// const API_IMG = 'https://image.tmdb.org/t/p/w500/';

const Backround = ({ backdrop_path }) => {
  // const [backround, setBackround] = useState([]);

  // useEffect(() => {
  //   fetch(API_URL)
  //     .then(res => res.json())
  //     .then(data => {
  //       console.log(data);
  //       setBackround(data.results.slice(0, 15));
  //     });
  // }, []);
  return (
    <>
      <img src={'https://image.tmdb.org/t/p/w500/' + backdrop_path} alt="" />
    </>
  );
};
 
export default Backround;