import styled from "styled-components";

export const MENU = styled.div`
    display: flex;
    padding: 10px 5px 0px 10px;    
    justify-content: end;
    cursor: pointer;

    &:hover {
        color: white;
        background-color: #f7f6ff;
    }

    &:hover svg {
        /* stroke: #7c71ff; */
    }

    &:hover label {
        /* color: #7c71ff; */
    }
`;
export const SVG = styled.svg`
    width: 25px;
    stroke: ${props => (props.ativo ? "#109CF1" : "#C2CFE0")};
`;

export const ICO = styled.div`
    display: flex;
    padding-right:5%;
`;

export const TITULO = styled.label`
    display: flex;
    padding-top: 8px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 19px;
    letter-spacing: 0.01em;
    color: ${props => (props.ativo ? "#109CF1" : "#334D6E")};
`;



