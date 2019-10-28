import React from 'react'
import { connect } from "react-redux";
import './css/styles.css'

/*
    base da tela
*/

class Objeto extends React.Component {
    render() {    
        return (            
            <div className="ChatBotHeader">                
                <div className="ChatBotHeaderTitulo">Atendimento</div>                
                <div className="ChatBotHeaderClose" onClick={e=>this.props.onCloseAtendimento(e)}>&times;</div>
            </div>            
        )
    }
}

export default connect(null,null)(Objeto)