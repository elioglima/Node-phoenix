import { push } from "connected-react-router";
import base64 from 'base-64';

  export const dispHome = (e) => dispatch => {
    if (e !== null) {
      e.preventDefault()
    }
    dispatch(push("/"));
  }

  export const dispInicio = (e) => dispatch => {
    if (e !== null) {
      e.preventDefault()
    }
    dispatch(push("/logado"));
  }

  export const dispAjuda  = (e) => dispatch => {
    e.preventDefault()
    dispatch(push("/logado/ajuda"));
  }    

  export const dispDocs  = (e) => dispatch => {
    if (e !== null) {
      e.preventDefault()
    }

    dispatch(push("/Docs"));
  } 

  export const disPesquisaGeral = (e, inp_pesquisa) => dispatch => {    
    e.preventDefault()
    localStorage.setItem('inp_pesquisa', base64.encode(inp_pesquisa));  
    dispatch(push('/pesquisageral'))
  }

  export const dispSair = (e) => dispatch => {
    e.preventDefault()
    localStorage.setItem('logado', '') 
    localStorage.setItem('A1', '')  
    localStorage.setItem('cad', '')  
    dispatch(push("/"));
  }  

  // CADASTROS
  export const dispCadUsuario = (e) => dispatch => {
    e.preventDefault()
    dispatch(push("/cadastrousuario"));
  } 

  export const dispCadGrupoAcessoUsuarios = (e) => dispatch => {
    e.preventDefault()
    dispatch(push("/grupoacessousuario"));
  } 
  
  export const dispPesqCadGrupoAcessoUsuarios = (e) => dispatch => {
    e.preventDefault()
    dispatch(push("/grupoacessousuario"));
  } 