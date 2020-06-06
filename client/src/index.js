import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import './css/App.css';
import './css/grails.css';
import './css/main.css';
import Edit from './components/Edit';
import EditEntrega from './components/EditEntrega';
import CreateEntrega from './components/CreateEntrega';
import CreateEntregador from './components/CreateEntregador';
import CreateLoja from './components/CreateLoja';
import Show from './components/Show';
import ShowEntrega from './components/ShowEntrega';

ReactDOM.render(
  <Router>
      <div>
        <Route exact path='/' component={App} />
        <Route path='/edit/:id' component={Edit} />
        <Route path='/editentrega/:id' component={EditEntrega} />
        <Route path='/createentrega' component={CreateEntrega} />
        <Route path='/createentregador' component={CreateEntregador} />
        <Route path='/createloja' component={CreateLoja} />
        <Route path='/show/:id' component={Show} />
        <Route path='/showentrega/:id' component={ShowEntrega} />
      </div>
  </Router>,
  document.getElementById('root')
);