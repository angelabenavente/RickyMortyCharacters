import React from 'react';

const Character = props => {
  return <div className="character-wrapper" id={props.id} >
    <img src={props.characterImg} alt={props.characterName}/>
    <h3>{props.characterName}</h3>
    <p>{props.characterSpecies}</p>
  </div>
}

export default Character;