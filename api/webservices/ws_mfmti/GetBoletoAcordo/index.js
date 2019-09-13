const libObj = require('../../../../libs/fn_obj')
const config = require('../../../../config');
const TratativasRetorno = require('../TratativasRetorno')
const wsf = require('../Rotinas')

const ModeloBoletoAcordo = {
    LinhaDigitavel: '',
    Valor: '',
    DataVencimento: ''
}

const ModeloRetorno = {
    Codigo: "10",
    Data: "04/09/2019 09:07:57",
    Boletos: []
}


module.exports = async (CodigoParcelaAcordo, CodigoAcordo, obj = {}) => {
    obj['Metodo'] = 'GetBoletoAcordo'

    if (!CodigoAcordo) {
        return {
            erro: true,
            status: 400,
            response: "Codigo do acordo não informado. (CodigoAcordo)"
        }

    } else if (!CodigoParcelaAcordo) {
        return {
            erro: true,
            status: 400,
            response: "Codigo da parcela acordo não informado. (CodigoParcelaAcordo)"
        }
    }


    let xml = '<tem:GetBoletoAcordo>'
    xml += '<tem:pChaveAcesso>' + config.ChaveAcesso + '</tem:pChaveAcesso>'
    xml += '<tem:pCodigoParcelaAcordo>' + CodigoParcelaAcordo + '</tem:pCodigoParcelaAcordo>'
    xml += '<tem:pCodigoAcordo>' + CodigoAcordo + '</tem:pCodigoAcordo>'
    xml += '</tem:GetBoletoAcordo>'
    xml = await wsf.PreparaXml(xml);
    const TagsSoap = ["soap:Envelope", "soap:Body", "GetBoletoAcordoResponse", "GetBoletoAcordoResult", "Resultado"]
    let { Erro, Response } = await wsf.PreparaRenotro(TagsSoap, xml, obj)    
    TratativasRetorno(Response, obj)
    
    let RetornoMetodo = libObj.Assign(ModeloRetorno)    
    RetornoMetodo.Log = Response.Log
    RetornoMetodo.Erro = Response.Erro
    RetornoMetodo.Data = Response.Data
    RetornoMetodo.Codigo = Response.Codigo
    RetornoMetodo.Mensagem = Response.Mensagem

    if (Response.Erro === true)
        return { RetornoMetodo }    
    
    if ((Response.BoletoAcordo) && (Array.isArray(Response.BoletoAcordo))) {
        Response.BoletoAcordo.forEach(Boleto => {
            let BoletoAcordo = libObj.Assign(ModeloBoletoAcordo)
            BoletoAcordo.LinhaDigitavel = Boleto.LinhaDigitavel
            BoletoAcordo.Valor = Boleto.Valor
            BoletoAcordo.DataVencimento = Boleto.DataVencimento
            RetornoMetodo.Boletos.push(BoletoAcordo)
        });
    } else if ((Response.BoletoAcordo) && (!Array.isArray(Response.BoletoAcordo))) {
        let BoletoAcordo = libObj.Assign(ModeloBoletoAcordo)
        let Boleto = Response.BoletoAcordo
        BoletoAcordo.LinhaDigitavel = Boleto.LinhaDigitavel
        BoletoAcordo.Valor = Boleto.Valor
        BoletoAcordo.DataVencimento = Boleto.DataVencimento
        RetornoMetodo.Boletos.push(BoletoAcordo)
    }
    return { RetornoMetodo }

}