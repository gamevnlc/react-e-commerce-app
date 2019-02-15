import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import { Container, Row, Col } from 'reactstrap'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIgloo } from '@fortawesome/free-solid-svg-icons'

library.add(faIgloo);

class App extends Component {
  render() {
    return (
        <React.Fragment>
          <h3>Hello from App</h3>
        </React.Fragment>
    );
  }
}

export default App;
