import React, { Component } from "react";
import { Link } from "react-router-dom";
import api from "./lista/Api";
import "./lista/Lista.css";
import "../utils/include/bootstrap";
import "../utils/include/modals";

const Row = ({ contato, handleDelete }) => {
  return (
    <tr>
      <th>{contato.nome}</th>
      <td>{contato.email}</td>
      <td>{contato.telefone}</td>
      <td>{contato.celular}</td>
      <td className="text-right">
        <Link className="btn btn-primary btn-sm" to={"/editar/" + contato.id}>
          <i className="icon-edit" />
        </Link>
        <button
          type="button"
          className="btn btn-secondary btn-sm ml-2"
          onClick={() => handleDelete(contato)}
        >
          <i className="icon-trash-2" />
        </button>
      </td>
    </tr>
  );
};

class Lista extends Component {
  constructor(props) {
    super(props);
    this.match = props.match;
    this.state = { contatos: null };
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    api.readContatos().then(res => {
      if (res.data) {
        this.setState({ contatos: res.data });
      }
    });
  }

  handleClick(id) {
    this.props.history.push("/contatos/" + id);
  }

  handleDelete(contato) {
    window.modals.confirm.show(
      `Deseja excluir permanentemente <strong class="d-inlin-block">${contato.nome}</strong>?`,
      () => {
        api.deleteContato(contato.id).then(res => {
          let contatos = this.state.contatos.filter(item => {
            return item.id !== contato.id;
          });
          this.setState({ contatos });
        });
      }
    );
  }

  render() {
    const rows = this.state.contatos
      ? this.state.contatos.map((contato, i) => {
          return (
            <Row
              key={"row" + i}
              contato={contato}
              handleDelete={this.handleDelete}
            />
          );
        })
      : null;
    if (rows && rows.length > 0) {
      return (
        <div className="lista">
          <h2>Lista de contatos</h2>
          <table className="table table-hover lista-contatos">
            <tbody>{rows}</tbody>
          </table>
        </div>
      );
    } else {
      const loading = <script>modals.loading.show();</script>;
      return (
        <div className="lista">
          <h2>Lista de contatos</h2>
          <i className="spinner" />
        </div>
      );
    }
  }
}

export default Lista;
