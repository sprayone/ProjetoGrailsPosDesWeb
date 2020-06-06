import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

class CreateEntrega extends Component {

  constructor() {
    super();
    this.state = {
      cliente: '',
      endereco: '',
      valorReceber: '',
      troco: '',
      frete: '',
      entregador: '',
      loja: '',
      entregadores: [],
      lojas: []
    };
  }
  componentDidMount() {
    axios.get(`http://localhost:8080/entregadores`)
      .then(res => {
        const entregadores = res.data;
        this.setState({ entregadores: res.data });
      })
    axios.get(`http://localhost:8080/loja`)
      .then(res => {
        const lojas = res.data;
        this.setState({ lojas: res.data });
      })
      
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { cliente, endereco, valorReceber, troco, frete, entregador, loja } = this.state;

    axios.post('http://localhost:8080/entrega', { cliente, endereco, valorReceber, troco, frete, entregador, loja })
      .then((result) => {
        this.props.history.push("/")
      });
  }

  render() {
    const { cliente, endereco, valorReceber, troco, frete, entregador, loja } = this.state;
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              Cadastrar entrega
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> Lista de Entregas</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="isbn">Cliente:</label>
                <input type="text" class="form-control" name="cliente" value={cliente} onChange={this.onChange} placeholder="Cliente" />
              </div>
              <div class="form-group">
                <label for="title">Endereço:</label>
                <input type="text" class="form-control" name="endereco" value={endereco} onChange={this.onChange} placeholder="Endereço" />
              </div>
              <div class="form-group">
                <label for="author">Valor Receber:</label>
                <input type="text" class="form-control" name="valorReceber" value={valorReceber} onChange={this.onChange} placeholder="Valor Receber" />
              </div>
              <div class="form-group">
                <label for="published_date">Troco:</label>
                <input type="number" class="form-control" name="troco" value={troco} onChange={this.onChange} placeholder="Troco" />
              </div>
              <div class="form-group">
                <label for="publisher">Frete:</label>
                <input type="text" class="form-control" name="frete" value={frete} onChange={this.onChange} placeholder="Frete" />
              </div>
              <div class="form-group">
              <select name="entregador" onChange={this.onChange}>
                        <option>Selecione o Entregador</option>
                        {this.state.entregadores.map(entregador =>
                        <option value={entregador.id}>
                            {entregador.nome}
                        </option>)
                        }
              </select>
              </div>
              <div class="form-group">
              <select name="loja" onChange={this.onChange}>
                        <option>Selecione a Loja</option>
                        {this.state.lojas.map(loja =>
                        <option value={loja.id}>
                            {loja.nome}
                        </option>)
                        }
              </select>
              </div>
              <button type="submit" class="btn btn-default">Cadastrar</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateEntrega;