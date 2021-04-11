import React, { Component } from 'react';
import swal from 'sweetalert';

export default class Formulario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "",
      cpf: "",
      salario: "",
      salarioPorExtenso: ""
    };
  }

  handleClick() {
    this.converterSalario();
    this.emitirResposta();
  }

  converterSalario(){

    let state = this.state;
    let salarioPorExtenso="";

    var unidades=["Zero", "Um", "Dois", "Três", "Quatro", "Cinco", "Seis", "Sete", "Oito", "Nove"];
		var especiais=["Dez","Onze", "Doze", "Treze", "Catorze", "Quinze", "Dezeseis", "Dezsete", "Dezoito", "Deznove"]; 
		var dezenas=["Vinte", "Trinta", "Quarenta", "Cinquenta", "Sessenta", "Setenta", "Oitenta", "Noventa"];
    var centenas=["Cem", "Duzentos", "Trezentos", "Quatrocentos", "Quinhetos", "Seiscentos","Setescentos","Oitocentos", "Novecentos"];
   
    if(state.salario.length === 1) {
      salarioPorExtenso = unidades[parseInt(state.salario[0])];
    }	

    else if(state.salario.length === 2) {

      if((state.salario[0]=='1') && (state.salario[1]=='0'||state.salario[1]=='1'||state.salario[1]=='2'||state.salario[1]=='3'||state.salario[1]=='4'||state.salario[1]=='5'
         ||state.salario[1]=='6'||state.salario[1]=='7'||state.salario[1]=='8'||state.salario[1]=='9')) {
          salarioPorExtenso = especiais[parseInt(state.salario[1])];
			}

			else if((state.salario[0]=='2'||state.salario[0]=='3'||state.salario[0]=='4'||state.salario[0]=='5'||state.salario[0]=='6'||state.salario[0]=='7'||state.salario[0]=='8'||state.salario[0]=='9') && state.salario[1]=='0') {
        salarioPorExtenso = dezenas[parseInt(state.salario[0]-2)];
			}

			else {
        salarioPorExtenso = dezenas[parseInt(state.salario[0]-2)]+ " e "+unidades[parseInt(state.salario[1])];
			}
    }
    
    else if (state.salario.length === 3) {

			if ((state.salario[0]=='1'||state.salario[0]=='2'||state.salario[0]=='3'||state.salario[0]=='4'||state.salario[0]=='5'||state.salario[0]=='6'||state.salario[0]=='7'||state.salario[0]=='8'||state.salario[0]=='9') && (state.salario[1]=='0' && state.salario[2]=='0')) {
        salarioPorExtenso = (centenas[parseInt(state.salario[0]-1)])
			}

			else if ((state.salario[0]=='2'||state.salario[0]=='3'||state.salario[0]=='4'||state.salario[0]=='5'||state.salario[0]=='6'||state.salario[0]=='7'||state.salario[0]=='8'||state.salario[0]=='9') && (state.salario[1]=='1') && ((state.salario[2]=='1'||state.salario[2]=='2'||state.salario[2]=='3'||state.salario[2]=='4'||state.salario[2]=='5'||state.salario[2]=='6'||state.salario[2]=='7'||state.salario[2]=='8'||state.salario[2]=='9'))) {
			 salarioPorExtenso =(centenas[parseInt(state.salario[0]-1)]+" e "+especiais[parseInt(state.salario[2])])
			}

			else if ((state.salario[0]=='2'||state.salario[0]=='3'||state.salario[0]=='4'||state.salario[0]=='5'||state.salario[0]=='6'||state.salario[0]=='7'||state.salario[0]=='8'||state.salario[0]=='9') && (state.salario[1]!='1')) {
			 salarioPorExtenso =(centenas[parseInt(state.salario[0]-1)]+" e "+dezenas[parseInt(state.salario[1]-2)]+" e "+unidades[parseInt(state.salario[2])]);
      }
      
			else if ((state.salario[0]=='1') && (state.salario[1]=='1') && (state.salario[2]=='1'||state.salario[2]=='2'||state.salario[2]=='3'||state.salario[2]=='4'||state.salario[2]=='5'||state.salario[2]=='6'||state.salario[2]=='7'||state.salario[2]=='8'||state.salario[2]=='9')) {
			 salarioPorExtenso =("Cento e "+especiais[parseInt(state.salario[2])])
			}

			else if ((state.salario[0]=='1') && (state.salario[1]!='1') && (state.salario[2]!='0')) {
			 salarioPorExtenso =("Cento e "+dezenas[parseInt(state.salario[1]-2)]+" e "+unidades[parseInt(state.salario[2])]);
			}
		}

    state.salarioPorExtenso = salarioPorExtenso;
    this.setState(state);	
  }

  emitirResposta()
  {
    swal("Processado com sucesso", `Salário: ${this.state.salarioPorExtenso}\n CPF: ${this.state.cpf}\n Nome: ${this.state.nome}`, "success");
  }
    render() {
    return (
      <div  className="conteudo">
      <div  className="box">
      <h3> Questão 5 </h3>
      <h5> Salário por extenso </h5><br></br>

        Nome:{" "}
        <input
          type="text"
          name="nome"
          value={this.state.nome}
          onChange={(e) => this.setState({ nome: e.target.value })}
        />
        CPF:{" "}
        <input
          type="text"
          name="cpf"
          value={this.state.cpf}
          onChange={(e) => this.setState({ cpf: e.target.value })}
        />
         Salario:{" "}
        <input
          type="text"
          name="salario"
          value={this.state.salario}
          onChange={(e) => this.setState({ salario: e.target.value })}
        />
        <button class="btn waves-effect waves-light" onClick={this.handleClick.bind(this)}>Apresentar</button>        
        </div>
      </div>
    );
  }
}

