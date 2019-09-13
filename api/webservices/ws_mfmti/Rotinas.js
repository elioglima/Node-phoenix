const wsr = require('./Request')
const libJson = require('../../../libs/fn_json');
const libXML = require('../../../libs/fn_xml');

module.exports.PreparaRenotro = async (TagsSoap, xml, obj = {}) => {

    const { erro, response } = await wsr.SendSoap(xml, obj)
    const { body, xmlEnvio, xmlRetorno } = response
    
    if (erro === true) {
        return { 
            Erro:true, 
            Response:response 
        }
    }

    let objJson = libXML.ToJson(body)
    TagsSoap.forEach(TagName => {
        let obj = libJson.GetValue(objJson, TagName)
        if (obj !== null) {
            objJson = obj  
        }   
    });   

    objJson['jsonRetorno'] = JSON.parse(JSON.stringify(objJson))
    objJson['xmlEnvio'] = xmlEnvio
    objJson['xmlRetorno'] = xmlRetorno
    return { Erro:false, Response:objJson }
} 

module.exports.PreparaXml = (body) => {
    let xml = "<soapenv:Envelope xmlns:soapenv='http://schemas.xmlsoap.org/soap/envelope/' xmlns:tem='http://tempuri.org/'>"
    xml += "<soapenv:Header/>"
    xml += "<soapenv:Body>"
    xml += body
    xml += "</soapenv:Body>"
    xml += "</soapenv:Envelope>"
    return xml
}; 