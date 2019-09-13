const wsf = require('../Rotinas')
const libObj = require('../../../../libs/fn_obj')
const config = require('../../../../config');
const TratativasRetorno = require('../TratativasRetorno')

const ModeloRetorno = {
    Erro: false,
    Mensagem: '',
    Codigo: '',
    Logs: {},
    Credor: '',
    CodigoDevedor: '',
    Nome: '',
    DataNascimento: '',
    NomePai: {},
    NomeMae: '',
    Rg: '',
    Cpf: '',
    Enderecos: [],
    Telefones: [],
    Emails: []
}

module.exports = async (CpfCnpj, obj = {}) => {
    
    obj['Metodo'] = 'GetDadosDevedor'
    if (!CpfCnpj) {
        return {
            erro: true,
            status: 400,
            response: "Informe :: (CPF/CNPJ) "
        }
    }

    CpfCnpj = CpfCnpj.replace(/\D/g, '')
    
    let xml = '<tem:GetDadosDevedor>'
    xml += '<tem:pChaveAcesso>' + config.ChaveAcesso + '</tem:pChaveAcesso>'
    xml += '<tem:pCPF>' + CpfCnpj + '</tem:pCPF>'
    xml += '</tem:GetDadosDevedor>'
    xml = wsf.PreparaXml(xml);
    
    const TagsSoap = ["soap:Envelope", "soap:Body", "GetDadosDevedorResponse", "GetDadosDevedorResult", "Resultado"]
    let { Erro, Response } = await wsf.PreparaRenotro(TagsSoap, xml, obj)    
    TratativasRetorno(Response, obj)

    if (Response.Erro === true)
        return { RetornoMetodo: Response.Log }

    let DevedorRetorno = libObj.Assign(ModeloRetorno)
    DevedorRetorno.Logs = [ Response.Log ]
    DevedorRetorno.Codigo = Response.Codigo
    DevedorRetorno.Erro = Response.Erro
    DevedorRetorno.Mensagem = Response.Mensagem
    
    if (Response.Erro === true) 
        return { RetornoMetodo: DevedorRetorno }
    
    let Devedor = Response.Devedores.Devedor
    
    DevedorRetorno.CodigoDevedor = Devedor.CodigoDevedor
    DevedorRetorno.Nome = Devedor.Nome
    DevedorRetorno.DataNascimento = Devedor.DataNascimento
    DevedorRetorno.NomePai = Devedor.NomePai
    DevedorRetorno.NomeMae = Devedor.NomeMae
    DevedorRetorno.Rg = Devedor.Rg
    DevedorRetorno.Cpf = Devedor.Cpf
    
    if ((Devedor.Emails) & (Array.isArray(Devedor.Emails))) {
        Devedor.Emails.forEach(Email => {
            DevedorRetorno.Emails.push(Email.EnderecoEmail)
        })
    } else if ((Devedor.Emails) & (!Array.isArray(Devedor.Emails))) { 
        if ((Devedor.Emails.Email.EnderecoEmail) && (Devedor.Emails.Email.EnderecoEmail.length > 0)) 
            DevedorRetorno.Emails.push(Devedor.Emails.Email.EnderecoEmail)
    }
    
    if ((Devedor.Enderecos) && (Array.isArray(Devedor.Enderecos))) {
        Devedor.Enderecos.forEach(Endereco => {
            DevedorRetorno.Enderecos.push({
                CodigoEndereco:Endereco.CodigoEndereco,
                TipoDeEndereco: Endereco.TipoDeEndereco,
                Logradouro: Endereco.Logradouro,
                Numero: Endereco.Numero,
                Cep: Endereco.Cep,
                Bairro: Endereco.Bairro,
                Cidade: Endereco.Cidade,
                Uf: Endereco.Uf
            })
        })
        
    } else if (Devedor.Enderecos.Endereco) {
        DevedorRetorno.Enderecos.push({
            CodigoEndereco: Devedor.Enderecos.Endereco.CodigoEndereco,
            TipoDeEndereco: Devedor.Enderecos.Endereco.TipoDeEndereco,
            Logradouro: Devedor.Enderecos.Endereco.Logradouro,
            Numero: Devedor.Enderecos.Endereco.Numero,
            Cep: Devedor.Enderecos.Endereco.Cep,
            Bairro: Devedor.Enderecos.Endereco.Bairro,
            Cidade: Devedor.Enderecos.Endereco.Cidade,
            Uf: Devedor.Enderecos.Endereco.Uf
        })    
    } else if (Devedor.Endereco) {
        DevedorRetorno.Enderecos.push({
            CodigoEndereco: Devedor.Endereco.CodigoEndereco,
            TipoDeEndereco: Devedor.Endereco.TipoDeEndereco,
            Logradouro: Devedor.Endereco.Logradouro,
            Numero: Devedor.Endereco.Numero,
            Cep: Devedor.Endereco.Cep,
            Bairro: Devedor.Endereco.Bairro,
            Cidade: Devedor.Endereco.Cidade,
            Uf: Devedor.Endereco.Uf
        })    
    }
    
    if ((Devedor.Telefones) && (Array.isArray(Devedor.Telefones))) {
        Devedor.Telefones.forEach(Telefone => {
            DevedorRetorno.Telefones.push({
                DDD:Telefone.Ddd,
                Numero:Telefone.Numero,
            })
        });

    } else if (Devedor.Telefones.Telefone) {              
        DevedorRetorno.Telefones.push({
            DDD:Devedor.Telefones.Telefone.Ddd,
            Numero:Devedor.Telefones.Telefone.Numero,
        })
        
    }
    
    return { RetornoMetodo: DevedorRetorno }
}