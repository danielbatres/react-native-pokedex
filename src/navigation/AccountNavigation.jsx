import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Account } from '../screens/Account';

const Stack = createStackNavigator();

function AccountNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Account' component={Account} options={{
        title: 'My Account'
      }} />
    </Stack.Navigator>
  )
}

export { AccountNavigation }