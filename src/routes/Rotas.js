import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import ContaRestaurante from '../pages/contaRestaurante/ContaRestaurante';
import Formulario from '../pages/formulario/Formulario';
import IMC from '../pages/imc/IMC';
import ZeroaCem from '../pages/jogoZeroaCem/ZeroaCem';
import ZeroaCemMelhorado from '../pages/jogoZeroaCemMelhorado/ZeroaCemMelhorado';
import QuadroMagico from '../pages/quadroMagico/QuadroMagico';
import Home from '../pages/home/Home';
import jogoDaVelha from '../pages/jogaDaVelha/JogoDaVelha';
import Nav from '../components/nav/nav';
import Footer from '../components/footer/footer';

export const paths = require('./Paths');

function Rotas() {
  
  return (
    <BrowserRouter>
      <Nav/>
      <Switch>
        <Route exact path={paths.questao1} component={IMC} />
        <Route exact path={paths.questao2} component={ContaRestaurante} />
        <Route exact path={paths.questao3} component={ZeroaCem} />
        <Route exact path={paths.questao4}component={ZeroaCemMelhorado} />
        <Route exact path={paths.questao5} component={Formulario} />
        <Route exact path={paths.questao6} component={QuadroMagico} />
        <Route exact path={paths.questao7} component={jogoDaVelha} />
        <Route exact path={paths.root} component={Home} />
      </Switch>
      <Footer/>
    </BrowserRouter>
  );
}

export default Rotas;