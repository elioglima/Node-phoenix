import { push } from "connected-react-router";

export const dispPainelControle = () => dispatch => dispatch(push("/painel"));
export const dispModulos = () => dispatch => dispatch(push("/modulos"));
export const dispSair = () => dispatch => dispatch(push("/sair"));
