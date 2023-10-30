// import React, { useState, useEffect } from "react";
// import './Background.css'
// import axios from "axios";

// // const API_IMG = 'https://image.tmdb.org/t/p/w500';

// const Backround = ({ backdrop_path }) => {
//   const [images, setImage] = useState([]);

//    useEffect(() => {
//      fetch(
//        'https://api.themoviedb.org/3/movie/popular?api_key=bcc4ff10c2939665232d75d8bf0ec093&language=uk',
//      )
//        .then(res => res.json())
//        .then(data => {
//          console.log(data);
//          setImage(data.results);
//        });
//    }, []);

//   return (
//     <>
//       <div className="backround__image">
//         <img
//           className="galery__image"
//           src={'https://api.themoviedb.org/3/movie/popular?api_key=bcc4ff10c2939665232d75d8bf0ec093&language=uk' + backdrop_path}
//         ></img>
//       </div>
//     </>
//   );
// };
 
// export default Backround;