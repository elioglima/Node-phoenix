import React, { useState, useEffect } from 'react';

import { StLinha, StColuna } from './styles'

const Objeto = (props) => {
  return (
    <StLinha>
      {props.cols.map((col, key) => {
        return <StColuna key={'cl' + key} w={100 / props.cols.length}>  {props.dados[key]}</StColuna>
      })}
    </StLinha>
  );
};

export default Objeto;