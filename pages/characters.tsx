import { useEffect, useState } from 'react';
import { Character } from '../app/types';
import { useGetCharactersUseCase } from './useCases/getCharactersUseCase';

interface TileProps {
  character: Character;
};

export const Tile = (character: Character) => (
  <li key={character.id}>
    {character.id} - {character.name} - {character.species} - {character.status}
  </li>
);

const Home = () => {
  const [characters, setCharacters] = useState<Character[]>([]);

  const getCharacters = async () => {
    const characters = await useGetCharactersUseCase();
    setCharacters(characters);
  };

  useEffect(() => {
    getCharacters()
  }, []);

  return (
    <div>
      <ul>
        {characters?.length && characters.map(character => (
          <li key={character.id}>{character.id} - {character.name} - {character.species} - {character.status} </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
