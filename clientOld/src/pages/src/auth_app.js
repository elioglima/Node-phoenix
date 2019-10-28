import { push } from "connected-react-router"

export const Auth_app = () => dispatch => {
  
  const logado = localStorage.getItem('logado');  
  
  if ((logado === null) || (logado === undefined)) return false
  if (logado.toString().trim().length === 0)  return false

    const request = require('request');
    const base64 = require('base-64');
    const URLS = 'http://localhost:5125/api/acesso/auth'

    var token = require('../../libs/token');

    const v = localStorage.getItem('A1')
    const json_token =  base64.decode(v)
    if (json_token.toString().trim().length > 0) {
      try {       

        const json_parse = JSON.parse(json_token)  
        const res_token = token.decodificar(json_parse)
        if (res_token.Status === 200) {
          request({
            url: URLS,
            method: 'POST',
            json: true,
            body: json_parse,
          }, (err, response, body) => {
        
            try {
        
              if (response.statusCode === 200) {
                dispatch(push('logado'))
              }
        
            } catch (error) {
              console.log(response)
            }
        
          });
          
        }
        
      } catch (error) {
        
      }
    } 
    
}


export const dispChkAuth = () => dispatch => {
  
  const request = require('request');
  const base64 = require('base-64');
  const URLS = 'http://localhost:5125/api/acesso/auth'
  const var_logado = base64.decode(localStorage.getItem('logado'))    
  if ((var_logado === null) || (var_logado === undefined)) {

    localStorage.setItem('logado', '') 
    localStorage.setItem('A1', '')  
    localStorage.setItem('cad', '')  
    dispatch(push('/'))
    return false

  } else if (var_logado.toString().trim().length === 0) {
    localStorage.setItem('logado', '');  
    localStorage.setItem('A1', '');  
    localStorage.setItem('cad', '');  
    dispatch(push('/'))
    return false
  }

  var token = require('../../libs/token');

  const v = localStorage.getItem('A1')
  const json_token =  base64.decode(v)
  if (json_token.toString().trim().length > 0) {
    try {       

      const json_parse = JSON.parse(json_token)  
      const res_token = token.decodificar(json_parse)
      if (res_token.Status === 200) {
        request({
          url: URLS,
          method: 'POST',
          json: true,
          body: json_parse,
        }, (err, response, body) => {
      
          try {
      
            // if (response.statusCode !== 200) {
            //   // deslogar
            //   localStorage.setItem('logado', '');  
            //   localStorage.setItem('A1', '');  
            //   localStorage.setItem('cad', '');  
            //   dispatch(push('/'))
            // }
      
          } catch (error) {
            localStorage.setItem('logado', '');  
            localStorage.setItem('A1', '');  
            localStorage.setItem('cad', '');  
            dispatch(push('/'))
          }
      
        });
        
      }
      
    } catch (error) {
      
    }
  }
} 
  
