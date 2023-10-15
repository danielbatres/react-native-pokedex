import { Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import { getPokemonFavoriteApi } from '../api/favorite'
import { getPokemonDetailsApi } from '../api/pokemon'
import useAuth from '../hooks/useAuth'
import { PokemonList  } from '../components/PokemonList'
import { NoLogged } from '../components/NoLogged'

function Favorites() {
  const [pokemons, setPokemons] = useState([]);
  const { auth } = useAuth();

  useEffect(() => {
    if (auth) {
      (async () => {
        const response = await getPokemonFavoriteApi();

        const pokemonsArray = [];

        for await (const id of response) {
          const pokemonDetails = await getPokemonDetailsApi(id);

          pokemonsArray.push({
            id: pokemonDetails.id,
            name: pokemonDetails.name,
            type: pokemonDetails.types[0].type.name,
            order: pokemonDetails.order,
            image:
              pokemonDetails.sprites.other["official-artwork"].front_default,
          });
        }

        setPokemons(pokemonsArray);
      })();
    }
  }, [auth, pokemons]);

  return !auth ? <NoLogged /> : <PokemonList pokemons={pokemons} />
}

export { Favorites }