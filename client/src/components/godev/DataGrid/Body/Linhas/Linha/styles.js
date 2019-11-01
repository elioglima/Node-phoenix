import styled from 'styled-components'

export const StLinha = styled.div`
  display:flex;
  flex-direction:row;
  width:100%;
`;

export const StColuna = styled.div`
  display: flex;
  width: ${props => props.w && props.w}%;
  border: 1px solid #eae9e9;
  padding:5px;
`;
