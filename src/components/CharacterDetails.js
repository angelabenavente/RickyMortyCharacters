import React from 'react';
import PropTypes from "prop-types";
import { Link, Route, Switch } from 'react-router-dom';
import humanIcon from '../images/human.svg'
import humanoidIcon from '../images/humanoide.svg'
import alienIcon from '../images/alien.svg'

const CharacterDetails = props => {
  const { image, name, species, origin, episode, status } = props.character;
  console.log(props)

  return <div className="character-details-wrapper">
     <ul>
          <li>
            <Link to="/"><i class="fas fa-angle-left"></i> Volver</Link>
          </li>
        </ul>
    <img src={image} alt={name}></img>
    <h1>{name}</h1>
    <p>Status: {(status !== 'Dead') ? '' : <i className="fas fa-skull-crossbones"></i>} {status} </p>
    <p>Species: {(species === 'Humanoid') ? <img className="specieIcon" src={humanoidIcon}/> : (species === 'Alien') ? <img className="specieIcon" src={alienIcon}/> : <img className="specieIcon" src={humanIcon}/>} {species} </p>
    <p>{episode}</p>
    {/* <p>{{origin}.name}</p> */}
    </div>
}

export default CharacterDetails;


// CharacterDetails.propTypes = {
//   image: PropTypes.string,
//   name: PropTypes.string,
//   status: PropTypes.string,
//   species: PropTypes.string,
//   "origin.name": PropTypes.string,
//   "episode.length": PropTypes.number
// };