import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { 
    StBASE, 
    StLogoEmpresa, 
    StCONTAINER,
    StBaseImputs,
    StCompReactTextFieldControlLabelErro,
    StEsqueciMeuEmail,
    StLINHA
} from './css/styled';

import libDoc from '../../libs/fn_docs'
import SelectField from "../../components/html/SelectField";
import ButtonField from "../../components/html/ButtonField";
import Documento from "../../components/html/DocField";

import { consultaDocumento } from '../../redux/Actions/consultaDocumento'
import { setShowSate, logarShow } from '../../redux/Actions/show'

const lista = [
    { value: 1, label: "Centro Maxtriz", sel: false },
    { value: 2, label: "Zona Leste", sel: false },
    { value: 3, label: "Zona Norte", sel: false },
    { value: 4, label: "Santos", sel: false }
];

const Classe = () => {

    const dispatch = useDispatch()
    const { disparo } = useSelector(state => state.show)
    const data_cd = useSelector(state => state.consultaDocumento)

    const [EmpresaID, setEmpresaID] = useState(1);
    const [Doc1, setDoc1] = useState('216.399.218-77');
    const [MsgErroSend, setMsgErroSend] = useState('');
    const [DocMsgVErroalidacao, setDocMsgVErroalidacao] = useState('');
    
    // useEffect(() => {
    //     console.log('data_cd.msg',data_cd)
    //     setMsgErroSend(data_cd.msg)

    //     if (disparo !== 'logar') return
    //     if (data_cd.TotalRegistros == 0) return

    //     if (libDoc.Valida(data_cd.Registro.Doc1)) {
    //         dispatch(logarShow({
    //             EmpresaID:data_cd.Registro.EmpresaID,
    //             Documento:data_cd.Registro.Doc1,
    //             KeyClient:data_cd.KeyClient
    //         }))

    //     }

    // }, [disparo && data_cd.err])

    const OnChangeSelectField = e => {
        setEmpresaID(e)
    };

    const OnChangeChangeDocs = e => {
        setDoc1(e.valor)
    }
    const onProximaPagina = async e => {
        dispatch(consultaDocumento({disparo:'logar', EmpresaID, Doc1}))
    }

    return (
        <StBASE>
            <StCONTAINER>
                <StLogoEmpresa src={require("../../assets/images/logo_program.svg")} ></StLogoEmpresa>
                <StBaseImputs>
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
                    <StCompReactTextFieldControlLabelErro>{MsgErroSend}</StCompReactTextFieldControlLabelErro> 
                    <StLINHA>
                        <StEsqueciMeuEmail className="esquecimeuemail">esqueci meu email</StEsqueciMeuEmail>
                    </StLINHA>
                </StBaseImputs>
            </StCONTAINER>
        </StBASE>
    )
}

export default Classe