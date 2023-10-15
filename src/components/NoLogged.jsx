import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

function NoLogged() {
  const navigation = useNavigation();

  return (
    <View style={styles.content}>
      <Text style={styles.text}>You must be logged in to see this screen</Text>
      <Button title='Go to login' onPress={() => navigation.navigate('Account')} />
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    marginVertical: 50,
    paddingHorizontal: 20
  },
  text: {
    textAlign: 'center',
    marginBottom: 10
  }
})

export { NoLogged }