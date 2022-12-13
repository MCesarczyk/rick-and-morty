import request, { gql } from "graphql-request";

export const getCharactersUseCase = async () => {
  const query = gql`
      {
        characters {
          info {
            count
          }
          results {
            id,
            name
          }
        }
      }
    `;

  const data = await request('https://rickandmortyapi.com/graphql', query);
  const { characters } = await data;

  return {
    props: {
      characters,
    },
  }
};
