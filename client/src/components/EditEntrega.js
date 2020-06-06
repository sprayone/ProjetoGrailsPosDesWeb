import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Edit extends Component {

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

  onChange = (e) => {
    const state = this.state.entrega
    state[e.target.name] = e.target.value;
    this.setState({entrega:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { cliente, endereco, valorReceber, troco, frete, entregador, loja } = this.state.entrega;

    axios.put('http://localhost:8080/entrega/'+this.props.match.params.id, { cliente, endereco, valorReceber, troco, frete, entregador, loja })
      .then((result) => {
        this.props.history.push("/showentrega/"+this.props.match.params.id)
      });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              Editar Entrega
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to={`/showentrega/${this.state.entrega.id}`}><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span> Customer List</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="isbn">Cliente:</label>
                <input type="text" class="form-control" name="cliente" value={this.state.entrega.cliente} onChange={this.onChange} placeholder="Cliente" />
              </div>
              <div class="form-group">
                <label for="title">Endereço:</label>
                <input type="text" class="form-control" name="endereco" value={this.state.entrega.endereco} onChange={this.onChange} placeholder="Endereço" />
              </div>
              <div class="form-group">
                <label for="author">Valor Receber:</label>
                <input type="text" class="form-control" name="valorReceber" value={this.state.entrega.valorReceber} onChange={this.onChange} placeholder="Valor Receber" />
              </div>
              <div class="form-group">
                <label for="published_date">Troco:</label>
                <input type="number" class="form-control" name="troco" value={this.state.entrega.troco} onChange={this.onChange} placeholder="Troco" />
              </div>
              <div class="form-group">
                <label for="publisher">Frete:</label>
                <input type="tetx" class="form-control" name="frete" value={this.state.entrega.frete} onChange={this.onChange} placeholder="Frete" />
              </div>
              <div class="form-group">
                <label for="publisher">Entregador:</label>
                <input type="tetx" class="form-control" name="entregador" value={this.state.entrega.entregador} onChange={this.onChange} placeholder="Entregador" />
              </div>
              <div class="form-group">
                <label for="publisher">Loja:</label>
                <input type="tetx" class="form-control" name="loja" value={this.state.entrega.loja} onChange={this.onChange} placeholder="Loja" />
              </div>
              <button type="submit" class="btn btn-default">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Edit;