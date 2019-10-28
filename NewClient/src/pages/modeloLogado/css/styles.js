import styled from "styled-components";

export const StPage = styled.div`
    display:flex;
    width: 100vw;
    height: 100vh;
    background-color:#EAEAEA;
    justify-content:initial;
`;

export const StContainer = styled.div`
    display:flex;
    width: 100%;
    height: 100%;
    flex-direction:column;
`;

export const StHeader = styled.div`
    z-index:2;
    display:block;
    height:50px;
    background-color:#fff;
    border: none;
    border-bottom: 1px solid rgb(218, 218, 218);
    -webkit-box-shadow: 5px 2px 10px 0px rgb(209, 209, 209);
    -moz-box-shadow: 5px 2px 10px 0px rgb(209, 209, 209);
    box-shadow: 5px 2px 10px 0px rgb(209, 209, 209);
    flex-direction:row;
`;

export const StFooter = styled.footer`
    display:block;
    height:50px;

`;

export const StBase = styled.div`
    display:flex;
    height:100%;
`;

export const StNav = styled.div`
    z-index:1;
    display:flex;
    width: 23%;
    background: #FFFFFF;
    border: none;
    border-right: 1px solid rgb(218, 218, 218);
    -webkit-box-shadow: 0px 0px 10px 2px rgb(209, 209, 209);
    -moz-box-shadow: 0px 0px 10px 2px rgb(209, 209, 209);
    box-shadow: 0px 0px 10px 2px rgb(209, 209, 209);
`;

export const StSelection = styled.div`
    display:flex;
    width: 80%;
    flex-direction:column;
`;

export const StBody = styled.div`
    display:flex;
    flex: 1;
    
`;

export const StBodyScrool = styled.div`
    display: flex;
    overflow-y:auto;
    width:100%;
    height: 98%;
    flex-direction: column;
    padding-top: 15px;
    padding-left: 15px;
    padding-right: 15px;
`;

export const StHeaderBase = styled.div`
    display: flex;
    padding:3px 10px 3px 5px;
    
    img {
        display:flex;
        margin:3px;
        width:40px;
    }
`;

export const StNotificacoes = styled.div`
    display: flex;
    padding:3px;
    
    img {
        display:flex;
        margin:3px;
        width:40px;
    }    
`;

export const StMeuPerfil = styled.div`
    display: flex;
    padding:3px;
    align-items:center;
    
    img {
        display:flex;
        margin-left:10px;
        width:40px;
    }

    span {
        display:flex;
        margin-left:2px;
        margin-right:2px;
        width:max-content;        
        height:max-content;
    }
`;