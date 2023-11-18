import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './NavBar.css';
import { ReactComponent as NavLogo } from './nav-logo.svg';

import DarkMode from '../../components/DarkMode/DarlMode';
import { HiSearch } from 'react-icons/hi';

const NavBar = () => {
  // const [toggle, setToggle] = useState(true)
  return (
    <>
      <header className="navigation">
        <div className="container">
          <nav className="nav__wrap">
            <ul className="nav__logo">
              <li>
                <Link to="/"><NavLogo /></Link>
              </li>
              <li className="Nav__logo-text">
                <Link to="/">Cinemania</Link>
              </li>
            </ul>

            <ul className="navPages">
              <li className="navPages__item ">
                <NavLink to="/" >Home</NavLink>
              </li>
              <li className="navPages__item">
                <NavLink to="/catalog">Catalog</NavLink>
              </li>
              <li className="navPages__item">
                <NavLink to="/mylibrare">My library</NavLink>
              </li>
            </ul>

            {/* <div className={toggle ? '' : 'navBarColor'}> */}
            <ul className="nav__dark">
              {/* <li>
                <input
                  id="nav__input"
                  type="text"
                  placeholder="Search movies"
                />
                <HiSearch fontSize={21} color="black" className="serch" />
              </li> */}
              <li>
                <DarkMode />
              </li>
            </ul>
            {/* </div> */}
          </nav>
        </div>
      </header>
    </>
  );
};

export default NavBar;
