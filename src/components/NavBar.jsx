import React from "react";
import { Link } from "react-router-dom";
import Logo  from "../assets/Logo.png";
// import { Navbar, Nav, Container } from "react-bootstrap"; 

function NavbarBootstrap() {
  return (
    <nav className="navbar navbar-expand-lg bg-primary navbar-dark sticky-top">
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center" to="/">
        <img
          src={Logo}
          alt="Logo"
          width="20%"
          height="20%"
          className="d-inline-block align-top me-2"
        />

      </Link>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/pokemones">
                Listado Pokémon
              </Link>
            </li>
          </ul>
          <span className="navbar-text">
            Mis pokemones
          </span>
        </div>
      </div>
    </nav>
  );
}

export default NavbarBootstrap;