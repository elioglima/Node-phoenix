import * as APP from "../../../src/applications";

export const dispPainelControle = () => dispatch => {
    return dispatch(APP.dispPainelControle());
};

export const dispModulos = () => dispatch => {
    return dispatch(APP.dispModulos());
};

export const dispSair = () => dispatch => {
    return dispatch(APP.dispSair());
};
