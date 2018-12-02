import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    state = {
      texto: ''
    }

	atualizaTexto = (texto) => {
      this.setState(() => ({
        texto: texto
      }))
    }

  render() {
    const { texto } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          <input 
			type="text" placeholder="Say Something" 
			value= {texto} 
			onChange = {(event) => this.atualizaTexto(event.target.value)} 
		  />
          <p className="echo">Echo:</p>
          <p>{ texto }</p>
        </div>
      </div>
    );
  }
}

export default App;
