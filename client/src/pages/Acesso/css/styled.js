import styled from "styled-components";

export const StBASE = styled.div`
    width: 98vw;
    height: 90vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const StCONTAINER = styled.div`
    float: left;
    width: 650px;
    height: 280px;
`;

export const StLogoEmpresa = styled.div`
    float: left;
    width: 47%;
    height: 93%;
    margin-right: 2%; 
    background: url(${props => props.src}) no-repeat;
    background-size: 80%;
    background-position: 65% 40%;
    border-right: 1px solid black;
    margin-top: 6%;
`;

export const StBaseImputs = styled.div`
    float: left;
    width: 40%;
    height: 100%;
    padding-top: 40px;
`;

export const StCompReactTextFieldControlLabelErro = styled.div`
`;

export const StEsqueciMeuEmail = styled.div`
    font-family: "Poppins", sans-serif;
    font-weight: "Light";
    color: #0683f5;
    font-size: 14px;
    letter-spacing: 1px;
`;

export const StLINHA = styled.div`
    float: left;
    width: 650px;
    height: 280px;
`;
