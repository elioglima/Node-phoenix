import styled from "styled-components";

export const StBase = styled.div`
    display:flex;
    width: 100%;
    height: auto;
    padding:8px ;
    flex-direction:initial;
    cursor:pointer;
    
`;

export const StIco = styled.div`
    display:flex;
    width: 20%;
    align-items:center;
    padding-left:10px;
`;

export const StValue = styled.div`
    display:flex;
    width:auto;
    height:100%;
    color:${props => props.color};
    align-items:center;
    padding-top:10px;
`;