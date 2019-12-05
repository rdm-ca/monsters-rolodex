import React, {Component} from 'react';
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-bar/search-bar.component";

import './App.css';

class App extends Component
{
  constructor()
  {
    super();
    this.state =
    {
      monsters: [],
      searchText: ""
    }
  }

  render()
  {
    const { monsters, searchText } = this.state;
    const filteredMonsters = monsters.filter( (monster) =>
    {
      return monster.name.toLowerCase().includes( searchText.toLowerCase() );
    } );
    
    return(
      <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox placeholder="Monster search" handleChange={ (e) =>
      {
        this.setState( { searchText: e.target.value } )
      } }
      />
      <CardList cards={filteredMonsters} />
      </div>
    );
  }

  componentDidMount()
  {
    fetch( "https://jsonplaceholder.typicode.com/users")
    .then( (response) => response.json() )
    .then( (users) => this.setState( { monsters: users } ) );
  }
}

export default App;
