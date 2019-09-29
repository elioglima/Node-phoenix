import styled from "styled-components";

export const HeaderBase = styled.div`
    display: flex;
    align-items: flex-start;
    width: 100%;
    height: 6%;
    background-color: #fff;
    border: none;
    border-bottom: 1px solid rgb(218, 218, 218);
`;

export const Perfil = styled.div`
    display: flex;
    width: 90px;
    margin: auto 4px;
    padding-right: 10px;
`;

export const PerfilFoto = styled.div`
    float: left;
    margin-right: 2%;
    background: url(${props => props.src}) no-repeat;
    background-size: 100%;
    background-position: 60% 25%;
    border: 4px solid rgb(73, 151, 230);
    border-radius: 50%;
    display: flex;
    border: 2px solid rgb(73, 151, 230);
    width: 40px;
    height: 38px;
`;

export const Dropdown = styled.div`
    display: flex;
    width: 15px;
    padding-left: 5px;
    margin-left: 5px;
`;

export const Notificacoes = styled.div`
    display: flex;
    width: 200px;
    margin-left: auto;
`;

export const SVGNotificacoes = styled.svg`
    margin-left: auto;
    margin-top: 5px;
`;

export const Pesquisa = styled.div`
    display: flex;
    align-items: flex-start;
    width: 100%;
    padding: 8px 8px 8px 8px;
`;

export const PesquisaImg = styled.img``;

export const PesquisaInput = styled.input`
    margin-top: 2px;
    width: 100%;
    height: 35px;
    border: none;

    font-size: 15px;
    letter-spacing: 2px;
    color: #90a0b7;

    :focus {
        outline: none;
    }

    ::placeholder {
        /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: #90a0b7;
        opacity: 1; /* Firefox */
        font-size: 15px;
        letter-spacing: 2px;
    }

    :-ms-input-placeholder {
        /* Internet Explorer 10-11 */
        color: #90a0b7;
    }

    ::-ms-input-placeholder {
        /* Microsoft Edge */
        color: #90a0b7;
    }
`;
