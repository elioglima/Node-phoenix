const libsObj = require('../../../../libs/fn_obj')

const ModeloDados = {
    Tipo: '',
    id:'',
    NumeroTitulo: '',
    Contrato: '',
    CodigoAcordo: '',
    FilialAcordo: '',
    DataAcordo: '',
    StatusAcordo: '',
    CodigoDevedor: '',
    Parcelas: []
}

const ModeloDadosParcelas = {
    NumeroParcela: '',
    DataVencimento: '',
    ValorParcela: '',
    CodigoParcelaAcordo: '',
    StatusParcelaAcordo: ''
}

module.exports = async (DadosAcordo) => {

    PushParcela = (DadosAcordoTemp, Parcela) => {
        let ParcelaTemp = libsObj.Assign(ModeloDadosParcelas)
        ParcelaTemp.NumeroParcela = Parcela.NumeroParcela
        ParcelaTemp.DataVencimento = Parcela.DataVencimento
        ParcelaTemp.ValorParcela = Parcela.ValorParcela
        ParcelaTemp.CodigoParcelaAcordo = Parcela.CodigoParcelaAcordo
        ParcelaTemp.StatusParcelaAcordo = Parcela.StatusParcelaAcordo
        DadosAcordoTemp.Parcelas.push(ParcelaTemp)
    }

    let DadosAcordoTemp = libsObj.Assign(ModeloDados)

    DadosAcordoTemp.Tipo = 'Acordo'
    DadosAcordoTemp.Id = DadosAcordo.CodigoDevedor + '_' + DadosAcordo.CodigoTitulo + '_' + 'N'
    DadosAcordoTemp.CodigoTitulo = DadosAcordo.CodigoTitulo
    DadosAcordoTemp.NumeroTitulo = DadosAcordo.NumeroTitulo

    aContrato = DadosAcordo.NumeroTitulo.split('.')
    if (aContrato.length > 0)
        DadosAcordoTemp.Contrato = aContrato[0]

    DadosAcordoTemp.Contrato = DadosAcordo.CodigoDevedor
    DadosAcordoTemp.CodigoAcordo = DadosAcordo.CodigoAcordo
    DadosAcordoTemp.FilialAcordo = DadosAcordo.FilialAcordo
    DadosAcordoTemp.DataAcordo = DadosAcordo.DataAcordo
    DadosAcordoTemp.StatusAcordo = DadosAcordo.StatusAcordo
    DadosAcordoTemp.CodigoDevedor = DadosAcordo.CodigoDevedor

    if ((DadosAcordo.ParcelasAcordo) && (Array.isArray(DadosAcordo.ParcelasAcordo))) {
        DadosAcordo.ParcelasAcordo.forEach(Parcela => PushParcela(DadosAcordoTemp, Parcela))

    } else if ((DadosAcordo.ParcelasAcordo) && (!Array.isArray(DadosAcordo.ParcelasAcordo))) {

        if ((DadosAcordo.ParcelasAcordo.ParcelaAcordo) && (Array.isArray(DadosAcordo.ParcelasAcordo.ParcelaAcordo))) {
            DadosAcordo.ParcelasAcordo.ParcelaAcordo.forEach(Parcela => PushParcela(DadosAcordoTemp, Parcela))

        } else if ((DadosAcordo.ParcelasAcordo.ParcelaAcordo)
            && (!Array.isArray(DadosAcordo.ParcelasAcordo.ParcelaAcordo))) {
            PushParcela(DadosAcordoTemp, DadosAcordo.ParcelasAcordo.ParcelaAcordo)

        } else if (DadosAcordo.ParcelasAcordo.CodigoParcela) {
            PushParcela(DadosAcordoTemp, DadosAcordo.ParcelasAcordo)
        }
    }

    return { Acordo: DadosAcordoTemp }
}
