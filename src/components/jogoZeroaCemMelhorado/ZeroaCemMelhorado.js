import React, { Component } from 'react';
import Style from './Style.css';

export default class ZeroaCemMelhorado extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numeroEscolhidoPeloUsuario: 0,
      numeroGerado: 0,
      result:  "",
      quantidadeTentativas: 0
    };
  }

  sortearNumero(){
    let state = this.state;
    let numeroGerado = Math.random() * (100 - 0) + 0;
  
    state.numeroGerado = numeroGerado;
    
    this.setState(state);
    this.compararNumeros();
  }

  compararNumeros()
  {
    let state = this.state;

    if(Number(state.numeroEscolhidoPeloUsuario) === Number(state.numeroGerado)){
      state.result = "Você acertou";
    }
    else
    if(state.numeroEscolhidoPeloUsuario > state.numeroGerado){
      state.result = "É menor";
      state.quantidadeTentativas++;
    }  
    else
    if(state.numeroEscolhidoPeloUsuario < state.numeroGerado){
      state.result = "É maior";
      state.quantidadeTentativas++;
    }

    this.setState(state);
  }

  render() {
    return (
      <div className="conteudo">
      <div className="box-jogoZero">
      <h3> Questão 4</h3>
      <h5> Jogo zero a cem </h5><br></br>
      Número:{" "}
        <input
          type="text"
          name="numeroEscolhidoPeloUsuario"
          value={this.state.numeroEscolhidoPeloUsuario}
          onChange={(e) => this.setState({ numeroEscolhidoPeloUsuario: e.target.value })}
        />
        <button class="btn waves-effect waves-light" onClick={this.sortearNumero.bind(this)}>Sortear Numero</button>
        <br />
        <h6>Resultado: {this.state.result}</h6>
        <h6>Quantidade de tentativas: {this.state.quantidadeTentativas}</h6>
        </div>
      </div>
    );
  }
}

