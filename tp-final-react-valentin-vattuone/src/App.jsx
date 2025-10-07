import { useEffect, useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Await,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import ListaPokemones from "./pages/ListaPokemones.jsx";
import DetallePokemon from "./pages/DetallePokemon.jsx";

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const urlBase = "https://pokeapi.co/api/v2/pokemon";

  const fetchPokemon = async (id) => {
    try {
      const response = await fetch(`${urlBase}${id}`);
      const data = await response.json();

      console.log(pokemonData);
      setPokemonData((prevpokemonData) => [...prevpokemonData, data]);
    } catch (error) {
      // eslint-disable-next-line no-unused-vars
      console.error("Ha Habido un error con el Fetch de Pokemones.");
    }
  };
  const fetchAllPokemons = () => {
    for (let index = 0; index < 20; index++) {
      fetchPokemon(index);
    }
  };

  useEffect(() => {
    fetchAllPokemons();
  }, []);

  useEffect(() => {
console.log(pokemonData)
  }, [pokemonData]);


  return (
    <>
      <Router>
        {/*componente reutilizable (navbar)*/}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pokemones" element={<ListaPokemones />} />
            <Route path="/pokemones/:id" element={<DetallePokemon />} />
            <Route
              path="*"
              element={<h1>Error 404 - Página no encontrada</h1>}
            />
          </Routes>
        </main>
      </Router>

      <h1 className="text-4xl font-semibold text-center my-6">POKE API DEMO</h1>
      <div className="px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
         {pokemonData.map((pokemon,index)=> (
      <ListaPokemones key={index} pokemonData={pokemon}/>
      ))}
          <ListaPokemones pokemonData={pokemonData} />
          <ListaPokemones pokemonData={pokemonData} />
       
        </div>
      </div>
    </>
  );
}

export default App;
