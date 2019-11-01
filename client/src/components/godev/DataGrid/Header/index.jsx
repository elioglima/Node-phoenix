import React from 'react';
import TitulosColunas from './TitulosColunas'

import {
  StBase,
  StBaseTitulo,
  StTitulo,
  StPesquisa
} from './styles'

const Objeto = (props) => {
  return (
    <StBase>
      <StBaseTitulo>
        <StTitulo>{props.titulo}</StTitulo>
        <StPesquisa><input type='text' onChange={e => props.onPesquisa(e.target.value)} value={props.pesquisa} /></StPesquisa>
      </StBaseTitulo>
      <TitulosColunas cols={props.cols} />
    </StBase>
  );
};

export default Objeto;