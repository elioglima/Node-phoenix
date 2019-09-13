const libsObj = require('../../../../libs/fn_obj')

const ModeloDadosDivida = {
    Id:'',
    NumeroTitulo: '',
    CodigoDevedor: '',
    CodigoTitulo: '',
    Produto: '',
    Parcelas: []
}

const ModeloDadosDividaParcela = {
    CodigoParcela: '',
    DescricaoDaParcela: '',
    Vencimento: '',
    Valor: ''
}

module.exports = async (DadosDivida) => {

    let DadosDividaTemp = libsObj.Assign(ModeloDadosDivida)
    
    DadosDividaTemp.Tipo = 'Divida'
    DadosDividaTemp.Id = DadosDivida.CodigoDevedor + '_' + DadosDivida.CodigoTitulo + '_' + 'N'
    DadosDividaTemp.NumeroTitulo = DadosDivida.NumeroTitulo
    DadosDividaTemp.CodigoDevedor = DadosDivida.CodigoDevedor
    DadosDividaTemp.CodigoTitulo = DadosDivida.CodigoTitulo
    DadosDividaTemp.Produto = DadosDivida.Produto

    if ((DadosDivida.Parcelas) && (Array.isArray(DadosDivida.Parcelas))) {
        DadosDivida.Parcelas.forEach(ParcelaDivida => {
            let DadosDividaParcelaTemp = libsObj.Assign(ModeloDadosDividaParcela)
            DadosDividaParcelaTemp.CodigoParcela = ParcelaDivida.CodigoParcela
            DadosDividaParcelaTemp.DescricaoDaParcela = ParcelaDivida.DescricaoDaParcela
            DadosDividaParcelaTemp.Vencimento = ParcelaDivida.Vencimento
            DadosDividaParcelaTemp.Valor = ParcelaDivida.Valor
            DadosDividaTemp.Parcelas.push(DadosDividaParcelaTemp)
        });
    } else if ((DadosDivida.Parcelas) && (!Array.isArray(DadosDivida.Parcelas))) {
        let DadosDividaParcelaTemp = libsObj.Assign(ModeloDadosDividaParcela)

        if ((DadosDivida.Parcelas.ParcelaDivida) && (Array.isArray(DadosDivida.Parcelas.ParcelaDivida))) {

            DadosDivida.Parcelas.ParcelaDivida.forEach(Parcela => {
                DadosDividaParcelaTemp.CodigoParcela = Parcela.CodigoParcela
                DadosDividaParcelaTemp.DescricaoDaParcela = Parcela.DescricaoDaParcela
                DadosDividaParcelaTemp.Vencimento = Parcela.Vencimento
                DadosDividaParcelaTemp.Valor = Parcela.Valor
                DadosDividaTemp.Parcelas.push(DadosDividaParcelaTemp)
            });

        } else if ((DadosDivida.Parcelas.ParcelaDivida) && (!Array.isArray(DadosDivida.Parcelas.ParcelaDivida))) {
            DadosDividaParcelaTemp.CodigoParcela = DadosDivida.Parcelas.ParcelaDivida.CodigoParcela
            DadosDividaParcelaTemp.DescricaoDaParcela = DadosDivida.Parcelas.ParcelaDivida.DescricaoDaParcela
            DadosDividaParcelaTemp.Vencimento = DadosDivida.Parcelas.ParcelaDivida.Vencimento
            DadosDividaParcelaTemp.Valor = DadosDivida.Parcelas.ParcelaDivida.Valor
            DadosDividaTemp.Parcelas.push(DadosDividaParcelaTemp)
        } else {
            DadosDividaParcelaTemp.CodigoParcela = DadosDivida.Parcelas.CodigoParcela
            DadosDividaParcelaTemp.DescricaoDaParcela = DadosDivida.Parcelas.DescricaoDaParcela
            DadosDividaParcelaTemp.Vencimento = DadosDivida.Parcelas.Vencimento
            DadosDividaParcelaTemp.Valor = DadosDivida.Parcelas.Valor
            DadosDividaTemp.Parcelas.push(DadosDividaParcelaTemp)
        }
    }    

    return { Divida:DadosDividaTemp }
}
