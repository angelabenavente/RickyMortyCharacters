import React from 'react';
import PropTypes from "prop-types";
import Header from './Header';
import { Link, Route, Switch } from 'react-router-dom';
import humanIcon from '../images/human.svg'
import humanoidIcon from '../images/humanoide.svg'
import alienIcon from '../images/alien.svg'

const CharacterDetails = props => {
  const { image, name, species, origin, episode, status } = props.character;
  console.log(props)

  return (
    <React.Fragment>
      <Header/>
      <ul>
          <li className="linkToHome">
            <Link to="/"><i class="fas fa-angle-left"></i> Volver</Link>
          </li>
        </ul>
  <div className="character-details-wrapper">

    <img className="detailImage" src={image} alt={name}></img>
    <div className="detailsDescription">
    <h1>{name}</h1>
  <p>Status:  {status}  {(status === 'Dead') ? <i className="detailIcon fas fa-skull-crossbones"></i> : (status === 'Alive') ?  <i class="detailIcon fas fa-thumbs-up"></i> : ''} </p>
    <p>Species: {species} {(species === 'Humanoid') ? <img className="detailIcon" src={humanoidIcon}/> : (species === 'Alien') ? <img className="detailIcon" src={alienIcon}/> : <i class="detailIcon fas fa-user-alt"></i>}  </p>
    {/* <p>{episode.length}</p> */} 
    {/* <p>{{origin}.name}</p> */}
    </div>
    </div>
    </React.Fragment>
  )
}

export default CharacterDetails;


CharacterDetails.propTypes = {
  name: PropTypes.string,
  status: PropTypes.string,
  species: PropTypes.string,
};