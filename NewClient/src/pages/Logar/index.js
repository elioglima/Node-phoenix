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

import { setShowSate, acessoShow } from '../../redux/Actions/show'


const Objeto = () => {

    const dispatch = useDispatch()
    const [SenhaEncode, setSenhaEncode] = useState(1);
    const [SenhaEncodeMsgErro, setSenhaEncodeMsgErro] = useState(1);
    const [MsgErroSend, setMsgErroSend] = useState('');
    

    const { Registro, KeyClient } = useSelector(state => state.consultaDocumento)
    
    useEffect(() => {
        console.log(KeyClient,Registro)
    }, [])

    const onClickVoltar = () => {
        dispatch(setShowSate({'disparo':''}))
        dispatch(acessoShow({}))
    }

    const onChangeSenha = e =>{
        setSenhaEncode(e)
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
                        onCLick={e => this.ProximaPagina(e, 3)}
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