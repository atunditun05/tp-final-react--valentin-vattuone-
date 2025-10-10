import React from "react";

export default function Card({ pokemonData }) {
  if (!pokemonData) {
    return <h1>Cargando pokemon...</h1>;
  }
  return (
    <div className="card h-100 shadow-sm">
      <img
        src={pokemonData.sprites.other.dream_world.front_default}
        alt="pokemonimage"
        className="card-img-top w-100 img-fluid p-3"
        style={{ height: "10rem" }}
      />

      <div className="card-body text-center">
        <h2 className="card-title h5 text-capitalize">{pokemonData.name}</h2>
        <p className="card-text">ID: {pokemonData.id}</p>
      </div>

      <div className="card-footer d-grid gap-2"></div>
    </div>
  );
}
