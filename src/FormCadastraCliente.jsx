import React, { Component } from "react";

class FormCadastraCliente extends Component {
  constructor(props) {
    super(props);
    this.empresa = "";
    this.responsavel = "";
    this.estado = "";
    this.telefone = "";
    this.email = "";
    //this.inputRef = React.createRef();

    // this.state = {
    //   title: '',
    //   content: '',
    // }
  }

  //   _handleMudancaTitulo(evento) {
  //     evento.stopPropagation();
  //     this.titulo = evento.target.value;
  //   }

  _handleMudancaEmpresa(evento) {
    evento.stopPropagation();
    this.empresa = evento.target.value;
  }

  _handleMudancaResponsavel(evento) {
    evento.stopPropagation();
    this.responsavel = evento.target.value;
  }
  _handleMudancaEstado(evento) {
    evento.stopPropagation();
    this.estado = evento.target.value;
  }
  _handleMudancaTelefone(evento) {
    evento.stopPropagation();
    this.telefone = evento.target.value;
  }
  _handleMudancaEmail(evento) {
    evento.stopPropagation();
    this.email = evento.target.value;
  }

  _criarCliente(evento) {
    evento.preventDefault();
    evento.stopPropagation();
    this.props.criarCliente(
      this.empresa,
      this.responsavel,
      this.estado,
      this.telefone,
      this.email
    );
  }

  render() {
    return (
      <form id="formModal" onSubmit={this._criarCliente.bind(this)}>
        <label htmlFor="empresa">Empresa</label>
        <input
          onChange={this._handleMudancaEmpresa.bind(this)}
          ref={this.inputRef}
          type="text"
          name="empresa"
          id="Empresa"
        />
        <label htmlFor="responsavel">Responsável</label>
        <input
          onChange={this._handleMudancaResponsavel.bind(this)}
          type="text"
          name="responsavel"
          id="Responsavel"
        />
        <label htmlFor="localizacao">Localização</label>
        <select
          onChange={this._handleMudancaEstado.bind(this)}
          name="Estado"
          id="sEstado"
        >
          <option selected value="Localização">
            Estado
          </option>
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
        <input
          onChange={this._handleMudancaTelefone.bind(this)}
          type="tel"
          name="telefone"
          id="Telefone"
        />
        <label htmlFor="email">E-mail</label>
        <input
          onChange={this._handleMudancaEmail.bind(this)}
          type="email"
          name="email"
          id="Email"
        />
        <button id="cadastraCliente" type="submit">
          Cadastrar
        </button>
      </form>
    );
  }
}

export default FormCadastraCliente;
