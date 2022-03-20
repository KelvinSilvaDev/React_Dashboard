import React, { Component } from "react";
import Header from "./Header";
import "./css/Clientes.css";
import ClientesLista from "./ClientesLista";
import Modal from './Modal.js';



function cadastraCliente() {}

class Clientes extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal = () => {
      this.setState({ show: true });
  }
  hideModal = () => {
      this.setState({ show: false });
  }

  render() {
    return (
      <div className="all_wrapper">
        <Header tela="Clientes" />
        <Modal show={this.state.show} handleClose={this.hideModal}>
          <form id="formModal" action="">
              <label htmlFor="empresa">Empresa</label>
              <input type="text" name="empresa" id="Empresa" />
              <label htmlFor="responsavel">Responsável</label>
              <input type="text" name="responsavel" id="Responsavel" />
              <label htmlFor="Estado">Localização</label>
              <select name="Estado" id="sEstado">
                  <option selected value="Localização">Estado</option>
                  <option value="AC">AC</option>
                  <option value="AL">AL</option>
                  <option value="AP">AP</option>
                  <option value="AM">AM</option>
                  <option value="BA">BA</option>
                  <option value="CE">CE</option>
                  <option value="ES">ES</option>
                  <option value="GO">GO</option>
                  <option value="MA">MA</option>
                  <option value="MT">MT</option>
                  <option value="MS">MS</option>
                  <option value="MG">MG</option>
                  <option value="PA">PA</option>
                  <option value="PB">PB</option>
                  <option value="PR">PR</option>
                  <option value="PE">PE</option>
                  <option value="PI">PI</option>
                  <option value="RJ">RJ</option>
                  <option value="RN">RN</option>
                  <option value="RS">RS</option>
                  <option value="RO">RO</option>
                  <option value="RR">RR</option>
                  <option value="SC">SC</option>
                  <option value="SP">SP</option>
                  <option value="SE">SE</option>
                  <option value="TO">TO</option>
                  <option value="DF">DF</option>
              </select>
              <label htmlFor="telefone">Tel.:</label>
              <input type="tel" name="telefone" id="Telefone" />
              <label htmlFor="email">E-mail</label>
              <input type="email" name="email" id="Email" />
              <button id="cadastraCliente" type="submit">Cadastrar</button>
          </form>
        </Modal>
        <div className="clientes_wrapp">
          <h2 className="clienteType">Empresas</h2>
          <div className="controlsCliente">
            <h6>Filtro</h6>
            <button onClick={this.showModal}>+ Add Cliente</button>
          </div>
          <ClientesLista />
        </div>
      </div>
    );
  }
}

export default Clientes;
