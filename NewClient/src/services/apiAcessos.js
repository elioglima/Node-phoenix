import request from './request'

export const apiLogar = async (payload) => {
    // Consulta contratos na API    
    
    let { retornoMetodo } = await request('acesso/doc', {
        "Documento": payload.Doc1,
    })
    
    const retorno = (msg, err = true, data = []) => ({msg, err,  data })
    
    // validações dos dados
    if (!retornoMetodo) return retorno('Ops, sem resposta do servidor.')

    if (retornoMetodo.err === true) // erro previsto pela funcao request
        return retorno(retornoMetodo.msg)
    
    else if (!retornoMetodo.obj) return retorno('Ops, erro ao localizar data ou body.')
    else if (!retornoMetodo.obj.data) return retorno('Ops, erro ao localizar data ou body.')
    else if (!retornoMetodo.obj.data.Retorno && retornoMetodo.obj.data.Retorno === 'undefined') return retorno('Ops, ws nao retornou codigo válido.')
    else if (retornoMetodo.obj.data.Retorno !== 0) return retorno(retornoMetodo.obj.data.RetornoTexto || 'WS RetornoTexto não retornou nenhum valor')
    
    console.log(retornoMetodo.obj.data)

    // retorna os dados como sucesso
    return retorno('Sucesso', false, retornoMetodo.obj.data)
}


export const apiConsultaDocumento = async (payload) => {
    let { retornoMetodo } = await request('acesso/doc', payload)
    
    const retorno = (msg, err = true, data = []) => ({msg, err,  data })
    
    // validações dos dados
    if (!retornoMetodo) return retorno('Ops, sem resposta do servidor.')

    if (retornoMetodo.err === true) // erro previsto pela funcao request
        return retorno(retornoMetodo.msg)
    
    else if (!retornoMetodo.obj) return retorno('Ops, erro ao localizar data ou body.')
    else if (!retornoMetodo.obj.data) return retorno('Ops, erro ao localizar data ou body.')
    else if (!retornoMetodo.obj.data.Erro && retornoMetodo.obj.Erro === 'undefined') return retorno('Ops, ocorreu algum erro no servidor,'+retornoMetodo.obj.data.Mensagem)
    else if (retornoMetodo.obj.data.Erro == true) return retorno(retornoMetodo.obj.data.Mensagem || 'WS RetornoTexto não retornou nenhum valor')
    console.log(retornoMetodo.obj.data)
    

    // retorna os dados como sucesso
    return retorno('Sucesso', false, retornoMetodo.obj.data)
}
