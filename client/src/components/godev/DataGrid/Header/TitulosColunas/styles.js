import styled from 'styled-components'

export const StBase = styled.div`
  display: flex;
  flex-direction:row;
  background-color:#eeeeee;
  border: 1px solid #eae9e9;
  overflow-y:scroll;

`;

export const StColuna = styled.div`
  display: flex;
  width: ${props => props.w && props.w}%;
  border: 1px solid #eae9e9;
  padding: 5px;
`;
