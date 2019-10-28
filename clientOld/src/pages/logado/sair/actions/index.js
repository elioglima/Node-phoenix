import { push } from "connected-react-router";

export const dispAcesso = () => dispatch => {
    return dispatch(push("/"));
};
