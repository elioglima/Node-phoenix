import styled from "styled-components";

export const BASE_CAD = styled.div`
    display: block;
    border-radius: 10px;
    padding: 10px 10px 10px 10px;
`;

export const TITULO = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px 10px 10px 10px;
    background-color: #f0f0f0;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    color: #8a8a8a;
`;

export const TITULO_LABEL = styled.div`
    display: flex;
    width: 50%;
`;

export const TITULO_BOTOES = styled.div`
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

export const REGISTROS = styled.div`
    display: flex;
    min-height: 30px;
    background-color: #f4f4f4;
    padding: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
`;
