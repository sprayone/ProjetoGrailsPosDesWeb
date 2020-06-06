import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      entregas: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:8080/entrega')
      .then(res => {
        this.setState({ entregas: res.data });
        console.log(this.state.entregas);
      });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              Lista de Entrega
            </h3>
          </div>
          <div class="panel-body">
            <table class="table table-stripe">
              <thead>
                <tr>
                  <th>Cliente</th>
                  <th>Endereço</th>
                </tr>
              </thead>
              <tbody>
                {this.state.entregas.map(entrega =>
                  <tr>
                    <td><Link to={`/showentrega/${entrega.id}`}>{entrega.cliente}</Link></td>
                    <td>{entrega.endereco}</td>
                  </tr>
                )}
              </tbody>
            </table>

          </div>
        </div>
            <h4><Link to="/createentrega"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Cadastrar Entrega</Link></h4>
            <h4><Link to="/createentregador"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Cadastrar Entregador</Link></h4>
            <h4><Link to="/createloja"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Cadastrar Loja</Link></h4>
      </div>
    );
  }
}

export default App;