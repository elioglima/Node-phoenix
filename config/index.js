module.exports = {
    app: {
        title: 'API Phenix',
        description: 'API Phenix 1.0',
        keywords: 'mongodb, express, angularjs, node.js, mongoose, passport'
    },
    port: process.env.PORT || 3000,
    secretToken: process.env.SECRET_TOKEN || 'no token',
    ChaveAcesso: process.env.CHAVE_ACESSO || 'A4839F205C410FD4C5DE77AD4DEC1E3F',
    Timeout: process.env.TIMEOUT || 1200000,
    URL: process.env.URL || 'https://integracaonegociafacilclaro.mfmti.com.br/WebService.asmx?wsdl',
    TEMP_DIAS_PROPOSTAWEB:  process.env.TEMP_DIAS_PROPOSTAWEB || 5,
    maxWorkers: process.env.MAX_WORKERS || 4,
    SaveAllLog: process.env.SAVE_ALL_LOG == "true" || false,
    Trace: process.env.TRACE == "true" || false,
    db: {
        uri: 'mongodb://localhost:27017/apiintersic',
        options: {
            useNewUrlParser: true,
        }
    },
};