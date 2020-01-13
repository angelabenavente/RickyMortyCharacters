import React from 'react';
import '../styles/App.scss';
import { fetchCharacters, fetchCharacterId } from '../services/Api';
import CharactersList from './CharactersList';
import CharacterFilter from './CharacterFilter';
import CharacterDetails from './CharacterDetails';
import { Link, Route, Switch } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allCharacters: [],
      singleCharacter: {},
      value: '',
    }
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.characterId = this.characterId.bind(this);
    this.fetchCharacterId = this.fetchCharacterId.bind(this);
  }

  componentDidMount(){
    fetchCharacters() 
        .then(data => {
          this.setState({
            allCharacters: data.results,
            singleCharacter: {},
            value: ''
          });
          console.log(this.state.allCharacters);
        });
    }



    characterId(id){
      console.log(id);
    }

    //cargo receta seleccionada
    fetchCharacterId(id){
      if(id !== this.state.singleCharacter.id) {
        fetchCharacterId(id)
        .then(data => 
          this.setState({
            singleCharacter: data.results[0]
          })
        )
      }
    }

    renderCharacterDetails(props){
      console.log(props)
      this.fetchCharacterId(props.match.params.id)
      return <CharacterDetails character={this.state.singleCharacter} />;
    }

    onChangeHandler(inputValue){
      this.setState({
        value: inputValue
      });
      console.log(this.state.value);
    }


  render() {
    console.log(this.state.value)
    return (
      <div className="App">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
       <Switch>
          <Route path="/" exact>
          <CharacterFilter onChangeHandler={this.onChangeHandler} inputValue={this.state.value}/>
          <CharactersList allCharacters = {this.state.allCharacters} inputValue={this.state.value}/>
          </Route>
          <Route path="/character/:id">
             <CharacterDetails/>
          </Route>
      </Switch>
     </div>
    );}
  }

export default App;

