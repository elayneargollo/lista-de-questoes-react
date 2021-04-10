import React, { Component } from 'react';

export default class ContaRestaurante extends Component {

  constructor(props) {
    super(props);
    this.state = {
      gastoTotalMesa: 0,
      numeroDePessoasSentadas: 0,
      porcentualPagoGorjeta: 0,
      totalGeral: "",
      totalPorPessoa: "",
    };
  }

  emitirNota() {
    let state = this.state;
    
    let totalGeral = Number(state.gastoTotalMesa) + Number(state.gastoTotalMesa * (state.porcentualPagoGorjeta/100));
    state.totalGeral = totalGeral;

    let totalPorPessoa =  totalGeral/state.numeroDePessoasSentadas;
    state.totalPorPessoa = totalPorPessoa;

    this.setState(state);
  }

  render() {
    return (
      <div className="restaurante">
      <h1>Restaurante</h1>

      Gasto total da mesa:{" "}
        <input
          type="text"
          name="gastoTotalMesa"
          value={this.state.gastoTotalMesa}
          onChange={(e) => this.setState({ gastoTotalMesa: e.target.value })}
        />

        Número de pessoas sentadas:{" "}
        <input
          type="text"
          name="numeroDePessoasSentadas"
          value={this.state.numeroDePessoasSentadas}
          onChange={(e) => this.setState({ numeroDePessoasSentadas: e.target.value })}
        />

        Porcentagem gorjeta garçom:{" "}
        <input
          type="text"
          name="porcentualPagoGorjeta"
          value={this.state.porcentualPagoGorjeta}
          onChange={(e) => this.setState({ porcentualPagoGorjeta: e.target.value })}
        />

        <button onClick={this.emitirNota.bind(this)}>Emitir Nota</button>
        <br />
        <h6>Total a ser pago: R$ {this.state.totalGeral}</h6>
        <h6>Valor por pessoa: R$ {this.state.totalPorPessoa}</h6>

      </div>
    );
  }
}
