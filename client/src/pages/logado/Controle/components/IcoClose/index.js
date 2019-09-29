import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
const SVG = styled.svg`
    margin-left: auto;
    cursor: pointer;
    font-size: 16px;
`;

class Objeto extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <SVG
                onClick={this.props.onClick}
                width="24"
                height="23"
                viewBox="0 0 24 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M23.5 11.5C23.5 17.5553 18.3715 22.5 12 22.5C5.62846 22.5 0.5 17.5553 0.5 11.5C0.5 5.44471 5.62846 0.5 12 0.5C18.3715 0.5 23.5 5.44471 23.5 11.5Z"
                    fill="url(#paint0_linear)"
                    stroke="#F7685B"
                />
                <path
                    d="M14.014 17L12.194 14.424L10.682 17H7.14L10.402 11.89L7 7.088H10.682L12.432 9.566L13.888 7.088H17.43L14.224 12.1L17.696 17H14.014Z"
                    fill="#F7685B"
                />
                <defs>
                    <linearGradient
                        id="paint0_linear"
                        x1="12"
                        y1="0"
                        x2="12"
                        y2="23"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stop-color="white" />
                        <stop offset="1" stop-color="white" stop-opacity="0" />
                    </linearGradient>
                </defs>
            </SVG>
        );
    }
}

export default connect(
    null,
    null
)(Objeto);
