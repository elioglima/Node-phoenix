import React, { useState, useEffect } from 'react';

import Linha from './Linha'

import {
  StBase,
  StLinha,
} from './styles'

const Objeto = (props) => {

  const [rows, setrows] = useState([])
  useEffect(() => {
    if (props.rows) setrows(props.rows)
  }, [props.rows])

  return (
    <StBase>
      {rows.filter(r => r.filter(c => c.toString().toLowerCase().indexOf(props.pesquisa.toLowerCase()) != -1).length > 0)
        .map((dados, key) => {
          return (
            <StLinha key={key}>
              <Linha key={key} dados={dados} cols={props.cols} />
            </StLinha>
          )
        })}
    </StBase>
  );
};

export default Objeto;