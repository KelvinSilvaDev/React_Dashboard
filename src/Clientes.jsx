import React, { Component } from "react";
import Header from "./Header";
import "./css/Clientes.css";
import ClientesLista from "./ClientesLista";
import Modal from "./Modal.js";
import FormCadastraCliente from "./FormCadastraCliente";

// function cadastraCliente() {}

class Clientes extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      clientes: [],
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal = () => {
    this.setState({ show: true });
  };
  hideModal = () => {
    this.setState({ show: false });
  };

  criarCliente(empresa, responsavel, localizacao, telefone, email) {
    // console.log(`Nova Nota Criada: ${titulo} ${texto}`)
    const novoCliente = { empresa, responsavel, localizacao, telefone, email };
    const novoArrayClientes = [...this.state.clientes, novoCliente];
    const novoEstado = {
      clientes: novoArrayClientes,
    };
    // console.log(this.notas.length)
    this.setState(novoEstado);
  }

  render() {
    return (
      <div className="all_wrapper">
        <Header tela="Clientes" />
        <Modal show={this.state.show} handleClose={this.hideModal}>
          <FormCadastraCliente criarCliente={this.criarCliente.bind(this)} />
        </Modal>
        <div className="clientes_wrapp">
          <h2 className="clienteType">Empresas</h2>
          <div className="controlsCliente">
            <h6>Filtro</h6>
            <button onClick={this.showModal}>+ Add Cliente</button>
          </div>
          <table className="tg">
            <thead>
              <tr>
                <th className="tg-9wq8">
                  {" "}
                  <input type="checkbox" name="selectAll" id="selectAll" />{" "}
                </th>
                <th className="tg-nrix">REG</th>
                <th className="tg-nrix">Empresa</th>
                <th className="tg-nrix">Responsável</th>
                <th className="tg-nrix">Localização</th>
                <th className="tg-nrix">Telefone</th>
                <th className="tg-nrix">E-mail</th>
              </tr>
            </thead>
            <tbody>
              
                <ClientesLista clientes={this.state.clientes} />
              
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Clientes;
