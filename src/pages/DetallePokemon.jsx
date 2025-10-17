import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function PokemonDetalle() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);

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
    <div className="detallepokemon">
      <div
        className="btn-group btn-group-lg"
        role="group"
        aria-label="Large button group"
      >
        <button type="button" className="btn btn-primary">
          <Link to={`/pokemones/${pokemon.id - 1}`}>Anterior</Link>
        </button>
        <button type="button" className="btn btn-danger">
          <Link to={`/pokemones/`}>Volver a Explorar</Link>
        </button>
        <button type="button" className="btn btn-primary">
          <Link to={`/pokemones/${pokemon.id + 1}`}>Siguiente</Link>
        </button>
      </div>

      <h1>{pokemon.name}</h1>
      <h2>#{pokemon.id}</h2>
      <img src={pokemon.sprites.other.home.front_default} alt={pokemon.name} />

      <div className="detallepokemon-datos">
        <div className="detallepokemon-caracteristicas-special-value">
          <div className="dato-altura">Altura: {pokemon.height / 10} m</div>
          <div className="dato-peso">Peso: {pokemon.weight / 10} kg</div>
          <div className="dato-xp">
            Experiencia base: {pokemon.base_experience}
          </div>
        </div>
      </div>

      <div className="detallepokemon-caracteristicas">
        <h1 className="detallepokemon-caracteristicas-titulo">Tipos</h1>
        <div className="detallepokemon-caracteristicas-value">
          <div className="detalle-pokemon-type-data">
            {pokemon.types.map((type) => (
              <div className="tag-type" key={type.type.name}>
                {type.type.name}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="detallepokemon-caracteristicas">
        <h1 className="detallepokemon-caracteristicas-titulo">Estadísticas</h1>
        <div className="detallepokemon-caracteristicas-value">
          <div>
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

      <div className="detallepokemon-caracteristicas">
        <h1 className="detallepokemon-caracteristicas-titulo">Movimientos</h1>
        <div className="detallepokemon-caracteristicas-value">
          <div className="carac-card">
            {pokemon.moves.map((movesData) => (
              <div className="itemList" key={movesData.move.move}>
                {movesData.move.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonDetalle;
