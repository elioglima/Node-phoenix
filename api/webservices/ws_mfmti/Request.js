const axios = require('axios');
const config = require('../../../config');
const LogAPI = require('../../../db/models/LogAPI');

let headers = {
    'user-agent': 'API Intersic',
    'Content-Type': 'text/xml;charset=UTF-8',
};

module.exports.SendSoap = (xml, obj = {}, timeout = config.Timeout || 10000) => {
    let url = config.URL
    return new Promise((resolve, reject) => {
        try {
            const axiosInstance = axios.create();
            axiosInstance({
                method: 'post',
                url,
                data: xml,
                timeout,
                headers,
            }).then((response) => { 
                try {
                    if (!response) {
                        LogAPI.AddLog({ envio: xml, resposta: 'Servidor não respondeu. [response nao localizado]' , obj})
                        return resolve({ erro: true, response: { statusCode: 400, body: "Servidor não respondeu. [response nao localizado]" } })
                    }

                    resolve({ erro: false, response: { 
                            statusCode: response.status, 
                            body: response.data, 
                            xmlEnvio:xml,
                            xmlRetorno:response.data 
                        }, })

                } catch (error) {
                    LogAPI.AddLog({ envio: xml, resposta: error })
                    return resolve({erro: true,response: error})
                }

            }).catch((error) => {

                try {
                    if (!error) {
                        LogAPI.AddLog({ envio: xml, resposta: 'ln:89 - .then((response) => { - catch (error) {', obj })
                        return resolve({ erro: true, response: { statusCode: error.code, body: error.code + ':' + error.message } })
                    }

                    js = JSON.stringify(error)
                    error = JSON.parse(js)
                    LogAPI.AddLog({ envio: xml, resposta: error, obj })
                    resolve({ erro: true, response: { statusCode: error.code, body: error.code + ':' + error.message } })

                } catch (error) {
                    LogAPI.AddLog({ envio: xml, resposta: error, obj })
                    resolve({ erro: true, response: error })
                }
            })
        } catch (error) {
            LogAPI.AddLog({ envio: xml, resposta: error, obj })
            return resolve({ erro: true, response: error })
        }
    })
};
