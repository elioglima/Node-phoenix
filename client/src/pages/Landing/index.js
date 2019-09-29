import React from "react";

import {
    Header,
    Destaque,
    Diferencial,
    Sobre,
    Clientes,
    Cta,
    Footer,
    ColLeft,
    ColRight,
    TitleRow,
    Card,
    Button
} from "./styles.js";

import styled from "styled-components"

const Teste = styled.div`
    background-color: blue;
`

const Landing = () => {
    return (
        <div>
            {/* Header */}

            <Header>
                <div>
                    {/* logo */}
                    <img src="https://via.placeholder.com/120" alt="" />
                </div>
            </Header>

            {/* Destaque */}
            <Destaque>
                {/* col-left */}
                <ColLeft></ColLeft>

                {/* col-right */}
                <ColRight></ColRight>
            </Destaque>

            {/* Diferencial */}
            <Diferencial>
                {/* title-row */}
                <TitleRow></TitleRow>

                {/* cards */}
                <div className="cards">
                    <div>
                        {/* card */}
                        <Card></Card>

                        {/* card */}
                        <Card></Card>

                        {/* card */}
                        <Card></Card>

                        {/* card */}
                        <Card></Card>
                    </div>

                    <div>
                        {/* card */}
                        <Card></Card>

                        {/* card */}
                        <Card></Card>

                        {/* card */}
                        <Card></Card>

                        {/* card */}
                        <Card></Card>
                    </div>
                </div>
            </Diferencial>

            {/* Sobre */}
            <Sobre>
                {/* col-left */}
                <ColLeft></ColLeft>

                {/* col-right */}
                <ColRight></ColRight>
            </Sobre>

            {/* Clientes */}
            <Clientes>
                {/* title-row */}
                <TitleRow></TitleRow>

                {/* col-logos */}
                <div></div>
            </Clientes>

            {/* Call To Action */}
            <Cta>
                {/* col-left */}
                <ColLeft></ColLeft>

                {/* col-right */}
                <ColRight></ColRight>
            </Cta>

            {/* Footer */}
            <Footer>
                {/* logo */}

                {/* copyright */}

                {/* social */}
            </Footer>
            
           

        </div>
    );
};

export default Landing;
