import { useEffect, useState } from "react";
import Card from "../components/Card";
import pokebola from "../assets/pokebola.png";

export default function ListaPokemones() {
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cargandoMas, setCargandoMas] = useState(false);

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

  const cargarMasPokemones = async () => {
    try {
      setCargandoMas(true);

      const response = await fetch(
        `${urlBase}?limit=20&offset=${pokemonData.length}`
      );
      const data = await response.json();

      const detalles = await Promise.all(
        data.results.map(async (pokemon) => {
          const resDetalle = await fetch(pokemon.url);
          return await resDetalle.json();
        })
      );

      setPokemonData((prev) => [...prev, ...detalles]);
    } catch (error) {
      console.error("Error al cargar más pokemones:", error);
    } finally {
      setCargandoMas(false);
    }
  };

  useEffect(() => {
    fetchAllPokemons();
  }, []);

  if (loading) {
    return (
      <div className="pokebola-loading">
        <img src={pokebola} alt="pokebola-cargando" className="pokebola"/>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <h1 className="display-4 text-center my-4 text-white">Listado de Pokémones</h1>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        {pokemonData.map((pokemon, index) => (
          <div className="col d-flex justify-content-center" key={index}>
            <Card pokemonData={pokemon} />
          </div>
        ))}
      </div>
      <div className="text-center mt-5">
        <button
          className="btn btn-primary"
          onClick={cargarMasPokemones}
          disabled={cargandoMas}
        >
          Cargar más
        </button>
      </div>
    </div>
  );
}
