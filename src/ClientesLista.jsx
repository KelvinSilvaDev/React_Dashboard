import React, { Component } from "react";
import "./css/ClientesLista.css"

class ClientesLista extends Component {
  render() {
    return (
      <div>
        <table class="tg">
          <thead>
            <tr>
              <th class="tg-9wq8"> <input type="checkbox" name="selectAll" id="selectAll" /> </th>
              <th class="tg-nrix">REG</th>
              <th class="tg-nrix">Empresa</th>
              <th class="tg-nrix">Responsável</th>
              <th class="tg-nrix">Localização</th>
              <th class="tg-nrix">Telefone</th>
              <th class="tg-nrix">E-mail</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="tg-0lax"></td>
              <td class="tg-0lax"></td>
              <td class="tg-0lax"></td>
              <td class="tg-0lax"></td>
              <td class="tg-0lax"></td>
              <td class="tg-0lax"></td>
              <td class="tg-0lax"></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default ClientesLista;
