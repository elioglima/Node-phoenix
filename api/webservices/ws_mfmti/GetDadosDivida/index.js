const TratativasRetorno = require('../TratativasRetorno')
const wsf = require('../Rotinas')
const libsObj = require('../../../../libs/fn_obj')
const config = require('../../../../config');
const ParseDivida = require('./ParseDivida')
const ParseAcordo = require('./ParseAcordo')


const ModelDivida = {
    Codigo: "",
    CodCredor: "",
    NomCredor: "",
    CentralAtendimento: "",
    CpfCnpj: "",
    Contrato: "",
    Descricao: "",
    ValorPrincipal: "",
    Vencimento: "",
    Marca: "",
    Prestacao: [],
}

const ModelPrestacao = {
    Id: "",
    Descricao: "",
    DataVencimento: "",
    MesRefeferencia: "",
    TaxaAdministrativa: "0,00",
    Juros: "0,00",
    Multa: "0,00",
    Desconto: "0,00",
    ValorPrincipal: "0,00",
    ValorPago: "0,00",
    NossoNumero: "",
    Marca: "",
    Validade: "",
    PagamentoPorCartaoCredito: false,
    CodigoFIDIC: null,
    Imprimir: false,
    Reimpressao: false,
    AcordoVigente: false,
    ParcelaAcordo: 0,
    RetornoTexto: "",
}

const ModeloRetorno = {
    Codigo: '',
    Data: '',
    Divida: [],
    Acordo: [],
    Logs: {}
}
const ModeloDadosDivida = {
    NumeroTitulo: '',
    CodigoDevedor: '',
    CodigoTitulo: '',
    Produto: '',
    Parcelas: []
}

const ModeloDadosDividaParcela = {
    CodigoParcela: '',
    DescricaoDaParcela: '',
    Vencimento: '',
    Valor: ''
}



module.exports = async (CodigoDevedor, obj = {}) => {
    
    obj['Metodo'] = 'GetDadosDivida'

    if (!CodigoDevedor) {
        return {
            erro: true,
            status: 400,
            response: "Codigo do Titulo não informado. (CodigoTitulo)"
        }
    }

    let xml = '<tem:GetDadosDivida>'
    xml += '<tem:pChaveAcesso>' + config.ChaveAcesso + '</tem:pChaveAcesso>'
    xml += '<tem:pCodigoDevedor>' + CodigoDevedor + '</tem:pCodigoDevedor>'
    xml += '</tem:GetDadosDivida>'
    xml = wsf.PreparaXml(xml);

    const TagsSoap = ["soap:Envelope", "soap:Body", "GetDadosDividaResponse", "GetDadosDividaResult", "Resultado"]
    let { Erro, Response } = await wsf.PreparaRenotro(TagsSoap, xml, obj)    
    let RetornoMetodo = libsObj.Assign(ModeloRetorno)        
    TratativasRetorno(Response, obj)

    RetornoMetodo.Logs = [Response.Log]
    RetornoMetodo.Codigo = Response.Codigo
    RetornoMetodo.Erro = Response.Erro
    RetornoMetodo.Mensagem = Response.Mensagem

    if (Response.Erro === true) {
        if (Response.Codigo === '30') {
            RetornoMetodo.ErrosPossiveis = []
            RetornoMetodo.ErrosPossiveis.push('CodClien informado pode estar errado.')
        }
        return { RetornoMetodo }
    }

    if (Response.Divida) {
        if (Array.isArray(Response.Divida)) {
            Response.Divida.forEach(DadosDivida => {
                await(async (DadosDivida) => {
                    let { Divida } = await ParseDivida(DadosDivida)
                    if (Divida)
                        RetornoMetodo.Divida.push(Divida)
                })(DadosDivida)
            });
        } else if (Response.Divida.DadosDivida) {
            if (Array.isArray(Response.Divida.DadosDivida)) {
                for (let iDivida = 0; iDivida < Response.Divida.DadosDivida.length; iDivida++) {
                    await (async (DadosDivida) => {
                        let { Divida } = await ParseDivida(DadosDivida)
                        if (Divida)
                            RetornoMetodo.Divida.push(Divida)
                    })(Response.Divida.DadosDivida[iDivida])
                }
            } else {
                await (async (DadosDivida) => {
                    let { Divida } = await ParseDivida(DadosDivida)
                    if (Divida)
                        RetornoMetodo.Divida.push(Divida)
                })(Response.Divida.DadosDivida)
            }
        }
    }

    if (Response.Acordo) {
        if (Array.isArray(Response.Acordo)) {
            Response.Acordo.forEach(DadosAcordo => {
                await(async (DadosAcordo) => {
                    let { Acordo } = await ParseAcordo(DadosAcordo)
                    if (Acordo)
                        RetornoMetodo.Acordo.push(Acordo)
                })(DadosAcordo)
            });
        } else if (Response.Acordo.DadosAcordo) {
            if (Array.isArray(Response.Acordo.DadosAcordo)) {
                for (let iAcordo = 0; iAcordo < Response.Acordo.DadosAcordo.length; iAcordo++) {
                    await (async (DadosAcordo) => {
                        let { Acordo } = await ParseAcordo(DadosAcordo)
                        if (Acordo)
                            RetornoMetodo.Acordo.push(Acordo)
                    })(Response.Acordo.DadosAcordo[iAcordo])
                }
            } else {
                await (async (DadosAcordo) => {
                    let { Acordo } = await ParseAcordo(DadosAcordo)
                    if (Acordo)
                        RetornoMetodo.Acordo.push(Acordo)
                })(Response.Acordo.DadosAcordo)
            }
        }
    }

    return { RetornoMetodo: RetornoMetodo }
}
