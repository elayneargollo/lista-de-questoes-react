import React, { Component } from 'react';
import Style from '../Style.css';
import Tabuleiro from './Tabuleiro';

export default class jogoDaVelha extends Component {

  render() {
    return (
      <div className="conteudo">
        <div className="box-jogo">
          <h3> Questão 7</h3>
          <h5> Jogo da velha</h5><br></br>
          
          <div className="game-board">
            <Tabuleiro />
          </div>
        </div>
      </div>
    );
  }
}
