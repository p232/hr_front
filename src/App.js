import React, { Component } from 'react';
import './css/App.css';
import Routes from "./Routes";
import { Navbar } from "react-bootstrap";
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <Navbar fluid collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Scratch</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
        </Navbar>
        <Routes />
      </div>
    );
  }
}

export default App;
