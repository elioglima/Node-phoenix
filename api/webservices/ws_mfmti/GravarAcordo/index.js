const TratativasRetorno = require('../TratativasRetorno')
const wsf = require('../Rotinas')
const libObj = require('../../../../libs/fn_obj')
const config = require('../../../../config');

const ModeloRetorno = {
    Erro: false,
    Mensagem: '',
    Codigo: '',
    Data: '',
    CodigoAcordo: '',
    Log: {},
}

module.exports = async (pCPF, pCodigoDevedor, pCodigoTitulo, pPlano, pVencimentoPrimeira, pValorPrimeira, obj = {}) => {

    // pCPF, pCodigoDevedor, pCodigoTitulo, pPlano, pVencimentoPrimeira, pValorPrimeira
    obj['Metodo'] = 'GravarAcordo'

    if (!pCPF) {
        return {
            erro: true,
            status: 400,
            response: "Informe. (CodigoAcordo)"
        }

    } else if (!pCodigoDevedor) {
        return {
            erro: true,
            status: 400,
            response: "Informe. (CodigoParcelaAcordo)"
        }

    } else if (!pCodigoTitulo) {
        return {
            erro: true,
            status: 400,
            response: "Informe. (CodigoParcelaAcordo)"
        }
    } else if (!pPlano) {
        return {
            erro: true,
            status: 400,
            response: "Informe. (CodigoParcelaAcordo)"
        }
    } else if (!pVencimentoPrimeira) {
        return {
            erro: true,
            status: 400,
            response: "Codigo da parcela acordo não informado. (CodigoParcelaAcordo)"
        }
    } else if (!pValorPrimeira) {
        return {
            erro: true,
            status: 400,
            response: "Informe (pValorPrimeira)"
        }
    }
    let xml = '<tem:GravarAcordo>'
    xml += '<tem:pChaveAcesso>' + config.ChaveAcesso + '</tem:pChaveAcesso>'
    xml += '<tem:pCPF>' + pCPF + '</tem:pCPF>'
    xml += '<tem:pCodigoDevedor>' + pCodigoDevedor + '</tem:pCodigoDevedor>'
    xml += '<tem:pCodigoTitulo>' + pCodigoTitulo + '</tem:pCodigoTitulo>'
    xml += '<tem:pPlano>' + pPlano + '</tem:pPlano>'
    xml += '<tem:pVencimentoPrimeira>' + pVencimentoPrimeira + '</tem:pVencimentoPrimeira>'
    xml += '<tem:pValorPrimeira>' + pValorPrimeira + '</tem:pValorPrimeira>'
    xml += '</tem:GravarAcordo>'
    xml = await wsf.PreparaXml(xml);

    obj['Metodo'] = 'GravarAcordo'
    const TagsSoap = ["soap:Envelope", "soap:Body", "GravarAcordoResponse", "GravarAcordoResult", "Resultado"]
    let { Erro, Response } = await wsf.PreparaRenotro(TagsSoap, xml, obj)
    if (Erro === true)
        return { RetornoMetodo: Response }

    TratativasRetorno(Response)

    if (Response.Erro === true)
        return { RetornoMetodo: Response.Log }

    let RetornoMetodo = libObj.Assign(ModeloRetorno)
    
    RetornoMetodo.Erro = Response.Erro
    RetornoMetodo.Codigo = Response.Codigo
    RetornoMetodo.Mensagem = Response.Mensagem
    RetornoMetodo.Data = Response.Data
    RetornoMetodo.CodigoAcordo = Response.CodigoAcordo
    RetornoMetodo.Log = Response.Log
    RetornoMetodo['response'] = Response

    return { RetornoMetodo }
}