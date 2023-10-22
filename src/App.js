// import logo from './logo.svg';
// import './App.css';

// import NavBar from "./HOME-PAGE/NavBar/NavBar";
import { Routes, Route } from 'react-router-dom';

import Home from './HOME-PAGE/NavBar/Home/Home';
import Catalog from './CATALOG-PAGE/Catalog';
import MyLibrary from './MY-LIBRARY-PAGE/myLibrary'
import NotFoundPage from './NOT-FOUND-PAGE/NotFoundPage';

function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path='/mylibrare' element={<MyLibrary />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
