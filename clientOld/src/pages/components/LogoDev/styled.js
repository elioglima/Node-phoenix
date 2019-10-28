import styled from "styled-components";

export const Logo = styled.svg`
    display: flex;
    width: 100%;
    height: 40px;
    background: url(${props => props.src}) no-repeat;
    background-size: 40%;
    background-position: 43% 90%;
    background-color: rgb(2, 65, 90);
`;
