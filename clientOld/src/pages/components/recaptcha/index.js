import React, { Component } from 'react';
import { connect } from "react-redux";
import ReCAPTCHA from 'react-google-recaptcha'

class Objeto extends Component {
  constructor(props, context) {
    super(props, context);    
    this.handleCaptchaResponseChange = this.handleCaptchaResponseChange.bind(this);
  }  

  handleCaptchaResponseChange(response) {
    this.setState({
      recaptchaResponse: response,
    });


  }

  render() {
    return (
      <div>
        <ReCAPTCHA
          ref={(el) => { this.recaptcha = el; }}
          sitekey="6LcacrEUAAAAAFUEewdSpadLlMhm3ht8lwGSgIBO-SStt"
          onChange={this.handleCaptchaResponseChange}
        />
      </div>
    );
  };
};

export default connect(null,null)(Objeto)