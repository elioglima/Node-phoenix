import React from 'react';
import { StBase, StFoto, StValue,StNome, StEmail } from './css'

const DadosPerfil = {
    nome: 'Elio Lima',
    email: 'diretor.sis@gmail.com',
    foto:  'iVBORw0KGgoAAAANSUhEUgAAAFgAAABSCAYAAADQDhNSAAAABHNCSVQICAgIfAhkiAAAFN5JREFUeJztnHl0FFW'
}

const imageURL = require('../../../../../../assets/temp/fotoPerfil.png')
const Foto = ({ imageURL }) =>  <img src={imageURL} width={100} />

const objeto = (props) => {
    return (
        <StBase>
            <StFoto><Foto imageURL={imageURL} /></StFoto>
            <StValue >
                <StNome>{DadosPerfil.nome}</StNome>
                <StEmail>{DadosPerfil.email}</StEmail>
            </StValue>            
        </StBase>
    );
};

export default objeto;