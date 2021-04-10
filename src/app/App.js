import React, { Component } from 'react';

import ContaRestaurante from '../components/contaRestaurante/ContaRestaurante';
import Formulario from '../components/formulario/Formulario';
import IMC from '../components/imc/IMC';
import JogoDaVelha from '../components/jogaDaVelha/JogoDaVelha';
import ZeroaCem from '../components/jogoZeroaCem/ZeroaCem';
import QuadroMagico from '../components/quadroMagico/QuadroMagico';

export default class App extends Component {

  render() {
    return (
      <React.StrictMode>
        <ContaRestaurante />
        <Formulario />
        <IMC />
        <JogoDaVelha />
        <ZeroaCem />
        <QuadroMagico />
      </React.StrictMode>
    );
  }
}