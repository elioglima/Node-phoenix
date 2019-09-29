import styled from "styled-components";

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
