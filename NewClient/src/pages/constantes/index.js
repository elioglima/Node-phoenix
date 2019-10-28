import { onShow } from '../../redux/Actions/show'

export const menu = [
  {
    id: 'painel',
    ico: 'painel',
    text: 'Painel de Controle',
    onClick: onShow('painel')
  },
  {
    id: 'modulos',
    ico: 'modulos',
    text: 'Modulos',
    onClick: onShow('modulos')
  },
  {
    id: 'mensagens',
    ico: 'mensagens',
    text: 'Mensagem',
    onClick: onShow('mensagens')
  },
  {
    id: 'contatos',
    ico: 'contatos',
    text: 'Contatos',
    onClick: onShow('contatos')
  },
  {
    id: 'tarefas',
    ico: 'tasks',
    text: 'Gerenciador Tarefas',
    onClick: onShow('tarefas')
  },
  {
    id: 'atendimento',
    ico: 'atendimento',
    text: 'Atendimento',
    onClick: onShow('atendimento')
  },
  {
    id: 'configs',
    ico: 'mais',
    text: 'Configuraões',
    onClick: onShow('configs')
  }
]