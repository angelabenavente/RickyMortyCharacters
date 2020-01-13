import React from 'react';
import '../styles/App.scss';
import { fetchCharacters} from '../services/Api';
import { fetchCharacterId } from '../services/Api';
import CharactersList from './CharactersList';
import CharacterFilter from './CharacterFilter';
import CharacterDetails from './CharacterDetails';
import { Link, Route, Switch } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allCharacters: [],
      singleCharacter: 'hola',
      value: '',
    }
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.characterId = this.characterId.bind(this);
    this.fetchCharacterId = this.fetchCharacterId.bind(this);
    this.renderCharacterDetails = this.renderCharacterDetails.bind(this);
  }

  componentDidMount(){
    fetchCharacters() 
        .then(data => {
          this.setState({
            allCharacters: data.results,
            value: ''
          });
        });
    }



    characterId(id){
      console.log(this.state.singleCharacter);
    }


    fetchCharacterId(id){
      if(id !== this.state.singleCharacter.id) {
        console.log(id)
        fetchCharacterId(id)
        .then(data => 
          this.setState({
            singleCharacter: data,
          })
        )
      }
    }

    renderCharacterDetails(props){

      this.fetchCharacterId(props.match.params.id)
      return <CharacterDetails character={this.state.singleCharacter} />;
    }

    onChangeHandler(inputValue){
      this.setState({
        value: inputValue
      });
    }


  render() {
    console.log(this.state.singleCharacter);
    return (
      <div className="App">
       
       <Switch>
          <Route path="/" exact>
          <CharacterFilter onChangeHandler={this.onChangeHandler} inputValue={this.state.value}/>
          <CharactersList allCharacters = {this.state.allCharacters} inputValue={this.state.value}/>
          </Route>
          <Route path="/character/:id" render={this.renderCharacterDetails}></Route>
      </Switch>
     </div>
    );}
  }

export default App;

