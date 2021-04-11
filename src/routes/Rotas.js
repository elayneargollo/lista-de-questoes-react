import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import ContaRestaurante from '../components/contaRestaurante/ContaRestaurante';
import Formulario from '../components/formulario/Formulario';
import IMC from '../components/imc/IMC';
import JogoDaVelha from '../components/jogaDaVelha/JogoDaVelha';
import ZeroaCem from '../components/jogoZeroaCem/ZeroaCem';
import ZeroaCemMelhorado from '../components/jogoZeroaCemMelhorado/ZeroaCemMelhorado';
import QuadroMagico from '../components/quadroMagico/QuadroMagico';
import Home from '../components/home/Home';

export const paths = require('./Paths');

function Rotas() {
  
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={paths.questao1} component={IMC} />
        <Route exact path={paths.questao2} component={ContaRestaurante} />
        <Route exact path={paths.questao3} component={ZeroaCem} />
        <Route exact path={paths.questao4}component={ZeroaCemMelhorado} />
        <Route exact path={paths.questao5} component={Formulario} />
        <Route exact path={paths.questao6} component={JogoDaVelha} />
        <Route exact path={paths.questao7} component={QuadroMagico} />
        <Route exact path={paths.root} component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default Rotas;