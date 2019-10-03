import React, { Component } from 'react';
import {
    BASE,
    Caption,
    Thead,
    TheadTR,
    TheadTrTh,
    TBody,
    TBodyTr,
    TBodyTrTd
} from './styled'

const Colunas = [
    { 
        name: 'nome', 
        title:'Nome Completo' 
    },{ 
        name: 'nome', 
        title:'Documento' 
    }
]

const Rows = [
    ['Elio Gonçalves de Lima', '216.399.218-77'] 
]

class index extends Component {
    render() {
        return (
            <BASE>
                <Caption>Lista de Usuários</Caption>
                <Thead>
                    {Colunas.map(c => {
                        return <TheadTrTh>{c.title}</TheadTrTh>
                    })}
                </Thead>
                    <TBody>
                        { Rows.map(r => {
                                return (
                                    <TBodyTr>
                                        {r.map(c => {
                                                return <TBodyTrTd>{c}</TBodyTrTd>
                                        })}
                                    </TBodyTr>
                                )
                         }) }
                    </TBody>
                    {/* <tfoot>
                        <tr>
                            <th>Name</th>
                            <th>Instrument</th>
                        </tr>
                    </tfoot> */}
            </BASE>
        );
    }
}

export default index;