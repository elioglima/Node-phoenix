import React from 'react'
import { connect } from "react-redux";
import ScrollToBottom from 'react-scroll-to-bottom';
import './css/styles.css'

class Objeto extends React.Component {

    constructor(props) {
        super(props)   
        this.state = {
            Mensagens: props.Transacoes.Mensagens,
        }     
    }

    getChatBotTextMsgColor(identificador) {
        if (identificador === 'chatbot') {
            return "ChatBotTextMsgServer"        
        } else if (identificador === 'client') {
            return "ChatBotTextMsgClient"
        }
    }

    getChatBotTituloMsgColor(identificador) {
        if (identificador === 'chatbot') {
            return "ChatBotTextIdentificadorServer"        
        } else if (identificador === 'client') {
            return "ChatBotTextIdentificadorClient"
        }
    }

    getChatBotIdentificadorMsg(item) {
        if (item.identificador === 'chatbot') {
            return "atendimento - " + item.dataexecucao        
        } else if (item.identificador === 'client') {
            return item.dataexecucao + " - eu"        
        }
    }

    render() {    
        return (            
            <div>                
                <ScrollToBottom className="ChatBotText">                 
                    {                        
                        this.state.Mensagens.map((item, key) => {
                               return ( 
                                    <div className="ChatBotTextBase" key={key}  >
                                        <div className={this.getChatBotTituloMsgColor(item.identificador)}>{this.getChatBotIdentificadorMsg(item)}</div>
                                        <div className={this.getChatBotTextMsgColor(item.identificador)}>{item.msg}</div>
                                    </div>
                               )
                            }   
                        )
                    }                
                </ScrollToBottom> 
            </div>            
        )
    }
}

export default connect(null,null)(Objeto)