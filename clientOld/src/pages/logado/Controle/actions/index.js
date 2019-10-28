import { push } from "connected-react-router";

export const dispSair = () => dispatch => {
    return dispatch(push("/sair"));
};
