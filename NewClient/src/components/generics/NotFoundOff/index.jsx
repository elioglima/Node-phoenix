import React from 'react';
import { StBase, StContainers, StTitulo, StDescritivo, StBTPainel } from './css'

const objeto = (props) => {

  const onClick = () => {
    if (!props.onClick) return
    props.onClick()
  }

  return (
    <StBase>
      <StContainers>
        <StTitulo>Pagina não localizada</StTitulo>
        <StDescritivo>A pagina solicitada não foi localizada, por favor tente novamente mais tarde ou contate o suporte técnico.<br />agradecemos sua compreensão</StDescritivo>
        <StBTPainel onClick={onClick}>Painel de Controle</StBTPainel>
      </StContainers>
    </StBase>
  );
};

export default objeto;