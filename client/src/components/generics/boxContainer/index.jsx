import React from 'react';
import { StContainers, StHeader, StBody } from './css'

const objeto = (props) => {

  return (
    <StContainers>
      <StHeader>{props.titulo}</StHeader>
      <StBody>{props.children}</StBody>
    </StContainers>
  );
};

export default objeto;