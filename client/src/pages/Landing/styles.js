import styled from 'styled-components'

export const Header = styled.div`
    background: white;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    height: 80px;
    position: fixed;
    top: 0;
    width: 100%;
    
    & div {
        width: 100%;
        margin: 10px 40px;
        
        & img {
            width: 60px;
        }
    }
`

export const Destaque = styled.div`
    background: url("https://via.placeholder.com/1240x500") no-repeat;
    background-position: center center;
    // background-size: 100%;
    background-size: cover;
    border-radius: 0 0 1000px 0;
    height: 500px;
    margin-top: 80px;

    @media(max-width: 750px){
        border-radius: 0;
        height: 500px;
    }
`

export const Diferencial = styled.div`
    & .cards {
        display: flex;
        flex-direction: column;

        @media(max-width: 750px){
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        
        & div {
            display: flex;
            justify-content: space-around;
            margin: 40px 0;

            @media(max-width: 750px){
                display: block;
            }
        }
    }

    
`

export const Sobre = styled.div`
    background: linear-gradient(90deg, #4B6CB7 0%, #182848 100%);
    height: 300px;
`

export const Clientes = styled.div`
    background: url("https://via.placeholder.com/1240x500") no-repeat;
    background-position: center center;
    // background-size: 100%;
    background-size: cover;
    height: 300px;
`

export const Cta = styled.div`
    // background: #f00;
    height: 300px;
`

export const Footer = styled.div`
    background: linear-gradient(90deg, #182848 0%, #4B6CB7 100%);
    height: 80px;
`

export const ColLeft = styled.div`
    // background: #f00;
    display: block;
    height: 100%;
    width: 100%;

    @media(min-width: 750px){
        display: inline-block;
        width: 50%;
    }
`

export const ColRight = styled.div`
    // background: #f0f;
    display: block;
    height: 100%;
    width: 100%;

    @media(min-width: 750px){
        display: inline-block;
        width: 50%;
    }
`

export const TitleRow = styled.div`
    width: 100%;
`

export const Card = styled.div`
    align-items: flex-start;
    display: inline-block;
    width: 260px;
    height: 220px;

    background: #FFFFFF;
    box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
`

export const Button = styled.button`
    ${props => props.background ? 'background: #182848;' : 'background: #ffffff;'}
    border: none;
    border-radius: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    ${props => props.background ? 'color: #ffffff' : 'background: #182848;'}
    cursor: pointer;
    padding: 15px 30px;
    text-transform: uppercase;
`