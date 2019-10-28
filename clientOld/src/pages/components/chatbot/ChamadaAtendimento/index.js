import React from 'react'
import { connect } from "react-redux";
import cabeca from './img/RB1.svg'
import olhoazul from './img/RB-OAZ.svg'
import olhobranco from './img/RB-OBRA.svg'
import antena from './img/RB-ANTENA.svg'
import './css/ChamadaAtendimento.css';

/*
    base da tela
*/

class Objeto extends React.Component {

    render() {    
        return (            
            <div className="ChamadaAtendimentoBase" alt="Inicie seu atendimento" onClick={e=>this.props.onChamadaAtendimento(e)}>     
                <img className="antena" src={antena} />                                                
                <img className="olhoazul" src={olhoazul} />           
                <img className="olhobranco" src={olhobranco} />    
                <div className="fundoolho" ></div>                
                <img className="cabeca" src={cabeca} />                
            </div>            
        )
    }
}

export default connect(null,null)(Objeto)