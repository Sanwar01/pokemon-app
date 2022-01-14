import { gql } from '@apollo/client';
// get all pokemons information and display only 1
export const GET_POKEMON_INFO = gql`
  query pokemons($first: Int!) {
    pokemons(first: $first) {
      id
      name
      image
      resistant
      weaknesses
      maxHP
      maxCP
      attacks {
        fast {
          name
        }
        special {
          name
        }
      }
    }
  }
`;
