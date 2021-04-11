import React, { Component } from 'react';
import swal from 'sweetalert';
import Style from '../Style.css';

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
    this.emitirResposta();
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
    }  
    else
    if(state.numeroEscolhidoPeloUsuario < state.numeroGerado){
      state.result = "É maior";
    }

    this.setState(state);
  }

  emitirResposta()
  {
    swal("Processado com sucesso", `Resultado: ${this.state.result}`, "success");
  }

  render() {
    return (
      <div className="conteudo">
      <div className="box-jogoZero">
      <h3> Questão 3</h3>
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
        </div>
      </div>
    );
  }
}

