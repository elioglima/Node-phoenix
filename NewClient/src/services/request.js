import axios from 'axios'

const BASE_URL_LOCAL = 'https://05rvhlrxg4.execute-api.us-west-2.amazonaws.com/prod'
// const BASE_URL_LOCAL = 'https://y48l77hsh4.execute-api.us-west-2.amazonaws.com/qa/'

export default (method, data, timeout = 120000) => {
    return new Promise(async (resolve, reject) => {
        let axiosInstance = axios.create();
        let headers = {
            // 'user-agent': 'Portal',
            'Content-Type': 'text/xml;charset=UTF-8',
        };

        const retorno = (err = true, msg = 'Erro Inesperado', obj) => resolve({ retornoMetodo: { err, msg, obj } })

        await axiosInstance({
            method: 'post',
            url: `${BASE_URL_LOCAL}/send/api/Cobranca/${method}`,
            data,
            timeout,
            headers,
        }).then((response) => {
            console.log('request post sucesso', method, response)

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