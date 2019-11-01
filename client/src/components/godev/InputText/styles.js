import styled from 'styled-components'

export const StBase = styled.div`
  width: ${props => props.width ? props.width : 'auto'};
  display: flex;
  border:1px solid #ddd;
  border-radius: 4px;
  padding: 2px 4px 2px 4px;
  box-shadow: 2px 2px 2px #ddd;
`;

export const StInput = styled.input`
  border: none; 
  border-radius: 4px;
  display: flex;
  width:100%;
  color:#537d91;
  outline:none;

  ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #dadddf;
  opacity: 1; /* Firefox */
}

:-ms-input-placeholder { /* Internet Explorer 10-11 */
  color: #dadddf;
}

::-ms-input-placeholder { /* Microsoft Edge */
  color: #dadddf;
}

`;