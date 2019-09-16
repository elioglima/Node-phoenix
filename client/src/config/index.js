module.exports = {
    app: {
        titulo: 'Admin Conductor',
        email: 'contato@conductor.com.br',
        telefone: '(11) 2082-8568 / Whats: (11) 95255-0331',
        description: 'Sistema Gerenciador de Condominio',
        keywords: 'mongodb, express, angularjs, node.js, mongoose, passport'
    },
    apiurl: process.env.REACT_APP_API_URL || 'http:/localhost:3000',
    Timeout: process.env.TIMEOUT || 1200000,
    maxWorkers: process.env.MAX_WORKERS || 4
}