import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { push } from "connected-react-router";

import libDoc from '../../libs/fn_docs'
import SelectField from "../../components/html/SelectField";
import ButtonField from "../../components/html/ButtonField";
import Documento from "../../components/html/DocField";
import "./css/styles.css";

import { consultaDocumento } from '../../redux/Actions/consultaDocumento'
import { logarShow } from '../../redux/Actions/logar'

const lista = [
    { value: 1, label: "Centro Maxtriz", sel: false },
    { value: 2, label: "Zona Leste", sel: false },
    { value: 3, label: "Zona Norte", sel: false },
    { value: 4, label: "Santos", sel: false }
];

const Classe = () => {

    const dispatch = useDispatch()
    const { Registro, KeyClient } = useSelector(state => state.consultaDocumento)

    const [EmpresaID, setEmpresaID] = useState(1);
    const [Doc1, setDoc1] = useState('216.399.218-77');
    const [MsgErroSend, setMsgErroSend] = useState('');
    const [DocMsgVErroalidacao, setDocMsgVErroalidacao] = useState('');
    
    useEffect(() => {
        if (libDoc.Valida(Registro.Doc1)) {
            dispatch(logarShow({
                EmpresaID:Registro.EmpresaID,
                Documento:Registro.Doc1,
                KeyClient
            }))
        }
    }, [Registro])

    const OnChangeSelectField = e => {
        setEmpresaID(e)
    };

    const OnChangeChangeDocs = e => {
        setDoc1(e)
    }
    const onProximaPagina = async e => {
        dispatch(consultaDocumento({EmpresaID:EmpresaID, Documento:Doc1}))
    }

    return (
        <div className="Passo01">
                <div className="logo">
                    <img
                        src={
                            process.env.PUBLIC_URL + "/images/logo_program.svg"
                        }
                    />
                </div>
                <div className="inputs">
                    <SelectField
                        nome="tipo"
                        valor={EmpresaID}
                        titulo="Tipo de Acesso"
                        options={lista}
                        onChange={OnChangeSelectField}
                        MsgErro={DocMsgVErroalidacao}
                        />
                    <Documento
                        nome="doc"
                        placeholder="informe cpf ou cnpj"
                        valor={Doc1}
                        titulo="Documento de Acesso"
                        onChange={OnChangeChangeDocs}
                        />
                    <ButtonField
                        nome="email"
                        valor="Continuar"
                        onCLick={onProximaPagina}
                    />
                    <span className="CompReactTextFieldControlLabelErro">
                        {MsgErroSend}
                    </span> 

                    <div className="linha">
                        <span className="esquecimeuemail">
                            esqueci meu email
                        </span>
                    </div>
                </div>
            </div>
    )
}

export default Classe