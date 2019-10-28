import React, { Component } from "react";
import { Base } from './css/styled'
import Historico from '../components/Historicos'


export default () => {
    return (
        <Base>
        <Historico />
        <div width={'100%'}>
            <img src={process.env.PUBLIC_URL + "images/temp/historico.svg"} width={'100%'} height={'1000px'} />
            <img src={process.env.PUBLIC_URL + "images/temp/historico.svg"} width={'100%'} height={'1000px'} />
        </div>
        </Base>
    );
};
