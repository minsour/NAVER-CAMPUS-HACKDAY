import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import List from './pages/List';
import Order from './pages/Order';
import Header from './components/Header';
// import SideMenu from './components/SideMenu';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {/* <SideMenu /> */}
        <Route exact path="/" component={List} />
        <Route path="/order/:id" component={Order} />
      </div>
    );
  }
}

export default App;