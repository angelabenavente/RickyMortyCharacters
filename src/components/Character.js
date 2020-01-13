import React from 'react';

const Character = props => {
  return <div id={props.id} >
    <img className="characterImage" src={props.characterImg} alt={props.characterName}/>
    <h3>{props.characterName}</h3>
    <p>{props.characterSpecies}</p>
  </div>
}

export default Character;