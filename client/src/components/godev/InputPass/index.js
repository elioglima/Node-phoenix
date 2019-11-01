import React, { useState, useEffect } from 'react'
import { StBase, StInput } from './styles'

const Objeto = (props) => {
  const [texto, setTexto] = useState('')
  useEffect(() => setTexto(props.text), [props.text])

  const onKeyPress = (e) => {
    if (!props.onClick) return;
    props.onKeyPress(e, texto)
  }

  return (
    <StBase width={props.w}>
      <StInput type='password' value={texto} onChange={e => setTexto(e.target.value)} placeholder={props.placeholder} onKeyPress={onKeyPress} />
    </StBase>
  )
}

export default Objeto        