
export const Pesquisa = [
    {
        "id":1,
        "Titulo":"Hoje é: {datetime}",
        "Indexs":[
            {"chave":"Que dia é hoje"},
            {"chave":"Qual dia é hoje"},
            {"chave":"Hoje é"},
            {"chave":"Hoje é"},
        ]
    },{
        "id":2,
        "Titulo":"Oi, estou aqui. Em que posso te ajudar?",
        "Indexs":[
            {"chave":"Oi"},
        ]
    },{
        "id":3,
        "Titulo":"Oi, estou sim. Em que posso te ajudar?",
        "Indexs":[
            {"chave":"você está ai?"},
            {"chave":"voce esta ai?"},
        ]
    },{
        "id":4,
        "Titulo":"Eu te direcionei para pagina de Documentação, se precisar estou aqui.",
        "Indexs":[
            {"chave":"ir docs"},
            {"chave":"ir para docs"},
            {"chave":"ir: docs"},
        ],
        "Route":"/docs"
    },{
        "id":5,
        "Titulo":"Eu te direcionei para pagina inicial, se precisar estou aqui.",
        "Indexs":[
            {"chave":"ir inicio"},
            {"chave":"ir para inicio"},
            {"chave":"ir: inicio"},
            {"chave":"ir home"},
            {"chave":"ir para home"},
            {"chave":"ir: home"},
        ],
        "Route":"/"
    },{
        "id":6,
        "Titulo":"Testando conexão com API.",
        "Indexs":[
            {"chave":"testar api"},
            {"chave":"testar conexão com api"},            
            {"chave":"testar conexão"},            
            {"chave":"testar conexao"},            
            {"chave":"teste conexao"},            
            {"chave":"teste conexão"},            
        ],
        "Route":"/docs"
    },{
        "id":7,
        "Titulo":"O que você deseja testar?",
        "Indexs":[
            {"chave":"teste"},
        ],
        "Route":"/docs"
    },{
            "id":8,
            "Titulo":"Meu nome é Davi, sou um robô, estou aqui para te ajuda e é um prazer em te conhecer.",
            "Indexs":[
                {"chave":"Qual é seu nome"},
                {"chave":"Qual e seu nome"},
                {"chave":"qual seu nome"},
                {"chave":"Com quem estou falando"},
                {"chave":"Como você se chama"},
                {"chave":"Quem é você"},
                {"chave":"seu nome?"},
                {"chave":"seu nome é?"},
            ]
    },{
        "id":1,
        "Titulo":"É um prazer te ajudar, caso precise é só chamar.",
        "Indexs":[
            {"chave":"origado"},
        ]
    },{
        "id":9,
        "Titulo":"Acesso ao Sistema",
        "Indexs":[
            {"chave":"acesso sistema"},
            {"chave":"acesso de sistema"},
            {"chave":"acesso ao sistema"},
            {"chave":"acesso"},
            {"chave":"sistema"}
        ]
    },
    {
        "id":10,
        "Titulo":"Ir: Manual do Usuário",
        "Indexs":[
            {"chave":"manual usuario"},
            {"chave":"manual de usuario"},
            {"chave":"manual do usuario"},
            {"chave":"manual"},
            {"chave":"usuario"}
        ]
    },
    {
        "id":11,
        "Titulo":"Licença de Uso",
        "Indexs":[
            {"chave":"uso"},
            {"chave":"licenca uso"},
            {"chave":"licença uso"},
            {"chave":"licença de uso"},
            {"chave":"licenca"},
            {"chave":"licença"},
            {"chave":"autorização"},
            {"chave":"autorizacao"}
        ]
    },{
        "id":12,
        "Titulo":"Eu te direcionei API encontrada, se precisar estou aqui.",
        "Indexs":[
            {"chave":"api usuario"},
        ],
        "Route":"/docs"        
    }

];

// "Route":"/"


export const chatbotSaudacao = [
    {
        "id":1,
        "msg":"Olá, eu sou o Davi e estou aqui para lhe ajudar.",
        "temp":1,        
    },
    {
        "id":2,
        "msg":"Digite em poucas palavras o que deseja.",
        "temp":1,        
    },
];

export const chatbotNaoEntendi = 
    {
        "id":1,
        "Titulo":"Desculpe, até o momento não aprendi o que você quis dizer. Estou registrando sua mensagem, logo mais estarei preparado.",
        "temp":1,        
    }
;

const dePara = [
    {"de":"que é","para":"quem é"},
    {"de":"que e","para":"quem é"},
    {"de":"quel","para":"qual"},
    {"de":"qiel","para":"qual"},
    {"de":"sei","para":"seu"},                        
    {"de":"teu","para":"seu"},                        
    {"de":"noem","para":"nome"},
    {"de":"name","para":"nome"},
    {"de":"nime","para":"nome"},
    {"de":"npnw","para":"nome"},
    {"de":"dial","para":"dia"},
    {"de":"voce","para":"você"},
    {"de":"vc","para":"você"},
    {"de":"esta","para":"está"},
    {"de":"c/","para":"com"},
    {"de":"?","para":""},
]

const procComparativoPalavra = (chave, msg) => {    
    
    if (chave.toLowerCase() === msg.toLowerCase()) {
        return true
    } 

    let msg_temp = msg.toString()

    for (let i1 = 0; i1 < dePara.length; i1++) {
        const elm1 = dePara[i1];
        msg_temp = msg_temp.replace(elm1.de, elm1.para)
        msg_temp = msg_temp.toLowerCase()
        if (chave.toLowerCase() === msg_temp.toLowerCase()) {
            return true
        }       
    } 

    return false
}

const procFormatAcao = (elm1) => {
    var res = JSON.parse(JSON.stringify(elm1));
    
    if(res.Titulo.indexOf("{datetime}") > -1) {
        var dateTime = require('node-datetime');
        var dt = dateTime.create();
        var formatted = dt.format('d/m/Y H:M:S');                                    
        res.Titulo = elm1.Titulo.replace("{datetime}", " " + formatted); 
    }

    return res
}

const procSimples = (msg_recebida) =>  {
    return new Promise(      
        function(resolve, reject) {
            const ListaAcertos = [];
            for (let i1 = 0; i1 < Pesquisa.length; i1++) {
                const elm1 = Pesquisa[i1];                
                for (let i2 = 0; i2 < elm1.Indexs.length; i2++) {
                    const elm2 = elm1.Indexs[i2];                    
                    if (procComparativoPalavra(elm2.chave, msg_recebida)) {                        
                        return resolve(procFormatAcao(elm1));
                    } else {

                        if (elm2.chave.indexOf(msg_recebida) > -1) {
                            const PercentualAcerto = (( msg_recebida.length * 100) / elm2.chave.length)                            
                            const VRFAcertos = {
                                "Elemento": elm1,
                                "Percentual": PercentualAcerto,
                            }

                            ListaAcertos.push(VRFAcertos)                            
                        }
                    }
                }
            }

            if (ListaAcertos.length > 0) {
                let percMaior = 0
                let objeto = {}
                
                for (let i1 = 0; i1 < ListaAcertos.length; i1++) {
                    const element = ListaAcertos[i1];
                    if ((element.Percentual > percMaior) && (element.Percentual > 50)) {
                        percMaior = element.Percentual
                        objeto = element.Elemento
                    }                    
                } 
                
                if (percMaior > 0) {
                    return resolve(procFormatAcao(objeto));
                }

            }
            
            return reject(chatbotNaoEntendi)
        }
    );
}

export const analise = (msg_recebida) => {
    return procSimples(msg_recebida)
}

