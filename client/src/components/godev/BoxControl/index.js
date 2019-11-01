import React, { useState, useEffect } from 'react'
import { StBase, StInput } from './styles'

const Objeto = (props) => {
  return (
    <StBase>
      {props.children}
    </StBase>
  )
}

export default Objeto        