import React from 'react'
import DropDownList from "../../../../../components/html/DropDownList";
import ProcessBarRisca from "../../../../../components/html/ProcessBarRisca";
import SelecaoPesquisa from "./components/SelecaoPesquisa";


import { 
    Base, 
    Controle,
    Header,
    HeaderTitulo,
    HeaderActions,
    DataSelecionada,
    Divisoria
} from "./styled";

const DropDownListData = [
    {
        value: 0,
        title: 'Esta Semana'
    }, 
    {
        value: 1,
        title: 'Este Mês'
    }
]

export default (props) => {
    return (
        <Base>
            {/* <Controle>
                <Header>
                    <HeaderTitulo>Histórico</HeaderTitulo>
                    <HeaderActions>
                        <DropDownList titulo={'Exibir'} data={DropDownListData} />
                    </HeaderActions>
                </Header>
                <ProcessBarRisca />
                <DataSelecionada>23 Dezembro, Segunda-Feira</DataSelecionada>
                <SelecaoPesquisa />
                <Divisoria />
                <BoxPedido>
                    <BoxPedidoHeader></BoxPedidoHeader>
                    <BoxPedidoBody></BoxPedidoBody>
                    <BoxPedidoFooter>
                        <BoxPedidoFooterPerfil>George Fidelis</BoxPedidoFooterPerfil>
                        <BoxPedidoFooterInfo>Aprovado</BoxPedidoFooterInfo>
                    </BoxPedidoFooter>
                </BoxPedido>
                
            </Controle> */}
        </Base>
    )
}