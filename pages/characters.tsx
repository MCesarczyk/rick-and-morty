import { useEffect, useState } from 'react';
import { Character } from '../app/types';
import { getCharactersUseCase } from './useCases/getCharactersUseCase';

interface HomeProps {
  characters: Character[];
};

const Home = () => {
  const [characters, setCharacters] = useState<Character[]>([]);

  const getCharacters = async () => {
    const response = await getCharactersUseCase();

    setCharacters(response.props.characters.results);
  };

  useEffect(() => {
    getCharacters()
  }, []);

  return (
    <div>
      <ul>
        {characters?.length && characters.map(character => (
          <li key={character.id}>{character.id} - {character.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;

