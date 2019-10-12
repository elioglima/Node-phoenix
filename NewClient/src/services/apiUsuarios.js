import request from './request'

export const apiConsultaDocumento = async (payload) => {
    // Consulta contratos na API    
    
    let { retornoMetodo } = await request('ConsultarContrato', {
        "CodCredor": "413",
        "CpfCnpj": "347.198.978-19",
        "CodClien": "21805711",
        "App": "DEV"
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

    // prepara a lista de contrato
    let clienteContrato = await retornoMetodo.obj.data.Contratos.map(contrato => {
        let render;

        // aplicando regra de  exibição de contrato
        if (!(contrato.PermiteProposta || contrato.PermiteDivida || contrato.PermiteAcordo)) return null;

        if (contrato.PermiteProposta || contrato.PermiteDivida) {

            // modela os dados do contrato selecionado
            render = [
                { titleItem: 'Produto', contentItem: contrato.NomParceiro },
                { titleItem: 'Valor original', contentItem: contrato.ValorPrincipal },
                { titleItem: 'Juros/ Multas', contentItem: 'R$ 00,00' },
                { titleItem: 'Valor p/ Pagamento', contentItem: 'R$ 00,00' },
                {
                    titleItem: 'Detalhes das faturas', contentItem: 'veja mais', action: {
                        type: 'OPEN_MODAL',
                        id: 'debt-details',
                        ...contrato,
                    }
                }
            ]
        }

        // cria id do contrato - versao da api-intersic nao precisa
        contrato.Id = `${contrato.CodCredor}-${contrato.NumContrato}-${contrato.CodTitulo}`;

        return { ...contrato, render }
    });

    // retorna os dados como sucesso
    return retorno('Sucesso', false, clienteContrato)
}
