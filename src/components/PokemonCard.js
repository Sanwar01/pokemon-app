import React from 'react';

const pokemonCard = ({ pokemon }) => {
  return (
    <div className="pokemon">
      <div className="pokemon-name">
        <h1>{pokemon.name}</h1>
      </div>
      <div className="pokemon-meta">
        <p>
          <b>HP</b> {pokemon.maxHP}
        </p>
        <p>
          <b>CP</b> {pokemon.maxCP}
        </p>
      </div>
      <div className="pokemon-image">
        <img src={pokemon.image} alt={pokemon.name} />
      </div>
      <span>Special Attacks</span>
      <div className="pokemon-attacks">
        {pokemon.attacks.special.slice(0, 3).map((attacks) => (
          <span key={`${attacks.name}-${attacks.damage}`}>{attacks.name}</span>
        ))}
      </div>
    </div>
  );
};

export default pokemonCard;
