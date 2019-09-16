import { RAPI } from '../../src/request-api'

export const dispRAPI = (uri, params)  => dispatch =>  { return RAPI(uri,params) }

export const getName = (value)  => dispatch =>  { 
    // console.log(value, value.indexOf("NMCP"), value.length)

    if (value.indexOf("CompReactID") > -1) { 
        if (value.indexOf("NMCP") > -1) { 
            return value.substring(value.indexOf("NMCP")+4, value.length)
        }
    }
    
    return  value
}

export const getValue = (name, value) => dispatch => {

    if (name.indexOf("CompReactID") > -1) { 
        if (name.indexOf("CMPTP") > -1) { 
            const tipo = name.substring(name.indexOf("CMPTP")+5, name.indexOf("NMCP"))
            switch (tipo) {
                case "number":
                    return parseInt(value)
                    break;    
                default:
                    return value
                    break;
            }
        }
    }
}