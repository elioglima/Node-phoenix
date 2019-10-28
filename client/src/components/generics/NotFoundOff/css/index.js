import styled from "styled-components";

export const StBase = styled.div`
    display:flex;    
    width: 100vw;
    height: 100vh;
    background-color: #FAFAFA;
    align-items: center;
    justify-content: center;
}
`;

export const StContainers = styled.div`
    display:flex;    
    font-family: "Poppins", sans-serif;
    font-size: 14px;
    width: 70%;
    height: 50%;
    flex-direction:column;
    align-items: center;
`;

export const StTitulo = styled.div`
    display:flex;    
    font-weight: 500;
    font-size: 48px;
    line-height: 72px;
    letter-spacing: 0.01em;
    color: #000000;
`;

export const StDescritivo = styled.div`
    display:flex;    
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 21px;
    letter-spacing: 0.01em;
    color: #C4C4C4;
    text-align: center;
    padding: 15px;
`;

export const StBTPainel = styled.button`
    width: auto;
    background: #0683F5;
    border-radius: 5px;

    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 27px;
    text-align: center;
    letter-spacing: 0.2em;
    color: #FFFFFF;
    border: none;
    padding: 5px 10px 5px 10px;
    cursor:pointer;

    :hover {
      background: #408FD9;
    }

    :active {
      background: #004382;
    }
`;