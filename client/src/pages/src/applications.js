import { push } from "connected-react-router";

export const dispRota = rota => dispatch => {
    dispatch(push(rota));
};
export const dispPainelControle = () => dispatch => dispatch(push("/painel"));
export const dispModulos = () => dispatch => dispatch(push("/modulos"));
export const dispSair = () => dispatch => dispatch(push("/sair"));
