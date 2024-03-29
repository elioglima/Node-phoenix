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
    display:flex;
    height:50px;
    background-color:#fff;
    border: none;
    border-bottom: 1px solid rgb(218, 218, 218);
    -webkit-box-shadow: 5px 2px 10px 0px rgb(209, 209, 209);
    -moz-box-shadow: 5px 2px 10px 0px rgb(209, 209, 209);
    box-shadow: 5px 2px 10px 0px rgb(209, 209, 209);

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
    width: 25%;
    background: #FFFFFF;
    border: none;
    border-right: 1px solid rgb(218, 218, 218);
    -webkit-box-shadow: 0px 0px 10px 2px rgb(209, 209, 209);
    -moz-box-shadow: 0px 0px 10px 2px rgb(209, 209, 209);
    box-shadow: 0px 0px 10px 2px rgb(209, 209, 209);
`;

export const StSelection = styled.div`
    display:flex;
    width: 75%;
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


