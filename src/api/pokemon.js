import { API_HOST } from "../utils/constants";

export async function getPokemonsApi(endpointUrl) {
  const url = `${API_HOST}/pokemon?limit=20&offset=0`;

  return await getPokemonDetailsByUrlApi(endpointUrl || url);
}

export async function getPokemonDetailsByUrlApi(url) {
  try {
    const response = await fetch(url);
    const result = await response.json();

    return result;
  } catch (error) {
    throw error;
  }
}

export async function getPokemonDetailsApi(id) {
  return getPokemonDetailsByUrlApi(`${API_HOST}/pokemon/${id}`);
}