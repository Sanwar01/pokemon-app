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
    console.info(parseInt(pokemonNumber) - 1);
    // setPokemonNumber(parseInt(pokemonNumber,) - 1);
  };

  const nextPokemon = () => {
    // convert pokemon number to integer and increment
    let nextPokemonNumber = parseInt(pokemonNumber) + 1;

    // based on the length of the pokemon number which is now an integer, add leading zeros to the number
    let length = nextPokemonNumber.toString().length;

    switch (length) {
      case 1:
        nextPokemonNumber = nextPokemonNumber.toString().padStart(3, '0'); 
        break;
      case 2:
        nextPokemonNumber = nextPokemonNumber.toString().padStart(3, '0'); 
        break;
      case 3:
        nextPokemonNumber = nextPokemonNumber.toString();
        break;
      default:
        break;
    }

    setPokemonNumber(nextPokemonNumber);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

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
        <button className="next-pokemon-btn" onClick={nextPokemon}>
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default App;
