import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import List from './pages/List';
import Order from './pages/Order';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.css'
import SideMenu from './components/SideMenu';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="App-body-wrapper">
            <SideMenu />
            <div className="App-body">
              <Route exact path="/" component={List} />
              <Route path="/order/:id" component={Order} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;