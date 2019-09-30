import styled from "styled-components";

export const LogoEmpresa = styled.div`
    display: ${props => (!props.src ? "none" : "block")};
    float: left;
    width: 90%;
    height: 20%;
    background: url(${props => props.src}) no-repeat;
    background-size: 50%;
    background-position: 50% 50%;
    margin-top: auto;
    margin-bottom: 20px;
`;

export const RELOGIO = styled.div`
    display: flex;
    padding: 9px;
    font-size: 20px;
    color: #456;
    font-family: "Roboto";
    font-weight: bold;
    background-color: #f4f4f4;
`;

export const RELOGIO_ICONE = styled.img`
    display: flex;
    padding-left: 27px;
    width: 30px;
    color: #868686;
`;

export const RELOGIO_TITULO = styled.div`
    display: flex;
    padding-left: 33px;
    padding-top: 5px;
    color: #868686;
`;
