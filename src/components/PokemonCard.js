import React from 'react';

const pokemonCard = ({ pokemon }) => {
  return (
    <div className="pokemon">
      <div className="pokemon-name">
        <p>{pokemon.number}</p>
        <h1>{pokemon.name}</h1>
      </div>
      <div className="pokemon-image">
        <img src={pokemon.image} alt={pokemon.name} />
      </div>
      <p>Special Attacks</p>
      <div className="pokemon-special-attacks">
        {pokemon.attacks.special.slice().map((attacks) => (
          <span key={`${attacks.name}-${attacks.damage}`}>{attacks.name}</span>
        ))}
      </div>
      <p>Fast Attacks</p>
      <div className="pokemon-fast-attacks">
        {pokemon.attacks.fast.slice().map((attacks) => (
          <span key={`${attacks.name}-${attacks.damage}`}>{attacks.name}</span>
        ))}
      </div>
      <p>Resistance</p>
      <div className="pokemon-fast-attacks">
        {pokemon.resistant.slice().map((resistant) => (
          <span key={`${resistant}`}>{resistant}</span>
        ))}
      </div>
      <p>Weaknesses</p>
      <div className="pokemon-fast-attacks">
        {pokemon.weaknesses.slice().map((weaknesses) => (
          <span key={`${weaknesses}`}>{weaknesses}</span>
        ))}
      </div>
    </div>
  );
};

export default pokemonCard;
