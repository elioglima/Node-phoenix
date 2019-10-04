import styled from "styled-components";

export const BASE = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    background-color: #f0f0f0;
`;

export const Caption = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
`;

export const Titulo = styled.div`
    display: flex;
    flex-direction: initial;
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
`;

export const LinhasColuna = styled.div`
    display: flex;
    width: ${props => props.width};
`;
