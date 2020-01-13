import React from 'react';
import Character from './Character';
import { Link } from 'react-router-dom';

const CharactersList = props => {

  return (
    <div>
      <ul>
      {props.allCharacters
        .filter(character => props.inputValue === '' || character.name.toLowerCase().includes(props.inputValue.toLowerCase()))
        .map((character,index) =>  <li className="character-wrapper" key={character.id}>
       <Link to={`/character/${character.id}`}>
        <Character
          characterId={props.characterId}
          characterImg={character.image}
          characterName={character.name}
          characterSpecies={character.species}
            id={character.id}
          />
        </Link>
      </li>
      )}
      </ul>
    </div>
  );
}


export default CharactersList;