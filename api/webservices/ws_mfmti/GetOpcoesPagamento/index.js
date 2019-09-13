const wsf = require('../Rotinas')
const TratativasRetorno = require('../TratativasRetorno')
const libObj = require('../../../../libs/fn_obj')
const config = require('../../../../config');

const ModeloRetorno = {
    Codigo: '',
    Data: '',
    Pagamento: [],
    Log: {}
}

module.exports = async (CodTitulo, obj = {}) => {

    obj['Metodo'] = 'GetOpcoesPagamento'

    if (!CodTitulo) {
        return {
            erro: true,
            status: 400,
            response: "Codigo do tituo não informado. (codigo_titulo)"
        }
    }

    let xml = '<tem:GetOpcoesPagamento>'
    xml += '<tem:pChaveAcesso>' + config.ChaveAcesso + '</tem:pChaveAcesso>'
    xml += '<tem:pCodigoTitulo>' + CodTitulo + '</tem:pCodigoTitulo>'
    xml += '</tem:GetOpcoesPagamento>'
    xml = await wsf.PreparaXml(xml);

    obj['Metodo'] = 'GetOpcoesPagamento'
    const TagsSoap = ["soap:Envelope", "soap:Body", "GetOpcoesPagamentoResponse", "GetOpcoesPagamentoResult", "Resultado"]
    
    let { Erro, Response } = await wsf.PreparaRenotro(TagsSoap, xml, obj)    
    TratativasRetorno(Response, obj)

    if (Response.Erro === true)
        return { RetornoMetodo: Response.Log }

    let RetornoMetodo = libObj.Assign(ModeloRetorno)
    RetornoMetodo.Log = Response.Log
    RetornoMetodo.Codigo = Response.Codigo
    RetornoMetodo.Erro = Response.Erro
    RetornoMetodo.Mensagem = Response.Mensagem
    
    if ((Response.OpcoesPagamento.OpcaoPagamento) && (Array.isArray(Response.OpcoesPagamento.OpcaoPagamento))) {
        Response.OpcoesPagamento.OpcaoPagamento.forEach(Pagamento => {
            PagamentoTemp = {
                Proposta: Pagamento.Proposta,
                Plano: Pagamento.Plano,
                ValorDesconto: Pagamento.ValorDesconto,
                VencimentoPrimeira: Pagamento.VencimentoPrimeira,
                ValorPrimeira: Pagamento.ValorPrimeira,
                ValorOriginal: Pagamento.ValorOriginal,
                ValorCorrecao: Pagamento.ValorCorrecao,
                ValorCorrigido: Pagamento.ValorCorrigido,
                ValorNegociar: Pagamento.ValorNegociar,
                VencimentoDemaisParcelas: Pagamento.VencimentoDemaisParcelas,
                ValorDemaisParcelas: Pagamento.ValorDemaisParcelas
            }
            RetornoMetodo.Pagamento.push(PagamentoTemp)
        });

    } else if ((Response.OpcoesPagamento.OpcaoPagamento) && (!Array.isArray(Response.OpcoesPagamento.OpcaoPagamento))) {
        let Pagamento = Response.OpcoesPagamento.OpcaoPagamento
        PagamentoTemp = {
            Proposta: Pagamento.Proposta,
            Plano: Pagamento.Plano,
            ValorDesconto: Pagamento.ValorDesconto,
            VencimentoPrimeira: Pagamento.VencimentoPrimeira,
            ValorPrimeira: Pagamento.ValorPrimeira,
            ValorOriginal: Pagamento.ValorOriginal,
            ValorCorrecao: Pagamento.ValorCorrecao,
            ValorCorrigido: Pagamento.ValorCorrigido,
            ValorNegociar: Pagamento.ValorNegociar,
            VencimentoDemaisParcelas: Pagamento.VencimentoDemaisParcelas,
            ValorDemaisParcelas: Pagamento.ValorDemaisParcelas
        }
        RetornoMetodo.Pagamento.push(PagamentoTemp)
    }
    
    return { RetornoMetodo: RetornoMetodo }
}