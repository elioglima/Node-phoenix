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

export default props => {
    console.log("ok", props);
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
                        <Linhas>
                            {r.map(c => {
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

    return <div />;
};
