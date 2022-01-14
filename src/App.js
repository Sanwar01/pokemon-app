import React from 'react';
import { useQuery } from '@apollo/client';
import PokemonCard from './components/PokemonCard';
import { GET_POKEMON_INFO } from './graphql/getPokemons';

const App = () => {
  const { data, loading, error } = useQuery(GET_POKEMON_INFO, {
    variables: { first: 1 },
  });

  console.log(data);

  const previousPokemon = () => {};
  const nextPokemon = () => {};

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <div className="App">
      <header className="App-header">
        <h1>Pokemon App</h1>
      </header>

      <div className="pokemon-container">
        <button className="previous-pokemon-btn" onClick={previousPokemon}>
          &#8249;
        </button>

        {data &&
          data.pokemons.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
        <button className="next-pokemon-btn" onClick={nextPokemon}>
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default App;
