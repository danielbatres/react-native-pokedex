import { StyleSheet, View, Text, Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react'

function PokemonCard(props) {
  const { pokemon } = props;

  const goToPokemon = () => {
    console.log(`Go to pokemon: ${pokemon.name}`)
  }

  return (
    <TouchableWithoutFeedback onPress={goToPokemon}>
      <View style={styles.card}>
        <View style={styles.spacing}>
          <View style={styles.bgStyles}>
            <Text style={styles.number}>#{`${pokemon.order}`.padStart(3, 0)}</Text>
            <Text style={styles.name}>{pokemon.name}</Text>
            <Image
              source={{
                uri: pokemon.image,
              }}
              style={styles.image}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 130
  },
  spacing: {
    flex: 1,
    padding: 5
  },
  bgStyles: {
    backgroundColor: 'gray'
  },
  number: {
    position: 'absolute',
    right: 10,
    top: 10,
    color: '#FFF',
    fontSize: 11
  },
  name: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    paddingTop: 10
  },
  image: {
    position: 'absolute',
    bottom: 2,
    right: 2,
    width: 90,
    height: 90
  }
})

export { PokemonCard }