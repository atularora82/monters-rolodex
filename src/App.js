import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box-component';


/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */


class App extends Component{

  constructor(){
    super();

    this.state={
     monsters:[],
     searchField:[]
    }

  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(resposne => resposne.json())
    .then(users => this.setState({monsters: users}));
  }

  render(){
    
    const{monsters, searchField} = this.state;
    const filterMonsters = monsters.filter
    (f => f.name.toLowerCase().includes(searchField));
    
    
    return(
      <div className="App">
        <h1> Monsters Rolodex</h1>

      <SearchBox 
        placeholder='Search Monsters'
        handleChange={(e) => this.setState({ searchField: e.target.value.toLowerCase() })}
        >
     </SearchBox>
   
      <CardList monsters={filterMonsters}>
      </CardList>
      
     {/*  <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p> { this.state.monsters.map(monster => 
          <h1 key={monster.id}>{monster.name}</h1>
          ) }</p>
        <button onClick={() => this.setState({name: 'Welcome to React JS'})}>
          Change Text
        </button>
      </header> */}
    </div>
    )
  }
 

}

export default App;
