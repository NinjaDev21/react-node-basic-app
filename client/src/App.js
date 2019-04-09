import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Customers from './components/customers';
// import { MDBDataTable } from 'mdbreact';
import { MDBBtn } from "mdbreact";


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Express Starter</h1>
        </header>

          <Fragment>
              <MDBBtn color="primary">Primary</MDBBtn>
              <MDBBtn>Default</MDBBtn>
              <MDBBtn color="secondary">Secondary</MDBBtn>
              <MDBBtn color="success">Success</MDBBtn>
              <MDBBtn color="info">Info</MDBBtn>
              <MDBBtn color="warning">Warning</MDBBtn>
              <MDBBtn color="danger">Danger</MDBBtn>


              <MDBBtn color="pink">Pink</MDBBtn>

          </Fragment>


        <Customers />
      </div>
    );
  }
}

export default App;
