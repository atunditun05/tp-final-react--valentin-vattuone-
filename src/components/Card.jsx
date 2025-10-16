import React from "react";
import "../styles/App.css"
import { Link } from "react-router-dom";

export default function Card({ pokemonData }) {
  if (!pokemonData) {
    return <h1>Cargando pokemon...</h1>;
  }
  return (


<div className="card text-center mb-3" >
    <img
        src={pokemonData.sprites.other.dream_world.front_default}
        alt="pokemonimage" className="card-img-top"
        />
  <div className="card-body">
    <h1 className="card-name">{pokemonData.name}</h1>
    </div>
 <p className="card-id">ID: {pokemonData.id}</p>    
 <Link to={`/pokemones/${pokemonData.id}`}className="btn btn-warning">Ver detalle</Link>
</div>

  );
}
