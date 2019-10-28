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

export const StBaseImputs = styled.div`
    float: left;
    width: 40%;
    height: 100%;
    padding-top: 15px;
`;

export const StBotoesTitle = styled.div`
    float: left;
    width: 100%;
    text-align: right;
    padding: 5px 5px 5px 5px;
    color: #0683F5;
    span {
        cursor: pointer;
    }
`;

export const StBaseFotoUser = styled.div`
    float: left;
    width: 100%;
    height: 30%;
    padding-left: 25%;
    padding-top: 30px;
    padding-bottom: 30px;
`;


export const FotoUser = styled.img`
    float: left;
    width: 47%;
    height: 93%;
    margin-right: 2%;
    background: url(${props => props.src}) no-repeat;
    background-size: 100%;
    background-position: 65% 40%;
    border: 4px solid #81beeb;
    margin-top: 6%;
    border-radius: 50%;
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

export const StCompReactTextFieldControlLabelErro = styled.div`
`;

export const StLinha = styled.div`
    float: left;
    width: 98%;
    text-align: right;
    padding: 10px 0px 5px 5px;    
`;

export const StEsqueciMinhaSenha = styled.span`
    font-family: 'Poppins', sans-serif;
    font-weight: 'Light';
    color: #0683F5;
    font-size: 14px;
    letter-spacing: 1px;
`;