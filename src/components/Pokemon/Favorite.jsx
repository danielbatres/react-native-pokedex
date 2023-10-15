import React, { useState, useEffect } from "react";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { addPokemonFavoriteApi, isPokemonFavoriteApi } from '../../api/favorite';

function Favorite(props) {
  const { id } = props;
  const [isFavorite, setIsFavorite] = useState(undefined);
  const Icon = isFavorite ? FontAwesome : FontAwesome5;

  useEffect(() => {
    (async () => {
      try {
        const response = await isPokemonFavoriteApi();

        setIsFavorite(response);
      } catch (error) {
        setIsFavorite(false);
      }
    })()
  }, []);

  const addFavorite = async () => {
    await addPokemonFavoriteApi(id);
  }

  const removeFavorite = () => {

  }

  return (
    <Icon name='heart' color='#fff' size={20} onPress={isFavorite ? removeFavorite : addFavorite} />
  )
}

export { Favorite }