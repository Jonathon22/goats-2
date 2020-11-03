import React from 'react';
import GoatCorral from '../Components/GoatCorral';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1 className="site-header">Goat Yoga</h1>
        < GoatCorral />
      </div>
    );
  }
}

export default App;
