import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Lista from "./pages/Lista";
import Editar from "./pages/Editar";
import "./index.css";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <header>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-primary px-0">
              <div className="container">
                <div className="row">
                  <div className="col-6">
                    <a className="navbar-brand mr-5 d-inline-block text-uppercase" href="#">
                      <strong>Contatos</strong>
                    </a>
                  </div>
                  <div className="col-6">
                    <ul className="navbar-nav ml-auto">
                      <li className="nav-item mr-3">
                        <NavLink exact to="/" className="nav-link">
                          <i className="icon-list mr-1" style={{}} />
                          <span className="d-none d-sm-inline-block">Lista</span>
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to="/incluir" className="nav-link">
                          <i className="icon-user-plus mr-1" />
                          <span className="d-none d-sm-inline-block">Incluir</span>
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </nav>
          </header>

          <main role="main" className="container">
            <Route exact path="/" component={Lista} />
            <Route path="/incluir" component={Editar} />
            <Route path="/editar/:contatoId" component={Editar} />
          </main>

          <footer className="footer">
            <div className="container">
              <span className="text-muted"> 
              <i className="icon-mail mr-1"></i>
              thiagomdo1@gmail.com
              </span>
            </div>
          </footer>
        </div>
      </HashRouter>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById("root"));
