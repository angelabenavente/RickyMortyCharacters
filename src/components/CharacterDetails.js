import React from 'react';

const CharacterDetails = props => {
  console.log(props)
  return <div className="character-details-wrapper">
    <h1>{props.characterName}</h1>
    <img src={props.characterImage}/>
    <p>{props.characterSpecies}</p>
    </div>
}

export default CharacterDetails;