import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import personajes from "../assets/personajes.png";
import "../styles/App.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="home">
      <h1>
        <strong>
          ¡BIENVENIDO A
          <br />
          POKEPEDIA!
        </strong>
      </h1>
      <h2>
        Explora todos y cada uno de los pokemones existentes, sus estadísticas,
        habilidades y más.
      </h2>

      <div className="home-container">
        
             <img src={personajes} alt="personajes" className="personajes" />

    <Link to="/pokemones" className="btn btn-danger d-block" role="button"
    >
        <strong>COMENZAR A EXPLORAR</strong>
    </Link>
<div className="texto-container">
               
       
          <h4>
            En este proyecto realizado con React Js + Vite, utilizaremos la
            PokeApi, sus datos e imágenes para:
          </h4>
          <ul>
            <li>
              Mostrar de manera clara, precisa y dinámica cada uno de los
              pokemones existentes.
            </li>
            <li>Descubrir nuevos pokemones</li>
            <li>Agregar tus pokemones favoritos y guardar sus datos.</li>
            <li>
              Navegar por la página en cualquier dispositivo, gracias a su
              diseño responsive.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
