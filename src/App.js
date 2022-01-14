import React from 'react';
import { useQuery } from '@apollo/client';
import PokemonCard from './components/PokemonCard';
import { GET_POKEMON_INFO } from './graphql/getPokemons';

const App = () => {
  const { data, loading, error } = useQuery(GET_POKEMON_INFO, {
    variables: { first: 1 },
  });
  console.log(data);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <div className="App">
      <header className="App-header">
        <h1>Pokemon App</h1>
      </header>

      <div className="pokemon-container">
        {data &&
          data.pokemons.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
      </div>
    </div>
  );
};

export default App;
