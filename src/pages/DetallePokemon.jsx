import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function PokemonDetalle() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);

  // Llamada a la API cuando name cambia
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => res.json())
      .then((data) => setPokemon(data));
  }, [id]);

  if (!pokemon) return <p>Cargando...</p>;

  const getStatColor = (statName) => {
    switch (statName) {
      case "hp":
        return "bg-danger";
      case "attack":
        return "bg-warning";
      case "defense":
        return "bg-info";
      case "speed":
        return "bg-success";
      default:
        return "bg-secondary";
    }
  };
  return (
    <div className="pokemon-detalle">
      <h1>{pokemon.name}</h1>
      <h2>#{pokemon.id}</h2>
      <img src={pokemon.sprites.other.home.front_default} alt={pokemon.name} />
      <div className="pokemon-detalle-info">
        <h3 className="pokemon-detalle-info-titulo">Tipos</h3>
        <div className="pokemon-detalle-info-valor">
          {pokemon.types.map((type) => (
            <div className="tagTipo" key={type.type.name}>
              {type.type.name}
            </div>
          ))}
        </div>
      </div>

      <div className="pokemon-detalle-info">
        <h3 className="pokemon-detalle-info-titulo">Estadísticas</h3>
        <div className="pokemon-detalle-info-valor">
          <div className="listBox">
            {pokemon.stats.map((stat) => (
              <div className="listItem mb-3" key={stat.stat.name}>
                <div className="d-flex justify-content-between">
                  <span className="text-capitalize">{stat.stat.name}</span>
                  <span>{stat.base_stat}</span>
                </div>

                <div
                  className="progress"
                  role="progressbar"
                  aria-label={stat.stat.name}
                  aria-valuenow={stat.base_stat}
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    className={`progress-bar ${getStatColor(stat.stat.name)}`}
                    style={{ width: `${(stat.base_stat / 100) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pokemon-detalle-info">
        <h3 className="pokemon-detalle-info-titulo">Habilidades</h3>
        <div className="pokemon-detalle-info-valor">
          <div className="listBox">
            {pokemon.abilities.map((ability) => (
              <div className="listItem" key={ability.ability.name}>
                {ability.ability.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonDetalle;
import { Link } from "react-router-dom";
