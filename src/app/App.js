import React, { Component } from 'react';
import Rotas from '../routes/Rotas';
import GlobalStyle from '../assets/css/GlobalStyle.css';

export default class App extends Component {

  render() {
    return (
      <React.StrictMode>
        <Rotas />
      </React.StrictMode>
    );
  }
}