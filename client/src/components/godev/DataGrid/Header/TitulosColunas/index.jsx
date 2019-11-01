import React from 'react';
import {
  StBase,
  StColuna
} from './styles'

const Objetos = (props) => {
  return (
    <StBase>
      {props.cols.map((coluna, key) => {
        return (
          <StColuna key={'col' + key} w={100 / props.cols.length}>
            {coluna.text}
          </StColuna>
        )
      })
      }
    </StBase>
  )
}

export default Objetos