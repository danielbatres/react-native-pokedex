import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Favorites } from '../screens/Favorites';

const Stack = createStackNavigator();

function FavoriteNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Favorites' component={Favorites} options={{
        title: 'Favorites'
      }} />
    </Stack.Navigator>
  )
}

export { FavoriteNavigation }