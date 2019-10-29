import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FotoUser } from "./css/styled";
import ButtonField from "../../components/html/ButtonField";
import SenhaAcesso from "../../components/html/PassWordField";
import { imageURL } from './foto'

import {
    StBASE,
    StCONTAINER,
    StBaseImputs,
    StBotoesTitle,
    StBaseFotoUser,
    StLogoEmpresa,
    StCompReactTextFieldControlLabelErro,
    StLinha,
    StEsqueciMinhaSenha

} from './css/styled';

import { logar } from '../../redux/Actions/logar'
import { setShowSate, acessoShow } from '../../redux/Actions/show'


const Objeto = () => {

    const dispatch = useDispatch()
    const [SenhaEncode, setSenhaEncode] = useState('123');
    const [SenhaEncodeMsgErro, setSenhaEncodeMsgErro] = useState('');
    const [MsgErroSend, setMsgErroSend] = useState('');
    const payload_show = useSelector(state => state.show)
    const dataChange = useSelector(state => state.dataChange)

    useEffect(() => {
        if (!dataChange.err) return
        setMsgErroSend(dataChange.msg)
    }, [dataChange])

    const onClickVoltar = () => {
        dispatch(acessoShow({}))
    }

    const onChangeSenha = e => {
        setSenhaEncode(e)
    }

    const onLogar = e => {
        dispatch(logar({
            disparo: 'modulos',
            KeyClient: dataChange.KeyClient,
            EmpresaID: dataChange.EmpresaID,
            Documento: dataChange.Doc1,
            PSWD: require("../../libs/fn_hash").sha256(SenhaEncode)
        }))
    }

    return (
        <StBASE>
            <StCONTAINER>
                <StLogoEmpresa src={require("../../assets/images/logo_program.svg")} ></StLogoEmpresa>
                <StBaseImputs>
                    <StBotoesTitle onClick={onClickVoltar}>
                        <span onClick={onClickVoltar}>voltar</span>
                    </StBotoesTitle>
                    <StBaseFotoUser>
                        <FotoUser
                            src={imageURL}
                        />
                    </StBaseFotoUser>
                    <SenhaAcesso
                        tipo={"password"}
                        nome="SenhaAcesso"
                        placeholder="senha de acesso"
                        valor={SenhaEncode}
                        titulo="Senha de Acesso"
                        onChange={onChangeSenha}
                        MsgErro={SenhaEncodeMsgErro}
                    />
                    <ButtonField
                        nome="email"
                        valor="Continuar"
                        onCLick={onLogar}
                    />
                    <StCompReactTextFieldControlLabelErro>{MsgErroSend}</StCompReactTextFieldControlLabelErro>
                    <StLinha>
                        <StEsqueciMinhaSenha>esqueci meu email</StEsqueciMinhaSenha>
                    </StLinha>
                </StBaseImputs>
            </StCONTAINER>
        </StBASE>
    )
}

export default Objeto