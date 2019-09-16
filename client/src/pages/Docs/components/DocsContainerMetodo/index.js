import React, { Component } from 'react';
import { connect } from "react-redux";
import RButton from '../../../components/html/RButton';
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

        // var count = Object.keys(DadosJson).length;
        // if (count === 0) {
        //     return
        // }

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
                            Mensagem:erro.Response.message,
                            Dados:erro.body.Dados,
                        },
                        "ResponseAPIID":item.Id
                    })
            })
    }

    render() {           
        
        return (            
            <div>
                {
                    this.props.Dados.Itens.map((item, key1) => {     

                        return (
                            <div key={"div1"+key1}  className="docs-container-metodo-base">          

                                <div key={"titulo1"+key1} className="docs-container-metodo-titulo" >
                                    <span className={item.Metodo}>{item.Metodo}</span>
                                    <span>{item.Titulo}</span>
                                </div> 

                                <div key={"url"+key1} className="docs-container-metodo-url" >{item.URL}</div> 
                                
                                <InputsTS key={"inp"+key1} item={item} onChange={this.onChange.bind(this)} onAutoChange={this.onAutoChange.bind(this)} />

                                <div className="docs-container-metodo-botoes">          
                                    <RButton 
                                        key={"bt"+key1}
                                        item={item}
                                        className={"Executar"} 
                                        valor="Executar" 
                                        onClick={this.onClick.bind(this)}
                                        />
                                </div>

                                <RResposta item={item} ResponseAPIID={this.state.ResponseAPIID} ResponseAPI={this.state.ResponseAPI} />
                            </div>   
                        )
                    })
                }
            </div>   
        )
    }

}


export default connect(null,Actions)(Objeto)
