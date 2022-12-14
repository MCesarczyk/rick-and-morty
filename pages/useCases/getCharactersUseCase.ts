import request, { gql } from "graphql-request";
import { useCharactersRepository } from "../../infrastructure/charactersRespository";

export const useGetCharactersUseCase = async () => {
  const charactersRespository = useCharactersRepository();

  const query = gql`
      {
        characters {
          info {
            count
          }
          results {
            id,
            name,
            species,
            status
          }
        }
      }
    `;

  const characters = await charactersRespository.getCharacters(query);

  return characters;
};
