import React, { Component } from "react";
import { connect } from "react-redux";
import * as Actions from "../src/actions";

class Objeto extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <div>Pagina não localizada</div>
            </div>
        );
    }
}

export default connect(
    null,
    Actions
)(Objeto);
