import styled from "styled-components";

export const MENU = styled.div`
    display: flex;
    width: 100%;
`;

export const SVG = styled.svg`
    width: 22px;
    height: 21px;
    stroke: ${props => (props.ativo ? "#109CF1" : "#C2CFE0")};
`;
export const TITULO = styled.div`
    float: left;
    width: 72%;
    padding-top: 10px;
    padding-bottom: 5px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 19px;
    letter-spacing: 0.01em;
    color: ${props => (props.ativo ? "#109CF1" : "#334D6E")};
`;

export const ICO = styled.div`
    float: left;
    width: 28%;
    text-align: center;
    padding-top: 9px;
    padding-bottom: 5px;
`;
