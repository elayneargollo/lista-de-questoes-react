import React, { Component } from "react";
import Style from '../Style.css';
import swal from 'sweetalert';

export default class IMC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peso: 0,
      altura: 0,
      imc: "",
      categoria: ""
    };
  }

  handleClick() {
    this.calcular();
    this.categorizar();
    this.emitirResposta();
  }

  calcular() {

    let state = this.state;
    let imc = state.peso / state.altura ** 2;
    state.imc = imc;
    this.setState(state);
  
  }

  categorizar(){
    let state = this.state;

    if(state.imc < 25){
        state.categoria = "Peso Normal";
    }
    else 
    if(state.imc > 30){
        state.categoria = "Obesidade";
    }
    else 
    if(25 <= state.imc && state.imc <= 30){
        state.categoria = "Sobre peso";
    }

    this.setState(state);
  }

  emitirResposta()
  {
    swal("Processado com sucesso", `Resultado: ${this.state.categoria}`, "success");
  }

  render() {
    return (
      <div  className="conteudo">
      <div  className="box-imc">
      <h3> Questão 1 </h3>
      <h5> Calcular IMC </h5><br></br>

        Peso:{" "}
        <input
          type="text"
          name="peso"
          value={this.state.peso}
          onChange={(e) => this.setState({ peso: e.target.value })}
        />
        Altura:{" "}
        <input
          type="text"
          name="altura"
          value={this.state.altura}
          onChange={(e) => this.setState({ altura: e.target.value })}
        />
        <button class="btn waves-effect waves-light" onClick={this.handleClick.bind(this)}>Calcular</button>
        </div>
      </div>
    );
  }
}
