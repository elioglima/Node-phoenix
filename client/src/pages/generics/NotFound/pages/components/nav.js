import React, {Component} from "react";
import { connect } from "react-redux";
import { Navbar, Nav, FormControl, Form, Button } from 'react-bootstrap';
import * as Actions from '../../src/actions'
class Objeto extends Component {
  render() {    
    return (  
    <div>      
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#" onClick={e => this.props.logadoInicio(e)}>{this.props.dados.titulo}</Navbar.Brand>

      </Navbar>
      <br />
  </div>
)
}
}


export default connect(null, Actions)(Objeto)
