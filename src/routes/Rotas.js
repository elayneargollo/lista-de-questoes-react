import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ContaRestaurante from '../components/contaRestaurante/ContaRestaurante';
//import Formulario from '../components/formulario/Formulario';
import IMC from '../components/imc/IMC';
//import JogoDaVelha from '../components/jogaDaVelha/JogoDaVelha';
import ZeroaCem from '../components/jogoZeroaCem/ZeroaCem';
import ZeroaCemMelhorado from '../components/jogoZeroaCemMelhorado/ZeroaCemMelhorado';
//import QuadroMagico from '../components/quadroMagico/QuadroMagico';

function Rotas() {
  
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/questao1" component={IMC} />
        <Route exact path="/questao2" component={ContaRestaurante} />
        <Route exact path="/questao3" component={ZeroaCem} />
        <Route exact path="/questao4" component={ZeroaCemMelhorado} />
      </Switch>
    </BrowserRouter>
  );
}

export default Rotas;