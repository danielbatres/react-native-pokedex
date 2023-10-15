import { View, Text } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'

function Favorite(props) {
  const { id } = props;

  const addFavorite = () => {

  }

  return (
    <Icon name='heart' color='#fff' size={20} onPress={addFavorite} />
  )
}

export { Favorite }