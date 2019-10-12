import styled from "styled-components";

export const CompReactTextFieldControl = styled.div`
    float: left;
    width: 100%;

    ::-webkit-input-placeholder {
        color: #707070;
        font-size: 13px;
    }
    ::-moz-placeholder {
        color: #707070;
        font-size: 13px;
    }
    :-ms-input-placeholder {
        color: #707070;
        font-size: 13px;
    }
    ::placeholder {
        color: #707070;
        font-size: 13px;
    }

`;

export const CompReactTextFieldControlLabel = styled.div`
    font-family: 'Poppins', sans-serif;
    padding: 10px 5px 0px 5px;
    font-size: 17px;
    letter-spacing: 1px;
    color: #575757;
    font-weight: 'Light';
`;

export const CompReactTextFieldControlInput = styled.div`
    padding: 5px 15px 5px 5px;
    input {
        font-family: 'Poppins', sans-serif;
        padding: 8px 8px 8px 8px;
        font-size: 14px;
        width: 100%;
        border-radius: 5px;
        border: 1px solid #81BEEB;
        color: rgb(158, 165, 172);
        font-family: 'Poppins';
        letter-spacing: 2px;
        font-size: 18px;
        text-indent: 0.01px;
        font-weight: 'Light';
        outline: 0;
    }
    input:focus {
        background-color: #f3f8f0;
        color: #6599ad;
    }
    input::-webkit-input-placeholder {
        color: #6599ad;
    }
    span {
        color:red;
    }
`;