import React, {Component} from 'react';
import './App.css';
import RollDice from './RollDice';

class App extends Component{
  render() {
    return (//Made five components of the dice and called it face
      <div className="App"> 
        <RollDice />
      </div>
    );
  }
 
}

export default App;
