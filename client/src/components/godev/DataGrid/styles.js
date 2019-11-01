import styled from 'styled-components'

export const StBase = styled.div`
  width: ${props => props.width ? props.width : 'auto'};
  display: flex;
  border:1px solid #ddd;
  border-radius: 4px;
  padding: 2px 8px 2px 8px;
  box-shadow: 0px 1px 10px #ddd;
  flex-direction:column;
`;
