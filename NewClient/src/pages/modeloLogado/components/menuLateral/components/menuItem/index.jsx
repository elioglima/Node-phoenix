import React from 'react';
import { StBase, StIco, StValue } from './css'
import Icone from '../../../../../../components/iconeSvg'

const ColorDisabled = '#C2CFE0'
const ColorActived = '#109CF1'

const objeto = (props) => {
    return (
        <StBase>
            <StIco><Icone name={props.ico} actived={props.actived} colorActived={ColorActived} colorDisabled={ColorDisabled}/></StIco>
            <StValue color={props.actived ? props.colorActived || ColorActived : props.colorDisabled || ColorDisabled } >{props.text}</StValue>            
        </StBase>
    );
};

export default objeto;