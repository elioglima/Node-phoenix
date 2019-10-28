import React, { Component } from 'react';
import { connect } from "react-redux";
import './css/styles.css'

class Objeto extends Component {
  render() {    
    return (
      <div> 
        <div className="quem-somos">
          <div className="col-100 titulo">
            <span>QUEM</span> <span className="cor_azul">SOMOS</span>
          </div>
          <div className="col-100 qs-texto">Somos especializados em consultoria, desenvolvimento e analise de dados. Atendendo a necessidade de nossos clientes e aprimorando continuamente nosso portfólio. Com grande visão no futuro e conhecedora das mais rigorosas normas nacionais e internacionais, temos acompanhado as mudanças e tendências do mercado, para trazer a você cliente as melhores soluções e poder lhe dar a garantia e segurança da continuidade da sua produção. Para isso nós investimos continuamente na capacitação e treinamento de nossos funcionários em todos os setores, tornando-os profissionais altamente qualificados e também investindo em novas tecnologias que fazem deste mercado um dos mais modernos do mundo.
          </div>
          <div className="col-33 descricao">
            <div className="col-30 ico">
              <i className="fas fa-drafting-compass"></i>
            </div>  
            <div className="col-70 desc_texto">
            CONSULTORIA
            </div>  
          </div>
          <div className="col-30 descricao">
            <div className="col-30 ico">
              <i className="fas fa-drafting-compass"></i>
            </div>  
            <div className="col-70 desc_texto">SUPORTE</div>
          </div>
          <div className="col-30 descricao">
            <div className="col-30 ico">
              <i className="fas fa-drafting-compass"></i>
            </div>  
            <div className="col-70 desc_texto">DESENVOLVIMENTO</div>
          </div>
          <div className="col-100 copyright">Copyright © 2009 Conductor</div>          
        </div>
      </div>
    )
  }
}

export default connect(null,null)(Objeto)
