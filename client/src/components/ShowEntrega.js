import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Show extends Component {

  constructor(props) {
    super(props);
    this.state = {
      entrega: {}
    };
  }

  componentDidMount() {
    axios.get('http://localhost:8080/entrega/'+this.props.match.params.id)
      .then(res => {
        this.setState({ entrega: res.data });
        console.log(this.state.entrega);
      });
  }

  delete(id){
    console.log(id);
    axios.delete('http://localhost:8080/entrega/'+id)
      .then((result) => {
        this.props.history.push("/")
      });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              Detalhes da entrega
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> Lista de Entregas</Link></h4>
            <dl>
              <dt>Cliente:</dt>
              <dd>{this.state.entrega.cliente}</dd>
              <dt>Endereço:</dt>
              <dd>{this.state.entrega.endereco}</dd>
              <dt>Valor a Receber:</dt>
              <dd>{this.state.entrega.valorReceber}</dd>
              <dt>Troco:</dt>
              <dd>{this.state.entrega.troco}</dd>
              <dt>Frete:</dt>
              <dd>{this.state.entrega.frete}</dd>
              <dt>Entregador:</dt>
              <dd>{this.state.entrega.entregador}</dd>
              <dt>Loja:</dt>
              <dd>{this.state.entrega.loja}</dd>
            </dl>
            <Link to={`/editentrega/${this.state.entrega.id}`} class="btn btn-success">Editar</Link>&nbsp;
            <button onClick={this.delete.bind(this, this.state.entrega.id)} class="btn btn-danger">Deletar</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Show;