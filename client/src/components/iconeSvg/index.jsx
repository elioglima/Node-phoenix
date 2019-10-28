import React from 'react'
import Painel from '../../assets/icons/menuItem/painel.svg'

const ColorDisabled = '#C2CFE0'
const ColorActived = '#109CF1'
const widthSVGDefault = 26

const IcoDefault = (props) => {
    return (
        <svg width={widthSVGDefault} height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.49996 3.325H16.6666C16.6896 3.325 16.7189 3.33393 16.7483 3.36479C16.7781 3.39612 16.8 3.44308 16.8 3.5V8.75C16.8 8.80692 16.7781 8.85388 16.7483 8.88521C16.7189 8.91607 16.6896 8.925 16.6666 8.925H2.49996C2.47703 8.925 2.4477 8.91607 2.41831 8.88521C2.38847 8.85388 2.36663 8.80692 2.36663 8.75V3.5C2.36663 3.44308 2.38847 3.39612 2.41831 3.36479C2.4477 3.33393 2.47703 3.325 2.49996 3.325ZM2.49996 12.075H16.6666C16.6896 12.075 16.7189 12.0839 16.7483 12.1148C16.7781 12.1461 16.8 12.1931 16.8 12.25V17.5C16.8 17.5569 16.7781 17.6039 16.7483 17.6352C16.7189 17.6661 16.6896 17.675 16.6666 17.675H2.49996C2.47703 17.675 2.4477 17.6661 2.41831 17.6352C2.38847 17.6039 2.36663 17.5569 2.36663 17.5V12.25C2.36663 12.1931 2.38847 12.1461 2.41831 12.1148C2.4477 12.0839 2.47703 12.075 2.49996 12.075Z" 
                stroke={props.actived ? props.colorActived || ColorActived : props.colorDisabled || ColorDisabled } 
                strokeWidth="1.4"
            />
        </svg>
    )
}
const IcoPainel = (props) => {
    return (
        <svg width={widthSVGDefault}  viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.16667 9.59167H3.5C3.33431 9.59167 3.2 9.45735 3.2 9.29167V3.375C3.2 3.20931 3.33431 3.075 3.5 3.075H8.16667C8.33235 3.075 8.46667 3.20931 8.46667 3.375V9.29167C8.46667 9.45735 8.33235 9.59167 8.16667 9.59167ZM8.16667 15.925H3.5C3.33431 15.925 3.2 15.7907 3.2 15.625V12.875C3.2 12.7093 3.33431 12.575 3.5 12.575H8.16667C8.33235 12.575 8.46667 12.7093 8.46667 12.875V15.625C8.46667 15.7907 8.33235 15.925 8.16667 15.925ZM16.5 15.925H11.8333C11.6676 15.925 11.5333 15.7907 11.5333 15.625V9.70833C11.5333 9.54265 11.6676 9.40833 11.8333 9.40833H16.5C16.6657 9.40833 16.8 9.54265 16.8 9.70833V15.625C16.8 15.7907 16.6657 15.925 16.5 15.925ZM11.5333 6.125V3.375C11.5333 3.20931 11.6676 3.075 11.8333 3.075H16.5C16.6657 3.075 16.8 3.20931 16.8 3.375V6.125C16.8 6.29069 16.6657 6.425 16.5 6.425H11.8333C11.6676 6.425 11.5333 6.29069 11.5333 6.125Z" 
                stroke={props.actived ? props.colorActived || ColorActived : props.colorDisabled || ColorDisabled } 
                strokeWidth="1.4"
            />
        </svg>
    )
}
const IcoEmail = (props) => {
    return (
        <svg width={widthSVGDefault} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.37496 5.00058V4.99999C2.37496 4.46535 2.80778 4.03333 3.33329 4.03333H16.6666C17.1967 4.03333 17.6333 4.46993 17.6333 4.99999V15C17.6333 15.5301 17.1967 15.9667 16.6666 15.9667H3.33329C2.80331 15.9667 2.36677 15.5302 2.36663 15.0002C2.36663 15.0002 2.36663 15.0001 2.36663 15L2.37496 5.00058Z" 
            stroke={props.actived ? props.colorActived || ColorActived : props.colorDisabled || ColorDisabled } 
            strokeWidth="1.4"/>
        <path d="M2.5 5L10 10L17.5 5" 
            stroke={props.actived ? props.colorActived || ColorActived : props.colorDisabled || ColorDisabled } 
            strokeWidth="1.4"/>
        </svg>
    )
}
const IcoContatos = (props) => {
    return (
        <svg width={widthSVGDefault} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.81118 6.11113C6.81118 4.34912 8.23806 2.92224 10.0001 2.92224C11.7621 2.92224 13.189 4.34912 13.189 6.11113C13.189 7.87315 11.7621 9.30002 10.0001 9.30002C8.23806 9.30002 6.81118 7.87315 6.81118 6.11113ZM2.92229 14.8611C2.92229 14.4717 3.11181 14.0788 3.54729 13.6769C3.98752 13.2706 4.63079 12.9041 5.39805 12.5967C6.9337 11.9815 8.78966 11.6722 10.0001 11.6722C11.2105 11.6722 13.0664 11.9815 14.6021 12.5967C15.3693 12.9041 16.0126 13.2706 16.4528 13.6769C16.8883 14.0788 17.0778 14.4717 17.0778 14.8611V17.0778H2.92229V14.8611Z" 
            stroke={props.actived ? props.colorActived || ColorActived : props.colorDisabled || ColorDisabled } 
            strokeWidth="1.4"/>
        </svg>
    )
}
const IcoAtendimento = (props) => {
    return (
        <svg width={widthSVGDefault} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0)">
            <path d="M4.99996 14.3H4.71001L4.50499 14.505L2.36663 16.6434V3.33335C2.36663 2.80329 2.80323 2.36669 3.33329 2.36669H16.6666C17.1967 2.36669 17.6333 2.80329 17.6333 3.33335V13.3334C17.6333 13.8634 17.1967 14.3 16.6666 14.3H4.99996Z" 
                stroke={props.actived ? props.colorActived || ColorActived : props.colorDisabled || ColorDisabled } 
                strokeWidth="1.4"/>
            </g>
            <defs>
            <clipPath id="clip0">
            <rect width="20" height="20" fill="white"/>
            </clipPath>
            </defs>
        </svg>
    )
}

const IcoModulos = (props) => {
    return (
        <svg width={widthSVGDefault} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.49996 4.03333H17.5C17.5717 4.03333 17.6333 4.09493 17.6333 4.16666V15.8333C17.6333 15.9051 17.5717 15.9667 17.5 15.9667H2.49996C2.42823 15.9667 2.36663 15.9051 2.36663 15.8333V4.16666C2.36663 4.09493 2.42823 4.03333 2.49996 4.03333Z" 
                stroke={props.actived ? props.colorActived || ColorActived : props.colorDisabled || ColorDisabled } 
            strokeWidth="1.4"/>
            <rect x="6.5" y="3.33333" width="1.16667" height="13.3333" 
            fill={props.actived ? props.colorActived || ColorActived : props.colorDisabled || ColorDisabled }/>
            <rect x="12.3334" y="3.33333" width="1.16667" height="13.3333" 
            fill={props.actived ? props.colorActived || ColorActived : props.colorDisabled || ColorDisabled }/>
        </svg>
    )
}

const IcoMais = (props) => {
    return (
        <svg width={widthSVGDefault}viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.00004 8.33333C4.08337 8.33333 3.33337 9.08333 3.33337 9.99999C3.33337 10.9167 4.08337 11.6667 5.00004 11.6667C5.91671 11.6667 6.66671 10.9167 6.66671 9.99999C6.66671 9.08333 5.91671 8.33333 5.00004 8.33333ZM15 8.33333C14.0834 8.33333 13.3334 9.08333 13.3334 9.99999C13.3334 10.9167 14.0834 11.6667 15 11.6667C15.9167 11.6667 16.6667 10.9167 16.6667 9.99999C16.6667 9.08333 15.9167 8.33333 15 8.33333ZM10 8.33333C9.08337 8.33333 8.33337 9.08333 8.33337 9.99999C8.33337 10.9167 9.08337 11.6667 10 11.6667C10.9167 11.6667 11.6667 10.9167 11.6667 9.99999C11.6667 9.08333 10.9167 8.33333 10 8.33333Z" 
                fill={props.actived ? props.colorActived || ColorActived : props.colorDisabled || ColorDisabled }/>
        </svg>
    )
}

const IcoHideMenu = (props) => {
    return (
        <svg width={widthSVGDefault} viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M2 0C0.895431 0 0 0.89543 0 2V12C0 13.1046 0.89543 14 2 14H12C13.1046 14 14 13.1046 14 12V2C14 0.895431 13.1046 0 12 0H2ZM5 2C4.44772 2 4 2.44772 4 3V11C4 11.5523 4.44772 12 5 12C5.55228 12 6 11.5523 6 11V3C6 2.44772 5.55228 2 5 2Z" 
                fill={props.actived ? props.colorActived || ColorActived : props.colorDisabled || ColorDisabled }/>
        </svg>
    )
}

const index = (props) => {
    switch (props.name) {
        case 'default':
                return <IcoDefault {...props} />
        case 'painel':
            return <IcoPainel {...props} />
        case 'email':
                return <IcoEmail {...props} />
        case 'mensagens':
                return <IcoEmail {...props} />
        case 'contatos':
                return <IcoContatos {...props} />
        case 'atendimento':
            return <IcoAtendimento {...props} />
        case 'modulos':
                    return <IcoModulos {...props} />
        case 'mais':
                return <IcoMais {...props} />
        case 'configuracoes':
                return <IcoMais {...props} />
        case 'hideMenu':
                return <IcoHideMenu {...props} />
        default:
                return <IcoDefault {...props} />
    }
}

export default index
