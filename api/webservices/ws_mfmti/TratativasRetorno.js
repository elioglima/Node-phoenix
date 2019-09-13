const LogAPI = require('../../../db/models/LogAPI');
const config = require('../../../config');

module.exports = (dados, obj = {}) => {
    SetRetorno = (Erro, Codigo, Mensagem) => {
        if (config.SaveAllLog == true) {
            LogAPI.AddLog({ Codigo, Mensagem , xmlEnvio:dados.xmlEnvio, xmlRetorno:dados.xmlRetorno, jsonRetorno: dados.jsonRetorno, obj})
        } else if (Erro == true) 
            LogAPI.AddLog({ Codigo, Mensagem , xmlEnvio:dados.xmlEnvio, xmlRetorno:dados.xmlRetorno, jsonRetorno: dados.jsonRetorno, obj})
            
        dados['Erro'] = Erro
        dados['Mensagem'] = Mensagem
        dados['Log'] = { Erro, Codigo, Mensagem }
    }

    switch (dados.Codigo) {
        case '00':
            SetRetorno(false, dados.Codigo, 'Parceiro não autorizado a consumir o WebServic')
            break;

        case '01':
            SetRetorno(true, dados.Codigo, 'Falha ao realizar a Ação solicitada')
            break;

        case '02':
            SetRetorno(true, dados.Codigo, 'Falha ao autenticar o Parceiro ')
            break;

        case '03':
            SetRetorno(true, dados.Codigo, 'Falha ao Buscar os dados do Parceiro')
            break;

        case '04':
            SetRetorno(true, dados.Codigo, 'Falha ao Gravar Log ')
            break;

        case '05':
            SetRetorno(true, dados.Codigo, 'Falha ao Gravar Log (em arquivo) - Apenas foi desenvolvido, porem em primeiro momento não gravaremos log em arquivo, apenas em Banco de Dados.')
            break;

        case '06':
            SetRetorno(true, dados.Codigo, 'Falha ao montar a URL de conexão com o Intersic')
            break;

        case '07':
            SetRetorno(true, dados.Codigo, 'Falha ao realizar a conexão com o Intersic ')
            break;

        case '08':
            SetRetorno(true, dados.Codigo, 'Falha ao Processar os dados vindos do Intersic')
            break;

        case '09':
            SetRetorno(true, dados.Codigo, 'Falha ao Montar o XML de envio ao Cliente ')
            break;

        case '10':
            SetRetorno(false, dados.Codigo, 'Sucesso ao gravar os dados solicitados')
            break;

        case '11':
            SetRetorno(true, dados.Codigo, 'Erro ao retornar os dados solicitados')
            break;

        case '12':
            SetRetorno(false, dados.Codigo, 'Sucesso ao gravar os dados solicitados')
            break;

        case '13':
            SetRetorno(true, dados.Codigo, 'Erro ao gravar os dados solicitados')
            break;

        case '14':
            SetRetorno(true, dados.Codigo, 'Falha ao buscar os dados de acionamentos digitais')
            break;

        case '15':
            SetRetorno(false, dados.Codigo, 'Sucesso ao gravar o acionamento digital ')
            break;

        case '16':
            SetRetorno(true, dados.Codigo, 'Falha ao gravar os dados o acionamento digital (acionamento não é digital)')
            break;

        case '17':
            SetRetorno(true, dados.Codigo, 'Falha ao gravar o acionamento digital (devedor não encontrado) ')
            break;

        case '18':
            SetRetorno(true, dados.Codigo, 'Erro ao gravar o acionamento digital')
            break;

        case '19':
            SetRetorno(false, dados.Codigo, 'Retorno dos dados de acionamentos digitais realizado com sucesso')
            break;

        case '20':
            SetRetorno(true, dados.Codigo, 'Falha ao realizar a consulta de acionamentos digitais')
            break;

        case '21':
            SetRetorno(true, dados.Codigo, 'Falha ao identificar o parceiro no banco de dados (net)')
            break;

        case '22':
            SetRetorno(true, dados.Codigo, 'Falha ao identificar o parceiro no banco de dados (claro)')
            break;

        case '23':
            SetRetorno(true, dados.Codigo, 'Falha ao gravar acionamento digital (produto não encontrado)')
            break;

        case '24':
            SetRetorno(true, dados.Codigo, 'Cobradora não responsável pela negociação deste devedor')
            break;

        case '25':
            SetRetorno(true, dados.Codigo, 'Cobradora não digital no Intersic')
            break;

        case '26':
            SetRetorno(true, dados.Codigo, 'Demonstrativo de Contratos não retornou dados')
            break;

        case '27':
            SetRetorno(true, dados.Codigo, 'Devedor não existente em Base de Dados')
            break;

        case '30':
            SetRetorno(true, dados.Codigo, 'Trativa de erro inválida.')
            break;

        default:
            break;
    }

}