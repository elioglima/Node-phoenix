import React, { Component } from "react";

export const PAINEL = () => {
    return (
        <div>
            <img src={process.env.PUBLIC_URL + "images/temp/historico.svg"} />
        </div>
    );
};

export const MANAGER_TASK = () => {
    return <div>MANAGER_TASK</div>;
};

export const MESSAGE = () => {
    return <div>MESSAGE</div>;
};

export const CONTATO = () => {
    return <div>CONTATO</div>;
};

export const ATENDIMENTO = () => {
    return <div>ATENDIMENTO</div>;
};
