import React from 'react';

const Character = props => {
  return (
    <div className="singleCharacterWrapper" id={props.id} >
      <img className="singleCharacterWrapper__image" src={props.characterImg} alt={props.characterName}/>
      <div className="singleCharacterWrapper__description">
        <h3 className="singleCharacterWrapper__name">{props.characterName}</h3>
        <p className="singleCharacterWrapper__specie">{props.characterSpecies}</p>
      </div>
    </div>
  )
}

export default Character;