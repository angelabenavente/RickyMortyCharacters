import React from 'react';
import '../styles/App.scss';
import CharactersList from './CharactersList';
import CharacterFilter from './CharacterFilter';
import CharacterDetails from './CharacterDetails';
import { fetchCharacters} from '../services/Api';
import { fetchCharacterId } from '../services/Api';
import { Route, Switch } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allCharacters: [],
      singleCharacter: '',
      value: '',
    }
    this.onChangeHandler = this.onChangeHandler.bind(this);
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

  renderCharacterDetails(props) {
    this.fetchCharacterId(props.match.params.id)
    return <CharacterDetails character={this.state.singleCharacter} />;
  }

  onChangeHandler(inputValue){
    this.setState({
      value: inputValue
    });
  }

  render() {
    return (
      <div className="App">
       <Switch>
          <Route path="/" exact>
            <CharacterFilter
              onChangeHandler={this.onChangeHandler}
              inputValue={this.state.value}
            />
            <CharactersList
              allCharacters={this.state.allCharacters}
              inputValue={this.state.value}
            />
          </Route>
          <Route path="/character/:id" render={this.renderCharacterDetails} />
      </Switch>
     </div>
    );
  }
}

export default App;

