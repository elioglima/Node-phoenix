import React from 'react'
import { connect } from "react-redux";
import './css/styles.css'
import ChatBotHeader from '../ChatBotHeader';
import ChatBotSendMsg from '../ChatBotSendMsg';
import ChatBotText from '../ChatBotText';

class Objeto extends React.Component {
    
    constructor(props) {
        super(props)   
        this.state = {
            Transacoes: props.Transacoes,
        }     
    }

    render() {            
        return (            
            <div className="ChatBotBase">                
                <ChatBotHeader {...this.props} />
                <ChatBotText {...this.props} />
                <ChatBotSendMsg {...this.props} />
            </div>            
        )
    }
}

export default connect(null,null)(Objeto)