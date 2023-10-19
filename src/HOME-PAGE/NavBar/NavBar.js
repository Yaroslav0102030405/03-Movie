import React, { Fragment } from "react";
import './NavBar.css'
import { ReactComponent as NavLogo } from './nav-logo.svg';
import { ReactComponent as NavDark } from "./nav-dark.svg";

const NavBar = () => {
    return (
      <>
        <header className="navigation">
          <div className="container">
            <nav className="nav">
              <ul className="nav-logo">
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
                <li className="navPages__item">Home</li>
                <li className="navPages__item">Catalog</li>
                <li className="navPages__item">My library</li>
              </ul>

              <ul className="nav-dark">
                <li></li>
                <li>
                  <NavDark />
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </>
    );
}
 
export default NavBar;