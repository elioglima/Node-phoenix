const wsf = require('../Rotinas')
const TratativasRetorno = require('../TratativasRetorno')
const libObj = require('../../../../libs/fn_obj')
const config = require('../../../../config');

const ModeloRetorno = {
    Codigo: '',
    Data: '',
    Acordos: [],
    Log:{}
}

const ModeloDadosAcordo = {
    CodigoTitulo: '',
    NumeroTitulo: '',
    CodigoAcordo: '',
    FilialAcordo: '',
    DataAcordo: '',
    StatusAcordo: '',
    CodigoDevedor: '',
    Parcelas: []
}

const ModeloParcelasAcordo = {
    NumeroParcela: '',
    DataVencimento: '',
    ValorParcela: '',
    CodigoParcelaAcordo: '',
    StatusParcelaAcordo: '',
}

module.exports = async (CodTitulo, obj = {}) => {
    
    obj['Metodo'] = 'GetDadosAcordo'

    if (!CodTitulo) {
        return {
            RetornoMetodo: {
                erro: true,
                status: 400,
                response: "Codigo do tituo não informado. (codigo_titulo)"
            }
        }
    }

    let xml = '<tem:GetDadosAcordo>'
    xml += '<tem:pChaveAcesso>' + config.ChaveAcesso + '</tem:pChaveAcesso>'
    xml += '<tem:pCodigoTitulo>' + CodTitulo + '</tem:pCodigoTitulo>'
    xml += '</tem:GetDadosAcordo>'
    xml = await wsf.PreparaXml(xml);
    const TagsSoap = ["soap:Envelope", "soap:Body", "GetDadosAcordoResponse", "GetDadosAcordoResult", "Resultado"]
    let { Erro, Response } = await wsf.PreparaRenotro(TagsSoap, xml, obj)    
    TratativasRetorno(Response, obj)

    if (Response.Erro === true)
        return { RetornoMetodo: Response.Log }
    
    let RetornoMetodo = libObj.Assign(ModeloRetorno)
    RetornoMetodo.Log = Response.Log
    RetornoMetodo.Codigo = Response.Codigo
    RetornoMetodo.Erro = Response.Erro
    RetornoMetodo.Mensagem = Response.Mensagem
    RetornoMetodo.Credor = Response.Credor
    RetornoMetodo.Data = Response.Data
    
    parseDadosAcordo = (DadosAcordo) => {
        
        let DadosAcordoTemp = libObj.Assign(ModeloDadosAcordo)
        DadosAcordoTemp.CodigoTitulo = DadosAcordo.CodigoTitulo
        DadosAcordoTemp.NumeroTitulo = DadosAcordo.NumeroTitulo
        DadosAcordoTemp.CodigoAcordo = DadosAcordo.CodigoAcordo
        DadosAcordoTemp.FilialAcordo = DadosAcordo.FilialAcordo
        DadosAcordoTemp.DataAcordo = DadosAcordo.DataAcordo
        DadosAcordoTemp.StatusAcordo = DadosAcordo.StatusAcordo
        DadosAcordoTemp.CodigoDevedor = DadosAcordo.CodigoDevedor
        
        parseDadosParcelas = (Parcela) => {            
            let ParcelasAcordoTemp = libObj.Assign(ModeloParcelasAcordo)
            ParcelasAcordoTemp.NumeroParcela = Parcela.NumeroParcela
            ParcelasAcordoTemp.DataVencimento = Parcela.DataVencimento
            ParcelasAcordoTemp.ValorParcela = Parcela.ValorParcela
            ParcelasAcordoTemp.CodigoParcelaAcordo = Parcela.CodigoParcelaAcordo
            ParcelasAcordoTemp.StatusParcelaAcordo = Parcela.StatusParcelaAcordo
            DadosAcordoTemp.Parcelas.push(ParcelasAcordoTemp)
        }

        if ((DadosAcordo.ParcelasAcordo) && (Array.isArray(DadosAcordo.ParcelasAcordo))) {
            DadosAcordo.ParcelasAcordo.ParcelaAcordo.forEach(Parcela => parseDadosParcelas(Parcela))
        } else if ((DadosAcordo.ParcelasAcordo) && (!Array.isArray(DadosAcordo.ParcelasAcordo))) {
            
            if ((DadosAcordo.ParcelasAcordo.ParcelaAcordo) && (Array.isArray(DadosAcordo.ParcelasAcordo.ParcelaAcordo))) {
                DadosAcordo.ParcelasAcordo.ParcelaAcordo.forEach(Parcela => parseDadosParcelas(Parcela))                
            } else if ((DadosAcordo.ParcelasAcordo.ParcelaAcordo) && (!Array.isArray(DadosAcordo.ParcelasAcordo.ParcelaAcordo))) {
                parseDadosParcelas(DadosAcordo.ParcelasAcordo.ParcelaAcordo)
            }
        }
      
        return DadosAcordoTemp
    }

    if ((Response.Acordo) && (Array.isArray(Response.Acordo))) {
        Response.Acordo.forEach(Acordo => {
            AcordoTemp = parseDadosAcordo(Acordo.DadosAcordo)
            if (AcordoTemp)
                RetornoMetodo.Acordos.push(AcordoTemp)
        });

    } else if ((Response.Acordo) && (!Array.isArray(Response.Acordo))) {
        AcordoTemp = parseDadosAcordo(Response.Acordo.DadosAcordo)
        if (AcordoTemp)
            RetornoMetodo.Acordos.push(AcordoTemp)
    }
    return { RetornoMetodo }
}