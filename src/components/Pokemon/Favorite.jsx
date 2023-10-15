import React, { useState, useEffect } from "react";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { addPokemonFavoriteApi, isPokemonFavoriteApi } from '../../api/favorite';

function Favorite(props) {
  const { id } = props;
  const [isFavorite, setIsFavorite] = useState(undefined);
  const [reloadCheck, setReloadCheck] = useState(false);
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
  }, [id, reloadCheck]);

  const onReloadCheckFavorite = () => {
    setReloadCheck(prev => !prev);
  }

  const addFavorite = async () => {
    try {
      await addPokemonFavoriteApi(id);
      onReloadCheckFavorite();
    } catch (error) {
      console.error(error);
    }
  }

  const removeFavorite = () => {

  }

  return (
    <Icon name='heart' color='#fff' size={20} onPress={isFavorite ? removeFavorite : addFavorite} />
  )
}

export { Favorite }