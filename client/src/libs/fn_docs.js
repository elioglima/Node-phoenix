const CPF = require('cpf_cnpj').CPF;
const CNPJ = require('cpf_cnpj').CNPJ;

module.exports.Valida = (value) => {
    if (!value) return false
    const checkCpf = value.replace(/[^0-9]/g, '');
    if (CPF.isValid(checkCpf))
        return true
    else if (CNPJ.isValid(checkCpf))
        return true
    return false
}

module.exports.ValidaCPF = (value) => {
    if (!value) return false
    const checkCpf = value.replace(/[^0-9]/g, '');
    return (CPF.isValid(checkCpf))
}

module.exports.ValidaCNPJ = (value) => {
    if (!value) return false
    const checkCpf = value.replace(/[^0-9]/g, '');
    return (CNPJ.isValid(checkCpf))
}

module.exports.FormatDoc = (value) => {

    if (!value) return 'CPF/CNPJ não informado';
    const checkCpf = value.replace(/[^0-9]/g, '');

    if (CPF.isValid(checkCpf)) {
        return CPF.format(checkCpf);

    } else if (CNPJ.isValid(checkCpf)) {
        return CNPJ.format(checkCpf);
    }

    return "Documento inválido"
}

