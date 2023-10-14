import { SafeAreaView, Text } from "react-native";
import React, { useState, useEffect } from 'react'
import { getPokemonsApi } from "../api/pokemon";

function Pokedex() {
  useEffect(() => {
    (async () => {
      await loadPokemons();
    })()
  }, []);

  const loadPokemons = async () => {
    try {
      const response = await getPokemonsApi();
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <SafeAreaView>
      <Text>Pokedex</Text>
    </SafeAreaView>
  )
}

export { Pokedex }