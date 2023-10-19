import React, { Fragment, useState } from "react";
import './NavBar.css'
import { ReactComponent as NavLogo } from './nav-logo.svg';

import DarkMode from "../../components/DarkMode/DarlMode";
// import { HiSearch } from 'react-icons/hi';

const NavBar = () => {
  const [toggle, setToggle] = useState(true)
    return (
      <>
        <header className="navigation">
          <div className="container">
            <nav className="nav__wrap">
              <ul className="nav__logo">
                <li>
                  {' '}
                  <a
                    href="#"
                    aria-label="logo"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    {' '}
                    <NavLogo />
                  </a>
                </li>
                <li className="Nav__logo-text">
                  {' '}
                  <a
                    href="#"
                    aria-label="logo"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Cinemania
                  </a>
                </li>
              </ul>

              <ul className="navPages">
                <li className="navPages__item current">Home</li>
                <li className="navPages__item">Catalog</li>
                <li className="navPages__item">My library</li>
              </ul>

              {/* <div className={toggle ? '' : 'navBarColor'}> */}
              <ul className="nav__dark">
                <li>
                  <input
                    id="nav__input"
                    type="text"
                    placeholder="Search movies"
                  />
                  {/* <HiSearch fontSize={21} color="black" className="serch" /> */}
                </li>
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
}
 
export default NavBar;