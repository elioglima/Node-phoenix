import styled from "styled-components";

export const StBase = styled.div`
    display:flex;
    width: 100%;
    height: auto;
    padding:8px ;
    flex-direction:initial;
`;

export const StFoto = styled.div`
    display:flex;
    width: 20%;
    img {
        width: 50px;
        border-radius:50%;
        border: 1px solid #81BEEB;
    }
`;

export const StValue = styled.div`
    display:flex;
    width:auto;
    height:100%;
    color:${props => props.color};
    padding-top:10px;
    flex-direction:column;
    padding-left:8px;
`;

export const StNome = styled.div`
    display:flex;
    width:auto;
    font-family: Poppins;
    color:black;
    font-size:15px;
    letter-spacing:0.4px;
`;

export const StEmail = styled.div`
    display:flex;
    width:auto;
    font-family: Poppins;
    font-size:14px;
    font-weight: 'ligth';
    letter-spacing:0.4px;
    color:#90A0B7;
`;