import React, { Component } from 'react';

export default class ZeroaCem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numeroEscolhidoPeloUsuario: 0,
      numeroGerado: 0,
      result:  ""
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
  
    if(state.numeroEscolhidoPeloUsuario === state.numeroGerado){
      state.result = "Você acertou";
    }
    else
    if(state.numeroEscolhidoPeloUsuario > state.numeroGerado){
      state.result = "É menor";
    }  
    else
    if(state.numeroEscolhidoPeloUsuario < state.numeroGerado){
      state.result = "É maior";
    }

    this.setState(state);
  }

  render() {
    return (
      <div className="ZeroaCem">
      <h1>Zero a Cem</h1>
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
      </div>
    );
  }
}

