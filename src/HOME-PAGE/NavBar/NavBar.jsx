import React, { Fragment } from "react";
import { ReactComponent as NavLogo } from './../NavLogo/nav-logo.svg'
import { ReactComponent as NavDark } from "./../NavDark/nav-dark.svg";

const NavBar = () => {
    return (
      <>
        <header>
          <a
            href="#"
            aria-label="logo"
            target="_blank"
            rel="noreferrer noopener"
          >
            {' '}
            <NavLogo />
            Cinemania
          </a>
          <div className="container">
            <nav className="">
              <ul>
                <li>Home</li>
                <li>Catalog</li>
                <li>My library</li>
              </ul>
            </nav>

            <div>
              <ul>
                <li></li>
                <li><NavDark /></li>
              </ul>
            </div>
          </div>
        </header>
      </>
    );
}
 
export default NavBar;