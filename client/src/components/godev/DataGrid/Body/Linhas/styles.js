import styled from 'styled-components'

export const StBase = styled.div`
  display: flex;
  flex-direction:column;
  width:100%;
  padding: 0 1px 0 1px;
`;

export const StLinha = styled.div`
  display: flex;
  width:100%;
  background-color:#f6f6f6;
  cursor:pointer;

  &:hover {
    background-color:#eaf5ff;
  }

  &:active {
    background-color:#a9c6de;

  }
`;
