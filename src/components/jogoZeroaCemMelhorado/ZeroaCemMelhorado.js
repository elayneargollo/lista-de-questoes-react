import React, { Component } from 'react';

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
      <div className="ZeroaCem">
      <h1>Zero a Cem Melhorado </h1>
      Número:{" "}
        <input
          type="text"
          name="numeroEscolhidoPeloUsuario"
          value={this.state.numeroEscolhidoPeloUsuario}
          onChange={(e) => this.setState({ numeroEscolhidoPeloUsuario: e.target.value })}
        />
        <button onClick={this.sortearNumero.bind(this)}>Sortear Numero</button>
        <br />
        <h6>Resultado: {this.state.result}</h6>
        <h6>Quantidade de tentativas: {this.state.quantidadeTentativas}</h6>
      </div>
    );
  }
}

