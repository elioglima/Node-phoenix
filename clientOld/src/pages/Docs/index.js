import React, {Component} from "react";
import { connect } from "react-redux";
import * as Actions from "./actions";
import './components/css/styles.css'
import BannerContato from '../components/banner_contato'
import MenuSuperior from './components/MenuSuperior'
import DocsBase from "./components/DocsBase";
import {DataAPI} from './controle/DataAPI'
var accents = require('remove-accents');

class Objeto extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
        registro_sel:-1,
        registro_sel_detalhes:-1,
        ListaPesquisa: [],  
    }
  }    

  onClickRegistroSel(e, key) {
      this.setState({registro_sel:key})
  }

  onClickRegistroSelDetalhes(e, Valor) {       

    for (let a = 0; a < this.state.ListaPesquisa.length; a++) {
        if (a === Valor) {            
            const ListaPesq = this.state.ListaPesquisa[a]
            let ClasseID = ListaPesq.ClasseID
            let ItemID = ListaPesq.ItemID

            for (let b = 0; b < DataAPI.length; b++) {
                const Classe = DataAPI[b];
                if (Classe.Id === ClasseID) {
                    for (let c = 0; c < Classe.Itens.length; c++) {
                        const Item = Classe.Itens[c];
                        if (Item.Id === ItemID) {                            
                            this.setState({
                              DadosItemPesquisado:Item,
                              registro_sel_detalhes:Valor,
                            })
                        }                            
                    }
                }                    
            }
        }            
    }

  }

  onClickClearDocs() {
    this.setState({
      registro_sel:-1,
      ListaPesquisa:[],
      registro_sel_detalhes:-1,
    })
  }
  

  onSubmit = e => {
    e.preventDefault();
    var parametros = {
      N: this.state.name,
      P: this.state.pass,
    }
  }  
  
 
  onChangePesquisa = (TextoPesquisa) => {

    // e.preventDefault();
    if (TextoPesquisa.length == 0) {
      this.setState({"ListaPesquisa":[]})
      return false;
    }

    this.setState({registro_sel_detalhes:-1})

    var ListaPesquisa = []
    DataAPI.forEach(classe => {

      classe.Itens.forEach(item => {

        var TextoSemAcento1 = accents.remove(item.Titulo).toLocaleLowerCase();
        var TextoSemAcento2 = accents.remove(TextoPesquisa).toLocaleLowerCase();

        if (TextoSemAcento1.indexOf(TextoSemAcento2) > -1) {                     
          var obj = {
            "ClasseID":classe.Id,
            "ItemID": item.Id,
            "Titulo": item.Titulo,
            "Metodo": item.Metodo,
            "URL": item.URL,
          }
          ListaPesquisa.push(obj)
        }
      })

    })

    this.setState({"ListaPesquisa":ListaPesquisa})
  }

  render() {


    return (
      <div>  
        <BannerContato />              
        <MenuSuperior {...this.props} label="Documentação" onChangePesquisa={this.onChangePesquisa.bind(this)} onClickClearDocs={this.onClickClearDocs.bind(this)} />
        <DocsBase {...this.state} onClickRegistroSel={this.onClickRegistroSel.bind(this)} onClickRegistroSelDetalhes={this.onClickRegistroSelDetalhes.bind(this)} />
      </div>
      );
      }
      }

export default connect(null,Actions)(Objeto);
