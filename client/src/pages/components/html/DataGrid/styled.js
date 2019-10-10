import styled from "styled-components";

export const BASE = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
`;

export const Caption = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    padding:10px;
`;

export const Titulo = styled.div`
    display: flex;
    flex-direction: initial;
    padding:3px 0 3px 10px;
`;

export const TituloColuna = styled.div`
    display: flex;
    width: ${props => props.width};
`;

export const BaseLinha = styled.div`
    display: flex;
    background-color: #f4f4f5;
    flex-direction: column;
`;

export const Linhas = styled.div`
    display: flex;
    flex-direction: initial;
    padding:10px;
`;

export const LinhasColuna = styled.div`
    display: flex;
    width: ${props => props.width};
`;
