import React, { Component } from 'react';
import Layout from './HOC/Layout/Layout';
// import './App
import BurgerBuilder from './containers/burgerbuilder/burgerbuilder';


class App extends Component {
  render(){
  return (
    <div className="burgerContent">
      <Layout>
        <BurgerBuilder />
      </Layout>
    </div>
  );}
}

export default App;
