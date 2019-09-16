import React, {Component} from "react";
import { connect } from "react-redux";
import * as Actions from "./actions/actions";
import '../css/styles.css';
import BannerContato from '../components/banner_contato/'
import MenuOff from '../components/menu-off/'
import QuemSomos from '../components/quem-somos'
import * as config from '../../config'

class Objeto extends Component {
  
  state = {
    name:'',
    pass:'' 
  }

  onSubmit = e => {
    e.preventDefault();
    var parametros = {
      N: this.state.name,
      P: this.state.pass,
    }
    this.props.Logar(parametros)    
  }  

  render() {

    this.props.Auth_app()    
    return (
      <div> 
        <BannerContato />      
        <MenuOff {...this.props} label={config.app.titulo} />
                    
        <div className="bannerss" ></div>
        {/* <div className="col-50">
              <input type="email" placeholder="Enter email" value={base64.decode(this.state.name)} onChange={e => this.setState({name: base64.encode(e.target.value)})} /> 
              <input type="password" className="mr-sm-2" size="sm" placeholder="Password" value={base64.decode(this.state.pass)} onChange={e => this.setState({pass: base64.encode(e.target.value)})} />
              <button variant="success" size="sm" type="button" onClick={(e) => this.onSubmit(e)}>Entrar</button>          
        </div> */}

        <QuemSomos />


      </div>
      );
      }
      }

export default connect(null,Actions)(Objeto);
