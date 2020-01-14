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
        <Link className="linkToHome" to="/"><i class="fas fa-angle-left"></i> Volver</Link>
      </div>
      <div className="character-details-wrapper">
        <img className="detailImage" src={image} alt={name}/>
        <div className="detailsDescription">
          <h1>{name}</h1>
          <p>Status: {status} 
            {
              (status === 'Dead') ?
                <i className="detailIcon fas fa-skull-crossbones"></i>
              : (status === 'Alive') ?
                <i class="detailIcon fas fa-thumbs-up"></i>
              : ''
            }
          </p>
          <p>Species: {species}
            {
              (species === 'Humanoid') ? 
                <img className="detailIcon" src={humanoidIcon}/>
              : (species === 'Alien') ?
                <img className="detailIcon" src={alienIcon}/>
              : <i class="detailIcon fas fa-user-alt"></i>
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