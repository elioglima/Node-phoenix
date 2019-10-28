import styled from "styled-components";

export const Base = styled.div`
    display: flex;    
`;

export const Controle = styled.div`
    display: flex;
    width:100%;     
    background: #FFFFFF;
    box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.06);
    border-radius: 4px;
    padding: 10px;
    flex-direction: column;

`;

export const Header = styled.div`
    display: flex;
    width:100%;     
    background: #FFFFFF;
    box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.06);
    border-radius: 4px;
    flex-direction: row;
    justify-content: space-between;    
`;

export const HeaderTitulo = styled.div`
    display: flex;
`;

export const HeaderActions = styled.div`
    display: flex;
`;

export const DataSelecionada = styled.div`
    display: flex;
`;

export const Divisoria = styled.div`
    display: block;
    width:100%;
    height:2px;
    background-color:#EBEFF2;
`;