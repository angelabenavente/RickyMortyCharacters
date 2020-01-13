import React from 'react';
import '../styles/App.scss';
import { fetchCharacters } from '../services/Api';
import CharactersList from './CharactersList';
import CharacterFilter from './CharacterFilter';
import { Link, Route, Switch } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allCharacters: [],
      value: '',
    }
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  componentDidMount(){
    fetchCharacters() 
        .then(data => {
          this.setState({
            allCharacters: data.results,
            value: ''
          });
          console.log(this.state.allCharacters);
        });
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
      </Switch>
     </div>
    );}
  }

export default App;

