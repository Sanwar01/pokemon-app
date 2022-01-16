import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import PokemonCard from './components/PokemonCard';
import { GET_POKEMON_INFO } from './graphql/getPokemons';

const App = () => {
  const { data, loading, error } = useQuery(GET_POKEMON_INFO, {
    variables: { first: 151 },
  });
  const [pokemonNumber, setPokemonNumber] = useState('001');

  const previousPokemon = () => {
    // convert pokemon number to integer and decrement
    let nextPokemonNumber = parseInt(pokemonNumber) - 1;

    // based on the length of the pokemon number which is now an integer, add leading zeros to the number
    let length = nextPokemonNumber.toString().length;

    if (length === 1 || length === 2)
      nextPokemonNumber = nextPokemonNumber.toString().padStart(3, '0');
    else if (length === 3);
    nextPokemonNumber = nextPokemonNumber.toString();

    setPokemonNumber(nextPokemonNumber);
  };

  const nextPokemon = () => {
    // convert pokemon number to integer and increment
    let nextPokemonNumber = parseInt(pokemonNumber) + 1;

    // based on the length of the pokemon number which is now an integer, add leading zeros to the number
    let length = nextPokemonNumber.toString().length;

    if (length === 1 || length === 2)
      nextPokemonNumber = nextPokemonNumber.toString().padStart(3, '0');
    else if (length === 3);
    nextPokemonNumber = nextPokemonNumber.toString();

    setPokemonNumber(nextPokemonNumber);
  };

  if (loading) return <div className="loader" />;
  if (error) return <p className="error">Error</p>;

  return (
    <div className="App">
      <header className="App-header">
        <h1>Pokemon App</h1>
      </header>

      <div className="pokemon-container">
        {pokemonNumber !== '001' && (
          <button className="previous-pokemon-btn" onClick={previousPokemon}>
            &#8249;
          </button>
        )}

        {data &&
          // data.pokemons.map((pokemon) => (
          data.pokemons
            .filter((pokemon) => pokemon.number === pokemonNumber)
            .map((filteredPokemon) => (
              <PokemonCard key={filteredPokemon.id} pokemon={filteredPokemon} />
            ))}
        {pokemonNumber !== '151' && (
          <button className="next-pokemon-btn" onClick={nextPokemon}>
            &#8250;
          </button>
        )}
      </div>
    </div>
  );
};

export default App;
