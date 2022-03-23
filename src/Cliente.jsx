import React, { Component } from "react";
import "./css/Clientes.css"

class Cliente extends Component {
  render() {
    return (
      <>
        <td class="tg-0lax"></td>
        <td class="tg-0lax">{this.props.reg}</td>
        <td class="tg-0lax">{this.props.empresa}</td>
        <td class="tg-0lax">{this.props.responsavel}</td>
        <td class="tg-0lax">{this.props.localizacao}</td>
        <td class="tg-0lax">{this.props.telefone}</td>
        <td class="tg-0lax">{this.props.email}</td>
      </>
    );
  }
}

export default Cliente;
