import axios from 'axios'

const BASE_URL_LOCAL = 'http://localhost:5225'

export default (method, data, timeout = 120000) => {
    return new Promise(async (resolve, reject) => {
        let axiosInstance = axios.create();
        let headers = {
            // 'user-agent': 'Portal',
            'Content-Type': 'application/json;charset=UTF-8',
        };

        const retorno = (err = true, msg = 'Erro Inesperado', obj) => resolve({ retornoMetodo: { err, msg, obj } })

        const url = `${BASE_URL_LOCAL}/api/${method}`
        console.log('url', url)
        console.log('dados de envio', data)
        await axiosInstance({
            method: 'post',
            url,
            data,
            timeout,
            headers,
        }).then((response) => {
            console.log('dados de retorno', method, response)

            if (!response.status)
                return retorno(true, 'Erro status de resposta não localizado.')

            if (response.status !== 200)
                return retorno(true, response.statusText)

            return retorno(false, 'Sucesso', response)
        }).catch(err => {
            console.log('request post erro', method, err)
            return retorno(true, 'catch(err',err.message)
        })
    })

}