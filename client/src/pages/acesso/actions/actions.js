import { push } from "connected-react-router"
import { Auth_app as Auth } from '../../src/auth_app'
import * as RoutesAction from '../../../routes/routes_actions'

export const dispDocs = (e) => dispatch => { return dispatch(RoutesAction.dispDocs(e)) }
export const Auth_app = ()  => dispatch => { return dispatch(Auth()) }
export const Logar = (parametros) => dispatch => {

  const request = require('request');
  const base64 = require('base-64');

  const URLS = 'http://localhost:5125/api/acesso/logar'

  var token = require('../../../libs/token');

  const jsonToken = {    
    CHVA: token.CHVA(),
    DVS: token.Atdvs(),
    CDE: 1,
    TPI: 6001,
    IDT: '10101010',
    body: parametros
  }

  request({
    url: URLS,
    method: 'POST',
    json: true,
    body: jsonToken,
  }, (err, response, body) => {

    try {
      if (response.statusCode === 200) {
        localStorage.setItem('logado', base64.encode(true));  
        localStorage.setItem('A1', base64.encode(JSON.stringify(response.body.A1)));  
        localStorage.setItem('cad', base64.encode(JSON.stringify(response.body.cad)));  
        dispatch(push('logado'))
      }
      alert(response.body.Response)
    } catch (error) {
      localStorage.setItem('logado', '');  
      localStorage.setItem('A1', '');  
      localStorage.setItem('cad', '');  
    }

  });

}
