const wsf = require('./Rotinas')
const config = require('../../../config');

module.exports.GetOpcoesPagamentoURA =  async (CodTitulo) => {          
    
    if (!CodTitulo) {
        return {
            erro:true,
            status: 400,
            response:"Codigo do tituo não informado. (codigo_titulo)"
        }
    }

    let retorno = await (async () => {
        let xml = '<tem:GetOpcoesPagamentoURA>'
        xml += '<tem:pChaveAcesso>'+config.ChaveAcesso+'</tem:pChaveAcesso>'
        xml += '<tem:pCodigoTitulo>'+CodTitulo+'</tem:pCodigoTitulo>'
        xml += '</tem:GetOpcoesPagamentoURA>'
        xml = await wsf.PreparaXml(xml);        

        const TagsSoap = ["soap:Envelope", "soap:Body", "GetOpcoesPagamentoURAResponse", "GetOpcoesPagamentoURAResult", "Resultado"]
        return wsf.PreparaRenotro(TagsSoap, xml)
    })();          

    return retorno
}
