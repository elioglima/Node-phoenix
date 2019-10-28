import React, { Component } from "react";
import { connect } from "react-redux";
import { Logo } from "./styled.js";

class Objeto extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <Logo src={process.env.PUBLIC_URL + "images/logodev.svg"} />;
    }
}

export default connect(
    null,
    null
)(Objeto);
