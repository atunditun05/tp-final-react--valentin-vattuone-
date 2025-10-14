import React from "react";
import "../styles/App.css"
import { Link } from "react-router-dom";

export default function Card({ pokemonData }) {
  if (!pokemonData) {
    return <h1>Cargando pokemon...</h1>;
  }
  return (


<div className="card" >
    <img
        src={pokemonData.sprites.other.dream_world.front_default}
        alt="pokemonimage"
        />
  <div className="card-body">
    <h1 className="card-title">{pokemonData.name}</h1>
 <p className="card-text">ID: {pokemonData.id}</p>    
 <Link to={`/pokemones/${pokemonData.id}`}className="btn btn-primary">Ver detalle</Link>
  </div>
</div>
  );
}
