import React, { useState, useEffect } from "react";

import {
    BASE,
    Caption,
    Titulo,
    TituloColuna,
    BaseLinha,
    Linhas,
    LinhasColuna
} from "./styled";

import libObj from '../../../../libs/fn_obj'
export default (props) => {
    const [dgColunas, setdgColunas] = useState(
        props.dgColunas ? props.dgColunas : []
    );
    const [dgLinhas, setdgLinhas] = useState(
        props.dgLinhas ? props.dgLinhas : []
    );

    useEffect(() => {        
        setdgLinhas(props.dgLinhas);
    });
    
    return (
        <BASE>
            <Caption>Lista de Usuários</Caption>
            <Titulo>
                {dgColunas.map(c => {
                    if (c.hide == true) return;
                    return (
                        <TituloColuna width={100 / dgColunas.length + "%"}>
                            {c.title}
                        </TituloColuna>
                    );
                })}
            </Titulo>
            <BaseLinha>
                {dgLinhas.map(r => {
                    return (
                        <Linhas onClick={e => {
                            console.log('vrf', r)
                            if (!props.onClickEditar) return false;
                            if (!r[0]) return false;
                            props.onClickEditar(r[0])
                        }}>
                            {r.map((c, key) => {
                                if (dgColunas[key].hide == true) return;
                                return (
                                    <LinhasColuna
                                        width={100 / dgColunas.length + "%"}
                                    >
                                        {c}
                                    </LinhasColuna>
                                );
                            })}
                        </Linhas>
                    );
                })}
            </BaseLinha>
            {/* <tfoot>
                        <tr>
                            <th>Name</th>
                            <th>Instrument</th>
                        </tr>
                    </tfoot> */}
        </BASE>
    );
};
