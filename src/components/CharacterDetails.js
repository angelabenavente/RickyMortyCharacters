import React from 'react';
import Header from './Header';
import humanoidIcon from '../images/humanoide.svg'
import alienIcon from '../images/alien.svg'
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";

const CharacterDetails = props => {

  // const { image, name, species, origin, episode, status } = props.character;
  // Comento lo relacionado con "origin" y "episode" ya que la petición no trae bien los datos.
  const { image, name, species, status } = props.character;

  return (
    <React.Fragment>
      <Header/>
      <div className="linkToHome">
        <Link to="/"><i class="goBackIcon fas fa-angle-left"></i> Volver</Link>
      </div>
      <div className="characterDetailsWrapper">
        <img className="characterDetailsWrapper__image" src={image} alt={name}/>
        <div className="characterDetailsWrapper__description">
          <h1>{name}</h1>
          <p>Status: {status} 
            {
              (status === 'Dead') ?
                <i className="characterDetailsWrapper__icon fas fa-skull-crossbones"></i>
              : (status === 'Alive') ?
                <i class="characterDetailsWrapper__icon fas fa-thumbs-up"></i>
              : ''
            }
          </p>
          <p>Species: {species}
            {
              (species === 'Humanoid') ? 
                <img className="characterDetailsWrapper__icon" alt="humanoid icon" src={humanoidIcon}/>
              : (species === 'Alien') ?
                <img className="characterDetailsWrapper__icon" alt="alien icon" src={alienIcon}/>
              : <i className="characterDetailsWrapper__icon fas fa-user-alt"></i>
            }
          </p>
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
  image: PropTypes.string,
  species: PropTypes.string,
  status: PropTypes.string,
  // origin: PropTypes.object,
  // episode: PropTypes.array
};