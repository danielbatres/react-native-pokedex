import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Favorites } from '../screens/Favorites';
import { Pokemon } from '../screens/Pokemon';

const Stack = createStackNavigator();

function FavoriteNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name='Favorites' 
        component={Favorites} 
        options={{
          title: 'Favorites'
        }}
      />
      <Stack.Screen 
        name='Pokemon'
        component={Pokemon}
        options={{
          title: '',
          headerTransparent: true
        }}
      />
    </Stack.Navigator>
  )
}

export { FavoriteNavigation }