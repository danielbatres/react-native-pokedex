import { StyleSheet, View, Text, TextInput, Button, Keyboard } from 'react-native'
import React from 'react'

function LoginForm() {
  return (
    <View>
      <Text style={styles.title}>Login</Text>
      <TextInput 
        placeholder='Enter username'
        style={styles.input}
        autoCapitalize='none'
      />
      <TextInput 
        placeholder='Enter password'
        style={styles.input}
        autoCapitalize='none'
        secureTextEntry={true}
      />
      <Button title='Login' onPress={() => console.log('login')} />
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 50,
    marginBottom: 15
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10
  }
})

export { LoginForm }