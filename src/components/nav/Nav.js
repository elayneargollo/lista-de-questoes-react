import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends Component {

  render() {
    
    return (
        <nav>
        <div class="nav-wrapper">
          <ul id="nav-mobile" class="left hide-on-med-and-down">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/questao1">Questão 1</Link></li>
            <li><Link to="/questao2">Questão 2</Link></li>
            <li><Link to="/questao3">Questão 3</Link></li>
            <li><Link to="/questao4">Questão 4</Link></li>
            <li><Link to="/questao4">Questão 5</Link></li>
            <li><Link to="/questao6">Questão 6</Link></li>
            <li><Link to="/questao7">Questão 7</Link></li>
          </ul>
        </div>
      </nav>
    )};
}
