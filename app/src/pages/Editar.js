import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import api from "./editar/Api";
import masks from "../utils/Masks";
import "../utils/include/bootstrap";
import "../utils/include/modals";

class Editar extends Component {
  constructor(props) {
    super(props);
    this.match = props.match;
    this.state = { contato: null, redirect: false };
    this.isUpdate = this.match.params.contatoId ? true : false;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    // Update
    if (this.isUpdate) {
      api.readContato(this.match.params.contatoId).then(res => {
        if (res.data) {
          this.setState({ contato: res.data });
        }
      });
    }
    // Create
    else {
      let contato = {
        nome: "",
        email: "",
        telefone: "",
        celular: ""
      };
      this.setState({ contato });
    }
  }

  componentDidMount() {
    setTimeout(() => {
      masks.apply();
    }, 1000);
  }

  handleSubmit(event) {
    event.preventDefault();
    let contato = this.state.contato;

    if (!contato.nome) {
      window.modals.alert.show("Por favor, preencha o nome.");
      return false;
    }
    const data = contato;
    // Update
    if (this.isUpdate) {
      api
        .updateContato(contato.id, data)
        .then(res => {
          if (res.data) {
            contato = res.data;
            this.setState({ contato, redirect: true });
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
    // Create
    else {
      api
        .createContato(data)
        .then(res => {
          if (res.data) {
            contato = res.data;
            this.setState({ contato, redirect: true });
          }
          // eslint-disable-next-line
          <Redirect to="/lista" />;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }

  handleInputChange(event) {
    let contato = this.state.contato;
    contato[event.target.id] = event.target.value;
    this.setState({ contato });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    } else if (this.state.contato) {
      return (
        <div>
          <h2>{this.isUpdate ? "Editar" : "Incluir"} contato</h2>
          <form onSubmit={event => this.handleSubmit(event)}>
            <div className="form-group row">
              <div className="col-sm-6">
                <label htmlFor="nome">Nome</label>
                <input
                  type="text"
                  className="form-control mb-3"
                  name="nome"
                  id="nome"
                  value={this.state.contato.nome || ""}
                  onChange={event => this.handleInputChange(event)}
                />
              </div>
              <div className="col-sm-6">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  value={this.state.contato.email || ""}
                  onChange={event => this.handleInputChange(event)}
                />
              </div>
            </div>
            <div className="form-group row">
              <div className="col-sm-6">
                <label htmlFor="telefone">Telefone</label>
                <input
                  type="text"
                  className="form-control mb-3 imask-phone"
                  name="telefone"
                  id="telefone"
                  value={this.state.contato.telefone || ""}
                  onChange={event => this.handleInputChange(event)}
                />
              </div>
              <div className="col-sm-6">
                <label htmlFor="celular">Celular</label>
                <input
                  type="text"
                  className="form-control imask-phone"
                  name="celular"
                  id="celular"
                  value={this.state.contato.celular || ""}
                  onChange={event => this.handleInputChange(event)}
                />
              </div>
            </div>
            <div className="form-group mt-2">
              <button type="submit" className="btn btn-primary">
                Salvar
              </button>
              <Link className="btn btn-secondary ml-2" to="/">
                Voltar
              </Link>
            </div>
          </form>
        </div>
      );
    } else {
      return (
        <div>
          <h2>{this.isUpdate ? "Editar" : "Incluir"} contato</h2>
          <i className="spinner"></i>
        </div>
      );
    }
  }
}

export default Editar;
