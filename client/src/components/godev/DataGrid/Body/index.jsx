import React from 'react';

import Linhas from './Linhas'
import { StBase } from './styles'

const Objeto = (props) => {
  return (
    <StBase>
      <Linhas rows={props.rows} cols={props.cols} pesquisa={props.pesquisa} />
    </StBase>
  );
};

export default Objeto;