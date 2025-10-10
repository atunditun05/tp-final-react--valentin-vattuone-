import { useEffect, useState } from "react";
import Card from "../components/Card";
import pokebola from "../assets/pokebola.png"
export default function ListaPokemones() {
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(true);

  const urlBase = "https://pokeapi.co/api/v2/pokemon";

  const fetchAllPokemons = async () => {
    try {
      const response = await fetch(`${urlBase}?limit=20&offset=0`);
      const data = await response.json();

      const allPokemonData = await Promise.all(
        data.results.map(async (pokemon) => {
          const res = await fetch(pokemon.url);
          return await res.json();
        })
      );

      setPokemonData(allPokemonData);
      setLoading(false);
    } catch (error) {
      console.error("Error al obtener los pokémon:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllPokemons();
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center min-vh-50">
       <img src={pokebola} alt="pokebola-cargando" /> 
      </div>
    );
  }
// falta rotar la pokebola
  return (
    <div className="container py-5">
      <h1 className="display-4 text-center my-4">
        Listado de Pokémones
      </h1>
      

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        {pokemonData.map((pokemon, index) => (
          <div className="col" key={index}>
            <Card pokemonData={pokemon} />
          </div>
        ))}
      </div>
    </div>
  );
}