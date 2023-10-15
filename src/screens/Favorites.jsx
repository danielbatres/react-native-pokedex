import { SafeAreaView, Text, Button } from 'react-native'
import React, { useState, useEffect } from 'react'
import { getPokemonFavoriteApi } from '../api/favorite'

function Favorites() {
  const [favorites, setFavorites] = useState(null);

  const getFavorites = async () => {
    const response = await getPokemonFavoriteApi();
    console.log(response);
    setFavorites(favorites);
  }

  return (
    <SafeAreaView>
      <Text>Favorites</Text>
      <Button 
        title='Get favorites' 
        onPress={getFavorites}
      />
    </SafeAreaView>
  )
}

export { Favorites }