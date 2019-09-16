export const DataAPI =  [

    { 
        "Id":1,
        "Titulo":"Chave de Acesso",
        "Itens":[
            {
                "Id":1,
                "Titulo":"Pesquisa todas as Chaves de Acesso",
                "Metodo":"POST",
                "URL":"chave/acesso/pesquisa/todos",
                "Parametros":[
                    {
                        "titulo":"Código da Empresa",
                        "nome":"EmpresaID",
                        "tipo":"number",
                        "tamanho":45,
                        "placeholder":"Código da Empresa",
                        "requerido":true,
                        "valor":""
                    },{
                        "titulo":"Descrição",
                        "nome":"Descricao",
                        "tipo":"text",
                        "tamanho":45,
                        "placeholder":"Descrição",
                        "requerido":true,
                        "valor":""
                    }
                ]
            }, {
                "Id":2,
                "Titulo":"Gerar Chaves de Acesso",
                "Metodo":"POST",
                "URL":"chave/acesso/gerar",
                "Parametros":[
                    {
                        "titulo":"* Código da Empresa",
                        "nome":"EmpresaID",
                        "tipo":"number",
                        "tamanho":45,
                        "placeholder":"Código da Empresa",
                        "requerido":true,
                        "valor":"1"
                    },{
                        "titulo":"* Descrição",
                        "nome":"Descricao",
                        "tipo":"text",
                        "tamanho":45,
                        "placeholder":"Descrição",
                        "requerido":true,
                        "valor":"Chave de Teste"
                    },{
                        "titulo":"* Data Validade",
                        "nome":"DataValidade",
                        "tipo":"text",
                        "tamanho":45,
                        "placeholder":"2006-01-02T15:04:05.000Z",
                        "requerido":true,
                        "valor":"2006-01-02T15:04:05.000Z"
                    }
                ]
            }                    
        ]
    }
    
    , { 
        // CADASTRO DE EMPRESAS

        "Id":2,
        "Titulo":"Cadastro de Empresa",
        "Itens":[
            {
                "Id":1,
                "Titulo":"Pesquisa todas as empresas",
                "Metodo":"POST",
                "URL":"empresa/pesquisa/todos",
                "Parametros":[
                    
                ]
            },{
                "Id":2,
                "Titulo":"Pesquisa de empresa por nome",
                "Metodo":"POST",
                "URL":"empresa/pesquisa/nome",
                "Parametros":[
                     {
                        "titulo":"Apelido ou Razao Social",
                        "nome":"nome",
                        "tipo":"text",
                        "tamanho":45,
                        "placeholder":"Apelido ou Razao Social",
                        "requerido":true,
                        "valor":"Maxtime"
                    }
                ]
            },{
                "Id":3,
                "Titulo":"Pesquisa de empresa por código",
                "Metodo":"POST",
                "URL":"empresa/pesquisa/codigo",
                "Parametros":[
                    {
                        "titulo":"* Código da Empresa",
                        "nome":"id",
                        "tipo":"number",
                        "tamanho":45,
                        "placeholder":"Código da Empresa",
                        "requerido":true,
                        "valor":1
                    }
                ]
            },{
                "Id":4,
                "Titulo":"Pesquisa de empresa por e-mail",
                "Metodo":"POST",
                "URL":"empresa/pesquisa/email",
                "Parametros":[
                    {
                        "titulo":"E-mail",
                        "nome":"email",
                        "tipo":"email",
                        "tamanho":45,
                        "placeholder":"email do usuario",
                        "requerido":true,
                        "valor":"diretoria@maxtime.info"
                    }
                ]
            },{
                "Id":5,
                "Titulo":"Atualizar cadastro da empresa",
                "Metodo":"POST",
                "URL":"empresa/atualizar",
                "Parametros":[
                    {
                        "titulo":"* Código da Empresa",
                        "nome":"id",
                        "tipo":"number",
                        "tamanho":45,
                        "placeholder":"Código da Empresa",
                        "requerido":true,
                        "valor":1
                    }, {
                        "titulo":"E-mail",
                        "nome":"email",
                        "tipo":"email",
                        "tamanho":45,
                        "placeholder":"email do usuario",
                        "requerido":true,
                        "valor":"diretoria@maxtime.info"
                    },{
                        "titulo":"Nome Completo",
                        "nome":"nome",
                        "tipo":"text",
                        "tamanho":45,
                        "placeholder":"nome do usuario",
                        "requerido":true,
                        "valor":"Elio Gonçalves de Lima"
                    },{
                        "titulo":"CPF/ CNPJ",
                        "nome":"doc1",
                        "tipo":"text",
                        "tamanho":45,
                        "placeholder":"CPF/ CNPJ",
                        "requerido":true,
                        "valor":"216.399.218-77"
                    },{
                        "titulo":"RG/ IE",
                        "nome":"doc2",
                        "tipo":"text",
                        "tamanho":45,
                        "placeholder":"RG/ IE",
                        "requerido":true,
                        "valor":"32.166.631-8"
                    },{
                        "titulo":"Tipo de Pessoa",
                        "nome":"TipoPessoaID",
                        "tipo":"number",
                        "tamanho":45,
                        "placeholder":"tipo de pessoa",
                        "requerido":true,
                        "valor":"0"
                    },{
                        "titulo":"Categoria ID",
                        "nome":"CategoriaID",
                        "tipo":"number",
                        "tamanho":45,
                        "placeholder":"categoria",
                        "requerido":true,
                        "valor":"0"
                    }
                ]
            },{
                "Id":6,
                "Titulo":"Novo cadastro de empresa",
                "Metodo":"POST",
                "URL":"empresa/novo",
                "Parametros":[
                    {
                        "titulo":"E-mail",
                        "nome":"email",
                        "tipo":"email",
                        "tamanho":45,
                        "placeholder":"email do usuario",
                        "requerido":true,
                        "valor":"contato@gmail.com"
                    },{
                        "titulo":"Nome Completo",
                        "nome":"nome",
                        "tipo":"text",
                        "tamanho":45,
                        "placeholder":"nome do usuario",
                        "requerido":true,
                        "valor":"Roberto Silva"
                    },{
                        "titulo":"CPF/ CNPJ",
                        "nome":"doc1",
                        "tipo":"text",
                        "tamanho":45,
                        "placeholder":"CPF/ CNPJ",
                        "requerido":true,
                        "valor":"216.399.218-77"
                    },{
                        "titulo":"RG/ IE",
                        "nome":"doc2",
                        "tipo":"text",
                        "tamanho":45,
                        "placeholder":"RG/ IE",
                        "requerido":true,
                        "valor":"32.166.631-8"
                    },{
                        "titulo":"Tipo de Pessoa",
                        "nome":"TipoPessoaID",
                        "tipo":"number",
                        "tamanho":45,
                        "placeholder":"tipo de pessoa",
                        "requerido":true,
                        "valor":"0"
                    },{
                        "titulo":"Categoria ID",
                        "nome":"CategoriaID",
                        "tipo":"number",
                        "tamanho":45,
                        "placeholder":"categoria",
                        "requerido":true,
                        "valor":"0"
                    }
                ]

            },{
                "Id":7,
                "Titulo":"Apagar cadastro da empresa",
                "Metodo":"POST",
                "URL":"empresa/apagar",
                "Parametros":[
                    {
                        "titulo":"* Código da Empresa",
                        "nome":"id",
                        "tipo":"number",
                        "tamanho":45,
                        "placeholder":"codigo da empresa",
                        "requerido":true,
                        "valor":"2"
                    }
                ]
            }
            
        ]
    }

    , { // CADASTRO DE USUÁRIOS
        "Id":3,
        "Titulo":"Cadastro de Usuários",
        "Itens":[
            {
                "Id":1,
                "Titulo":"Pesquisa Todos Usuários",
                "Metodo":"POST",
                "URL":"usuario/pesquisa/todos",
                "Parametros":[
                    {
                        "titulo":"Código da Empresa",
                        "nome":"EmpresaID",
                        "tipo":"number",
                        "tamanho":45,
                        "placeholder":"Código da Empresa",
                        "requerido":true,
                        "valor":1
                    }
                ]
            },{
                "Id":2,
                "Titulo":"Pesquisa de Usuário por nome",
                "Metodo":"POST",
                "URL":"usuario/pesquisa/nome",
                "Parametros":[
                    {
                        "titulo":"Código da Empresa",
                        "nome":"EmpresaID",
                        "tipo":"number",
                        "tamanho":45,
                        "placeholder":"Código da Empresa",
                        "requerido":true,
                        "valor":1
                    }, {
                        "titulo":"Pesquisa",
                        "nome":"nome",
                        "tipo":"text",
                        "tamanho":45,
                        "placeholder":"nome do usuario",
                        "requerido":true,
                        "valor":"Elio"
                    }
                ]
            },{
                "Id":3,
                "Titulo":"Pesquisa de Usuário por código",
                "Metodo":"POST",
                "URL":"usuario/pesquisa/codigo",
                "Parametros":[
                    {
                        "titulo":"Código da Empresa",
                        "nome":"EmpresaID",
                        "tipo":"number",
                        "tamanho":45,
                        "placeholder":"Código da Empresa",
                        "requerido":true,
                        "valor":1
                    }, {
                        "titulo":"Código",
                        "nome":"id",
                        "tipo":"number",
                        "tamanho":45,
                        "placeholder":"codigo do usuario",
                        "requerido":true,
                        "valor":"1"
                    }
                ]
            },{
                "Id":4,
                "Titulo":"Pesquisa de Usuário por e-mail",
                "Metodo":"POST",
                "URL":"usuario/pesquisa/email",
                "Parametros":[
                    {
                        "titulo":"Código da Empresa",
                        "nome":"EmpresaID",
                        "tipo":"number",
                        "tamanho":45,
                        "placeholder":"Código da Empresa",
                        "requerido":true,
                        "valor":1
                    }, {
                        "titulo":"E-mail",
                        "nome":"email",
                        "tipo":"email",
                        "tamanho":45,
                        "placeholder":"email do usuario",
                        "requerido":true,
                        "valor":"diretoria@maxtime.info"
                    }
                ]
            },{
                "Id":5,
                "Titulo":"Atualizar Usuário",
                "Metodo":"POST",
                "URL":"usuario/atualizar",
                "Parametros":[
                    {
                        "titulo":"Código da Empresa",
                        "nome":"EmpresaID",
                        "tipo":"number",
                        "tamanho":45,
                        "placeholder":"Código da Empresa",
                        "requerido":true,
                        "valor":1
                    }, {
                        "titulo":"Código",
                        "nome":"id",
                        "tipo":"number",
                        "tamanho":45,
                        "placeholder":"codigo do usuario",
                        "requerido":true,
                        "valor":"1"
                    },{
                        "titulo":"E-mail",
                        "nome":"email",
                        "tipo":"email",
                        "tamanho":45,
                        "placeholder":"email do usuario",
                        "requerido":true,
                        "valor":"diretoria@maxtime.info"
                    },{
                        "titulo":"Nome Completo",
                        "nome":"nome",
                        "tipo":"text",
                        "tamanho":45,
                        "placeholder":"nome do usuario",
                        "requerido":true,
                        "valor":"Elio Gonçalves de Lima"
                    },{
                        "titulo":"CPF/ CNPJ",
                        "nome":"doc1",
                        "tipo":"text",
                        "tamanho":45,
                        "placeholder":"CPF/ CNPJ",
                        "requerido":true,
                        "valor":"216.399.218-77"
                    },{
                        "titulo":"RG/ IE",
                        "nome":"doc2",
                        "tipo":"text",
                        "tamanho":45,
                        "placeholder":"RG/ IE",
                        "requerido":true,
                        "valor":"32.166.631-8"
                    },{
                        "titulo":"Tipo de Pessoa",
                        "nome":"TipoPessoaID",
                        "tipo":"number",
                        "tamanho":45,
                        "placeholder":"tipo de pessoa",
                        "requerido":true,
                        "valor":"0"
                    },{
                        "titulo":"Categoria ID",
                        "nome":"CategoriaID",
                        "tipo":"number",
                        "tamanho":45,
                        "placeholder":"categoria",
                        "requerido":true,
                        "valor":"0"
                    }
                ]
            },{
                "Id":6,
                "Titulo":"Novo Usuário",
                "Metodo":"POST",
                "URL":"usuario/novo",
                "Parametros":[
                    {
                        "titulo":"Código da Empresa",
                        "nome":"EmpresaID",
                        "tipo":"number",
                        "tamanho":45,
                        "placeholder":"Código da Empresa",
                        "requerido":true,
                        "valor":1
                    }, {
                        "titulo":"E-mail",
                        "nome":"email",
                        "tipo":"email",
                        "tamanho":45,
                        "placeholder":"email do usuario",
                        "requerido":true,
                        "valor":"contato@gmail.com"
                    },{
                        "titulo":"Nome Completo",
                        "nome":"nome",
                        "tipo":"text",
                        "tamanho":45,
                        "placeholder":"nome do usuario",
                        "requerido":true,
                        "valor":"Roberto Silva"
                    },{
                        "titulo":"CPF/ CNPJ",
                        "nome":"doc1",
                        "tipo":"text",
                        "tamanho":45,
                        "placeholder":"CPF/ CNPJ",
                        "requerido":true,
                        "valor":"216.399.218-77"
                    },{
                        "titulo":"RG/ IE",
                        "nome":"doc2",
                        "tipo":"text",
                        "tamanho":45,
                        "placeholder":"RG/ IE",
                        "requerido":true,
                        "valor":"32.166.631-8"
                    },{
                        "titulo":"Tipo de Pessoa",
                        "nome":"TipoPessoaID",
                        "tipo":"number",
                        "tamanho":45,
                        "placeholder":"tipo de pessoa",
                        "requerido":true,
                        "valor":"0"
                    },{
                        "titulo":"Categoria ID",
                        "nome":"CategoriaID",
                        "tipo":"number",
                        "tamanho":45,
                        "placeholder":"categoria",
                        "requerido":true,
                        "valor":"0"
                    }
                ]
            },{
                "Id":7,
                "Titulo":"Apagar cadastro de usuário",
                "Metodo":"POST",
                "URL":"usuario/apagar",
                "Parametros":[
                    {
                        "titulo":"Código da Empresa",
                        "nome":"EmpresaID",
                        "tipo":"number",
                        "tamanho":45,
                        "placeholder":"Código da Empresa",
                        "requerido":true,
                        "valor":1
                    },{
                        "titulo":"Código",
                        "nome":"id",
                        "tipo":"number",
                        "tamanho":45,
                        "placeholder":"codigo do usuario",
                        "requerido":true,
                        "valor":"2"
                    }
                ]
            }
            
        ]
    }



    
]
