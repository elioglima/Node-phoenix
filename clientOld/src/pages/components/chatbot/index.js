import React from 'react'
import { connect } from "react-redux";
import ChatBotBase from './ChatBotBase';
import ChamadaAtendimento from './ChamadaAtendimento';
import * as processar from './Controller/Processar.js'
import * as Actions from './Actions'

class Objeto extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            VisibilidadeChat: false,
            Transacoes: {
                idChat: 5001,                
                Mensagens: []
            }
        }
    }    

    componentDidMount() {
        this.props.chatbot.map((data, key) => {
            this.setState(state => {
                const obj = {msg:data.msg, identificador:"chatbot", dataexecucao:"enviado agora"}
                const list = state.Transacoes.Mensagens.push(obj);      
                return {
                  list,
                  value: obj ,
                };
              }); 
        })
    }

    SendMensagem(mensgem, identificador) {
        this.setState(state => {
            const obj = {msg:mensgem, identificador:identificador, dataexecucao:"enviado agora"}
            const list = state.Transacoes.Mensagens.push(obj);      
            return {
              list,
              value: obj ,
            };
        });     
    }
    
    DirecionarPagina(value) {
        if(value.hasOwnProperty("Route")) {
            if (value.Route === '/') {
                this.props.dispHome(null);
            } else if (value.Route === '/docs') {
                this.props.dispDocs(null);
            }
        }
    }

    onSendMensage(e, SendTexts) {        
        if (SendTexts.length === 0) {
            return false
        }
        
        this.SendMensagem(SendTexts, "client")
        
        this.props.analise(SendTexts)
            .then(async res => {
                await new Promise (resolve => {                                        
                  setTimeout(resolve, 500)
                })

                this.SendMensagem(res.Titulo, "chatbot")              
                this.DirecionarPagina(res)
              })
            .catch(res => {
                this.SendMensagem(res.Titulo, "chatbot")

            })
         
    }

    onCloseAtendimento() {
        this.setState({VisibilidadeChat: false})
    }

    onChamadaAtendimento() {
        const chatVisivel = this.state.VisibilidadeChat === false;
        this.setState({VisibilidadeChat: chatVisivel})
    }

    render() {    
        return (      
            <div>
                { 
                    (() => {
                        if (this.state.VisibilidadeChat === true) 
                            return <ChatBotBase onCloseAtendimento={this.onCloseAtendimento.bind(this)} onSendMensage={this.onSendMensage.bind(this)} Transacoes={this.state.Transacoes} />                

                        else if (this.state.VisibilidadeChat === false) 
                            return <ChamadaAtendimento onChamadaAtendimento={this.onChamadaAtendimento.bind(this)} />

                    })()
                }
            </div>      
        )
    }
}

function mapStateToProps(state) {
    return { chatbot: processar.chatbotSaudacao, analise: processar.analise }
  }

export default connect(mapStateToProps, Actions)(Objeto)
