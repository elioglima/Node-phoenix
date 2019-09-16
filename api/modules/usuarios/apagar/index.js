const Request = require('./Request')
const Response = require('./Response')

module.exports = (req, res) => {   
  Request(req.body).then(dados = async (Dados) =>  {
    res.status(200).json(await Response(Dados.Response))        
  }).catch(dados => { 
    res.status(200).json(dados) 
  })        
}