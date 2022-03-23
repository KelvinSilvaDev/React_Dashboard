import React, { Component } from "react";
import Cliente from "./Cliente";
import "./css/ClientesLista.css";

class ClientesLista extends Component {
  render() {
    return (
      <>
        {this.props.clientes.map((cliente, index, categoria) => {
          // categoria = ["Trabalho", "Estudos", "Igreja"]
          return (
            <>
              {/* <div><h2>{categoria}</h2></div> */}

              <tr>
              <Cliente empresa={cliente.empresa} responsavel={cliente.responsavel} localizacao={cliente.localizacao} telefone={cliente.telefone} email={cliente.email}/>
              </tr>
            </>
          );
        })}
      </>
    );
  }
}

export default ClientesLista;
