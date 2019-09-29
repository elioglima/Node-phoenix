import React, { Component } from "react";
import { connect } from "react-redux";
import * as Actions from "./actions";

class Objeto extends Component {
    constructor(props) {
        super(props);
        localStorage.setItem("KeyClient", "");
        this.props.dispAcesso();
    }

    componentDidMount = () => {
        localStorage.setItem("KeyClient", "");
        this.props.dispAcesso();
    };

    render() {
        return <div></div>;
    }
}

export default connect(
    null,
    Actions
)(Objeto);
