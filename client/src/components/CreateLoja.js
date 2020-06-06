import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

class CreateLoja extends Component {

  constructor() {
    super();
    this.state = {
      nome: '',
      telefone: '',
      email: '',
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { nome, telefone, email } = this.state;

    axios.post('http://localhost:8080/loja', { nome, telefone, email })
      .then((result) => {
        this.props.history.push("/")
      });
  }

  render() {
    const { nome, telefone, email } = this.state;
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              Cadastrar Loja
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> Lista de Entregas</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="isbn">Nome:</label>
                <input type="text" class="form-control" name="nome" value={nome} onChange={this.onChange} placeholder="Nome" />
              </div>
              <div class="form-group">
                <label for="title">Telefone:</label>
                <input type="text" class="form-control" name="telefone" value={telefone} onChange={this.onChange} placeholder="Telefone" />
              </div>
              <div class="form-group">
                <label for="author">Email:</label>
                <input type="text" class="form-control" name="email" value={email} onChange={this.onChange} placeholder="Email" />
              </div>
              <button type="submit" class="btn btn-default">Cadastrar</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateLoja;