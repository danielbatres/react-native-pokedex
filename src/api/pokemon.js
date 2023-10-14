import { API_HOST } from "../utils/constants";

export async function getPokemonsApi() {
  const url = `${API_HOST}/pokemon?limit=20&offset=0`;

  return await getPokemonDetailsByUrlApi(url);
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
