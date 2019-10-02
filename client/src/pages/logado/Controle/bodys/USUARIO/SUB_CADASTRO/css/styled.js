import styled from "styled-components";

export const DIV_BLOCO = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    padding: 10px 10px 10px 10px;
    width: ${props => props.width};

    label {
    }
`;

export const GRUPO_MENU = styled.div`
    display: block;
    border-radius: 10px;
    padding: 10px 10px 10px 10px;
`;

export const GRUPO_MENU_TITULO = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px 10px 10px 10px;
    background-color: #f0f0f0;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    color: #8a8a8a;
`;
export const GRUPO_MENU_ICONES = styled.div`
    display: flex;
    min-height: 30px;
    background-color: #f4f4f4;
    padding: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
`;

export const MENU_ACESSO = styled.div`
    display: flex;
    width: 25%;
    background-color: #fff;
    border-radius: 10px;
    border: 1px solid #dadada;
    margin-right: 10px;
    padding-left: 10px;
`;

export const MENU_ACESSO_IMG = styled.div`
    display: flex;
    padding: 15px 15px 15px 15px;
`;

export const MENU_BASE = styled.div`
    display: block;
`;
export const MENU_TITULO = styled.div`
    display: flex;
    padding: 15px 10px 5px 0px;
    color: #929292;
`;
export const MENU_DESC = styled.div`
    display: flex;
    width: 100%;
    padding: 0px 10px 10px 0px;
    color: #929292;
    font-size: 13px;
    font-family: "Poppins";
    font-weight: "Ligth";
`;

export const MENU_REGS = styled.div`
    display: flex;
    margin-top: auto;
    margin-left: auto;
    padding-bottom: 10px;
    padding-right: 10px;
    font-size: 20px;
    font-family: "Roboto";
    font-weight: bold;
    color: #6fa5b6;
    letter-spacing: 1px;
`;

export const GRUPO_MENU_TITULO_LABEL = styled.div`
    display: flex;
    width: 50%;
`;

export const GRUPO_MENU_TITULO_BOTOES = styled.div`
    display: flex;
    width: 50%;
    justify-content: flex-end;

    span {
        padding-right: 5px;
        cursor: pointer;
        color: #109cf1;
        font-family: "Poppins";
        font-weight: bold;
        letter-spacing: 2px;
    }

    span:hover {
        color: #29c726;
    }

    span:active {
        color: #0e440c;
    }
`;
