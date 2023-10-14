import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Pokedex } from '../screens/Pokedex';
import { Pokemon } from '../screens/Pokemon';

const Stack = createStackNavigator();

function PokedexNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Pokedex' component={Pokedex} />
      <Stack.Screen name='Pokemon' component={Pokemon} />
    </Stack.Navigator>
  )
}

export { PokedexNavigation }