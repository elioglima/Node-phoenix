import styled from "styled-components";

export const GRUPO_MENU = styled.div`
    display: flex;
    flex-direction:column;
    border-radius: 10px;
    padding: 10px 10px 10px 10px;
`;

export const GRUPO_MENU_TITULO = styled.div`
    display: block;
    padding: 10px 10px 10px 10px;
    background-color: #f0f0f0;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    color: #8a8a8a;
`;
export const GRUPO_MENU_ICONES = styled.div`
    display: flex;    
    flex-wrap:wrap;
    min-height: 30px;
    background-color: #f4f4f4;
    padding: 10px;
`;

export const MENU_ACESSO = styled.div`
    display: flex;
    align-items: center;    
    flex-direction:column;
    width: 150px;    
    background-color: #fff;
    border-radius: 10px;
    border: 1px solid #dadada;
    margin-right: 10px;
    margin-bottom:10px;
`;

export const MENU_ACESSO_IMG = styled.div`
    display: flex;
    padding: 15px 15px 15px 15px;
`;

export const MENU_TITULO = styled.div`
    display: flex;
    padding-bottom:10px;
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
