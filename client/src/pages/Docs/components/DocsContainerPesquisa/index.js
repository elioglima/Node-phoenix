import React, { Component } from 'react';
import { connect } from "react-redux";
import RButton from '../../../components/html/RButton'
import InputsTS from './InputsTS.js'
import RResposta from './RResposta';
import * as Actions from '../../actions'

class Objeto extends Component {
    constructor(props) {
        super(props)
        this.state = {
            "ResponseAPI":{
                "Status":0,
                "Mensagem":"",
                "Dados":{}
            },
            "ResponseAPIID":0
        }
    }

    
        // this.setState({DadosItem:{}})

        onChange(e, nome, valor) {        
            this.setState({[nome]:valor})
        }
    
        onAutoChange(nome, valor) { 
            this.setState({[nome]:valor})
        }    
       
        onClick(item, e) {

            let DadosJson = {}
            for (const key in this.state) {
                if (this.state.hasOwnProperty(key)) {
                    if (key.indexOf("CompReactID"+item.Id) > -1) {                     
                        const nome = this.props.getName(key)
                        DadosJson[nome] = this.props.getValue(key, this.state[key])
                    } 
                }
            }
    
            this.props.dispRAPI(item.URL, DadosJson)
                .then(res => {                              
                    this.setState(
                        {
                            "ResponseAPI":{
                                Status:res.Status,
                                Mensagem:res.body.Msg,
                                Dados:res.body.Dados,
                            },
                            "ResponseAPIID":item.Id
                        })
                })
                .catch(erro => {
                    this.setState(
                        {
                            "ResponseAPI":{
                                Status:erro.Status,
                                Response:erro.Response.message,
                            },
                            "ResponseAPIID":item.Id
                        })
                })
        }
    
    
    render() { 

        return (            
            <div className="docs-container">                
                <div key={"div1"}  className="docs-container-metodo-base">          

                    <div key={"titulo"+this.props.DadosItemPesquisado.Id} className="docs-container-metodo-titulo" >
                        <span className={this.props.DadosItemPesquisado.Metodo}>{this.props.DadosItemPesquisado.Metodo}</span>
                        <span>{this.props.DadosItemPesquisado.Titulo}</span>
                    </div> 

                    <div key={"url"+this.props.DadosItemPesquisado.Id} className="docs-container-metodo-url" >{this.props.DadosItemPesquisado.URL}</div> 

                    <InputsTS key={"inp"+this.props.DadosItemPesquisado.Id} 
                                item={this.props.DadosItemPesquisado} 
                                onChange={this.onChange.bind(this)} 
                                onAutoChange={this.onAutoChange.bind(this)} />

                    <div className="docs-container-metodo-botoes">          
                        <RButton 
                            key={"bt"+this.props.DadosItemPesquisado.Id}
                            item={this.props.DadosItemPesquisado}
                            className={"Executar"} 
                            valor="Executar" 
                            onClick={this.onClick.bind(this)}
                            />
                    </div>

                    <RResposta item={this.props.DadosItemPesquisado} ResponseAPIID={this.state.ResponseAPIID} ResponseAPI={this.state.ResponseAPI} />
                    </div>   
            </div>
        )
    }

}

export default connect(null,Actions)(Objeto)
