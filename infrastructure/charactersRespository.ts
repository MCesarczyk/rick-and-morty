import request from "graphql-request";

export const useCharactersRepository = () => {
  const charactersRespository = {
    getCharacters: async (query: string) => {
      const data = await request('https://rickandmortyapi.com/graphql', query);
      const { characters } = await data;
      return await characters.results;
    },

  };
  return charactersRespository;
};
