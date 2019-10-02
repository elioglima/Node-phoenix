import { push } from "connected-react-router";

export const dispPainelControle = e => dispatch => {
    if (e && e !== null) {
        e.preventDefault();
    }
    dispatch(push("/painel"));
};

export const dispHome = e => dispatch => {
    if (e !== null) {
        e.preventDefault();
    }
    dispatch(push("/"));
};

export const dispInicio = e => dispatch => {
    if (e !== null) {
        e.preventDefault();
    }
    dispatch(push("/logado"));
};

export const dispAjuda = e => dispatch => {
    e.preventDefault();
    dispatch(push("/logado/ajuda"));
};

export const dispDocs = e => dispatch => {
    if (e !== null) {
        e.preventDefault();
    }

    dispatch(push("/Docs"));
};
