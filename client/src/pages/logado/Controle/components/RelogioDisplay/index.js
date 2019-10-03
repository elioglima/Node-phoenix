import React, { Component } from 'react';
import { BASE, ICONE, EXIBICAO } from './styled'

class index extends Component {

    countingSecond() {
        let d = new Date();
        let day = parseInt(d.getDay());
        let month = parseInt(d.getMonth());
        let date = parseInt(d.getDate());
        let year = parseInt(d.getFullYear());
        let time = d.toLocaleTimeString();

        if (day <= 9) day = "0" + day;
        if (month <= 9) month = "0" + month;
        if (date <= 9) date = "0" + date;
        this.setState({
            day,
            month,
            date,
            year,
            time,
            data_exibicao:
                this.state.day +
                "/" +
                this.state.month +
                "/" +
                this.state.year +
                " " +
                this.state.time
        });
    }

    constructor(props) {
        super(props);

        let d = new Date();
        let day = parseInt(d.getDay());
        let month = parseInt(d.getMonth());
        let date = parseInt(d.getDate());
        let year = parseInt(d.getFullYear());
        let time = d.toLocaleTimeString();

        if (day <= 9) day = "0" + day;
        if (month <= 9) month = "0" + month;
        if (date <= 9) date = "0" + date;

        this.state = {
            day,
            month,
            date,
            year,
            time,
            data_exibicao: day + "/" + month + "/" + year + " " + time,
        };

        this.countingSecond = this.countingSecond.bind(this);
    }

    componentDidMount = () => {
        this.timeout = setInterval(this.countingSecond, 1000);
    };

    render() {
        return (
            <BASE>
                <ICONE src={process.env.PUBLIC_URL +"images/icones/ico_relogio.svg"} />
                <EXIBICAO>{this.state.data_exibicao}</EXIBICAO>
            </BASE>
        );
    }
}

export default index;