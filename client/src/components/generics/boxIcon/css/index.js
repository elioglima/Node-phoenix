import styled from "styled-components";

export const StContainers = styled.div`
    display:flex;    
    align-self:stretch;
    flex-direction:row;
    padding: 10px 10px 8px 10px;
    background: #FFFFFF;
    border: 1px solid rgba(165, 167, 168, 0.38);
    box-sizing: border-box;
    border-radius: 9px;
    margin-right:8px;
`;

export const StBaseDesc = styled.div`
    display:flex;    
    flex-direction:column;
    margin-right:8px;
    justify-content:space-between;
`;

export const StTitulo = styled.div`
    display:flex;    
    padding: 4px;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 19px;
    line-height: 22px;
    letter-spacing: 0.1em;
    color: #929292;
`;

export const StDesc = styled.div`
    display:flex;    
    padding: 4px 0 4px 0;
    font-family: Poppins;
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 18px;
    letter-spacing: 0.01em;
    color: #A3A1A1;    
`;

export const StCount = styled.div`    
    display:flex;    
    align-items: flex-end;
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 22px;
    text-align: right;
    letter-spacing: 0.01em;
    color: #6FA5B6;
    padding: 0 3px 1px 3px;
`;


export const StIcone = styled.div`
    display: block;
    background:url(${props => props.src && props.src}); 
    background-repeat: no-repeat;
    background-position:center;
    background-size: auto;
    width: 47px;
    height: 60px;
    margin-right:8px;    

`;
