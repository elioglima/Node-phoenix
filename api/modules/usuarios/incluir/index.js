const Request = require('./Request')
const Response = require('./Response')

module.exports = (req, res) => {   
  Request(req.body).then(dados = async (dados) =>  {
    res.status(200).json(await Response(dados.response))        
  }).catch(dados => { 
    res.status(400).json(dados) 
  })        
}