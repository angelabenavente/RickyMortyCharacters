import React from 'react';
import Character from './Character';

const CharactersList = props => {
  console.log(props);

  return (
    <div>
      <ul>
      {props.allCharacters
        .filter(character => props.inputValue === '' || character.name.toLowerCase().includes(props.inputValue.toLowerCase()))
        .map((character,index) =>  <li className="character-wrapper" key={character.id}>
        <Character
          characterId={props.characterId}
          characterImg={character.image}
          characterName={character.name}
          characterSpecies={character.species}
            id={character.id}
          />
      </li>
      )}
      </ul>
    </div>
  );
}


export default CharactersList;