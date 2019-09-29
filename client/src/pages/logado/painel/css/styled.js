import styled from "styled-components";

export const LogoEmpresa = styled.div`
    display: ${props => (!props.src ? "none" : "block")};
    float: left;
    width: 90%;
    height: 20%;
    background: url(${props => props.src}) no-repeat;
    background-size: 50%;
    background-position: 50% 50%;
    margin-top: auto;
    margin-bottom: 20px;
`;
