import React from 'react'
import { connect } from "react-redux";
import './css/styles.css'

/*
    base da tela
*/

class Objeto extends React.Component {
    constructor(props) {
        super(props)      
        this.state = {
            SendTexts: ""
        }  
    }

    componentDidMount() {
        this.nameInput.focus();
    }

    onClickKEyPressDownSendMensage(e) {        
        if(e.keyCode !== 13) return false;
        this.props.onSendMensage(e, this.state.SendTexts)        
        this.setState({SendTexts: ''})
    }

    onClickSendMensage(e) {        
        this.props.onSendMensage(e, this.state.SendTexts)        
        this.setState({SendTexts: ''})
    }

    render() {    
        return (            
            <div className="ChatBotSendMsg">
                <input type="text" 
                        ref={(input) => { this.nameInput = input; }}  
                        className="ChatBotSendMsgInput" 
                        value={this.state.SendTexts} 
                        onChange={e => this.setState({SendTexts: e.target.value})}  
                        onKeyDown={e => this.onClickKEyPressDownSendMensage(e) }
                        placeholder="Pesquise aqui..."
                        />

                <button className="ChatBotSendMsgButtom" 
                        onClick={e => this.onClickSendMensage(e)} >Enviar</button>
            </div>            
        )
    }
}

export default connect(null,null)(Objeto)