import { push } from "connected-react-router"

export const RAPI = (uri, params) => {
    
    return new Promise(
      
      function(resolve, reject) { 
        
        const URLS = 'http://localhost:2000'+'/api/'+uri
        const request = require('request');
        const base64 = require('base-64');
        
        let retorno = {
            Status:0,
            Response:'',
            body:{}
        }

        try {         
              const options = {
                url: URLS,
                method: 'POST',                
                headers: {
                  'Content-Type': 'application/json',
                  'Cache-Control': 'no-cache',
                  Accept: '*/*',
                  'User-Agent': 'PostmanRuntime/7.15.2',
                  "BaxEnd-Token":process.env.REACT_APP_KPP
                },
                json:true,
                body:params,
              }

              request(options, (err, response, body) => {
                try {
                  if (response.statusCode !== 200) {                
                    retorno.Status = response.statusCode 
                    retorno.Response = response.statusMessage
                    reject(retorno)
                  }
                
                  retorno.Status = response.statusCode 
                  retorno.Response = response.statusMessage
                  retorno.body = body
                  resolve(retorno)
        
                } catch (error) {
                  retorno.Status = 500 
                  retorno.Response = error    
                  reject(retorno)
                }         
              });    

          } catch (error) {

            retorno.Status = 500 
            retorno.Response = error    
            reject(retorno)
          }

      })
  } 