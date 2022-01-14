import React from 'react';

const pokemonCard = ({ pokemon }) => {
  return (
    <div className="pokemon">
      <div className="pokemon-name">
        <h1>{pokemon.name}</h1>
      </div>
      <div className="pokemon-image">
        <img src={pokemon.image} alt={pokemon.name} />
      </div>
      <p>Special Attacks</p>
      <div className="pokemon-special-attacks">
        {pokemon.attacks.special.slice(0, 3).map((attacks) => (
          <span key={`${attacks.name}-${attacks.damage}`}>{attacks.name}</span>
        ))}
      </div>
      <p>Fast Attacks</p>
      <div className="pokemon-fast-attacks">
        {pokemon.attacks.fast.slice(0, 3).map((attacks) => (
          <span key={`${attacks.name}-${attacks.damage}`}>{attacks.name}</span>
        ))}
      </div>
    </div>
  );
};

export default pokemonCard;
