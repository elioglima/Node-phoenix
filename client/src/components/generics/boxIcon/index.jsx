import React from 'react';
import { StContainers, StBaseDesc, StIcone, StTitulo, StDesc, StCount } from './css'

const objeto = (props) => {

  return (
    <StContainers>
      <StIcone src={props.icone} />
      <StBaseDesc>
        <StTitulo>{props.titulo}</StTitulo>
        <StDesc>{props.desc}</StDesc>
      </StBaseDesc>
      <StCount>{props.count}</StCount>
    </StContainers>
  );
};

export default objeto;