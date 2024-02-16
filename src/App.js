// import logo from './logo.svg';
// import './App.css';
// import NavBar from "./HOME-PAGE/NavBar/NavBar";
import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./HOME-PAGE/NavBar/Home/Home'));
const Catalog = lazy(() => import('./CATALOG-PAGE/Catalog'));
const MyLibrary = lazy(() => import('./MY-LIBRARY-PAGE/myLibrary'));
const NotFoundPage = lazy(() => import('./NOT-FOUND-PAGE/NotFoundPage'));

// import Home from './HOME-PAGE/NavBar/Home/Home';
// import Catalog from './CATALOG-PAGE/Catalog';
// import MyLibrary from './MY-LIBRARY-PAGE/myLibrary'
// import NotFoundPage from './NOT-FOUND-PAGE/NotFoundPage';

function App() {
  return (
    <div className="app">
      {/* <NavBar /> */}
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/mylibrare" element={<MyLibrary />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
