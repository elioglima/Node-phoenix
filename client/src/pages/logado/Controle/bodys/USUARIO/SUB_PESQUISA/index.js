import React, { Component } from "react";
import DataGrid from '../../../../../components/html/DataGrid'
import {
    GRUPO_MENU,
    GRUPO_MENU_TITULO,
    GRUPO_MENU_ICONES,
    MENU_ACESSO,
    MENU_ACESSO_IMG,
    MENU_BASE,
    MENU_TITULO,
    MENU_DESC,
    MENU_REGS,
    GRUPO_MENU_TITULO_LABEL,
    GRUPO_MENU_TITULO_BOTOES
} from "./css/styled";

export default class Objeto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Registros: [],
            TotalRegistros: 0
        };
    }

    componentDidUpdate() {
        if (this.props.StateKeyPesquisa == true) {
            this.props.onPesquisarKey(false);
            this.LoadPesquisa();
        }
    }

    componentDidMount() {
        this.LoadPesquisa();
    }

    getMenu = (key, usuario) => {
        return (
            <MENU_ACESSO key={key + "MA"} onClick={e => this.props.onClickEditar(usuario._id)}>
                <MENU_BASE key={key + "MB"}>
                    <MENU_TITULO key={key + "MT"}>{usuario.Nome}</MENU_TITULO>
                    <MENU_DESC key={key + "MD1"}>{usuario.Doc1}</MENU_DESC>
                    <MENU_DESC key={key + "MD2"}>{usuario.Email}</MENU_DESC>
                </MENU_BASE>
            </MENU_ACESSO>
        );
    };

    LoadPesquisa = async () => {
        let { retornoMetoto } = await this.props.dispRAPI(
            "/usuarios/pesquisar/filtro",
            { TextoPesquisa: this.props.HeaderPesquisaInputValue }
        );
        if (retornoMetoto.Erro == false) {
            this.setState({
                Registros: retornoMetoto.Response.Registros,
                TotalRegistros: retornoMetoto.Response.TotalRegistros
            });
        }
    };

    render() {
        return (
            <GRUPO_MENU>
                <GRUPO_MENU_TITULO>
                    <GRUPO_MENU_TITULO_LABEL>
                        Lista de Usuários
                    </GRUPO_MENU_TITULO_LABEL>
                    <GRUPO_MENU_TITULO_BOTOES>
                        <span onClick={e => this.props.onClickNovo()}>
                            Novo
                            </span>
                    </GRUPO_MENU_TITULO_BOTOES>
                </GRUPO_MENU_TITULO>
                <GRUPO_MENU_ICONES>
                    { (() => {
                            if (this.state.Registros.length == 0) 
                                return 'Nenhum registro localizado.'
                            
                            return this.state.Registros.map((Usuario, key) => {
                                return this.getMenu(key, Usuario);
                            })
                        })()
                        }
                </GRUPO_MENU_ICONES>
                <br />
                <DataGrid />
            </GRUPO_MENU>
        )
    }
}
