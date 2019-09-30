import styled from "styled-components";

export const SVG = styled.svg`
    width: 22px;
    height: 26px;
    stroke: ${props => (props.ativo ? "#109CF1" : "#C2CFE0")};
`;

export const TITULO = styled.label`
    float: left;
    width: 72%;
    padding-top: 11px;
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
    padding-top: 8px;
    padding-bottom: 5px;
`;

export const MENU = styled.div`
    display: flex;
    width: 100%;
    cursor: pointer;

    &:hover {
        color: white;
        background-color: #f7f6ff;
    }

    &:hover svg {
        width: 22px;
        height: 26px;
        /* stroke: #7c71ff; */
    }

    &:hover label {
        /* color: #7c71ff; */
    }
`;
