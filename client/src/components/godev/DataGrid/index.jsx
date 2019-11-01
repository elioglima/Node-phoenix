import React, { useState, useEffect } from 'react'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'
import { StBase, } from './styles'
import { setUseProxies } from 'immer'

const Objeto = (props) => {

  const [pesquisa, setPesquisa] = useState('')
  const [cols, setCols] = useState([])
  const [rows, setRows] = useState([])

  useEffect(() => {
    if (props.cols)
      setCols(props.cols)

    if (props.rows)
      setRows(props.rows)
  }, [props])

  const onPesquisa = (e) => {
    setPesquisa(e)
  }

  return (
    <StBase>
      <Header cols={cols} titulo={props.titulo} onPesquisa={onPesquisa} pesquisa={pesquisa} />
      <Body rows={rows} cols={cols} pesquisa={pesquisa} />
      <Footer />
    </StBase>
  )
}

export default Objeto        