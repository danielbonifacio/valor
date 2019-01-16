# Requisições

Este é um guia para padronização de requisições com tratativas específicas.

Este guia servirá como base para o desenvolvimento e consumo da API, e deverá ser seguido a risca.

## Autenticação

A Autenticação será feita por meio de [bearer token](https://swagger.io/docs/specification/authentication/bearer-authentication/).

``` http
Authorization: Bearer TOKEN_DE_AUTENTICACAO
```

## GET

**Requisição simples:**
``` bash
GET -> /usuarios
```

``` json
{
    "usuarios": [
        {
            "id": 3143,
            "nome": "Fulano de Tal",
            "email": "fulano@detal.com",
            "avatar": "gjsdfgiknou34729.png",
            "documentos": {
                "cpf": "00000000000",
                "rg": "0000000"
            }
        },
        {
            "id": 3213,
            "nome": "Maria das Tantas",
            "email": "maria@dastantas.com",
            "avatar": "ajhgkgafuy127936.png",
            "documentos": {
                "cpf": "11111111111",
                "rg": "11111111"
            }
        },
        ...
    ]
}
```

**Requisição precisa:**

``` bash
GET -> /usuarios/3123
```

``` json
{
    "usuario": {
        "id": 3213,
        "nome": "Maria das Tantas",
        "email": "maria@dastantas.com",
        "avatar": "ajhgkgafuy127936.png",
        "documentos": {
            "cpf": "11111111111",
            "rg": "11111111"
        }
    }
}
```

**Requisição exclusiva:**

``` bash
GET -> /usuarios?exclude=documentos
```

``` json
{
    "usuarios": [
        {
            "id": 3143,
            "nome": "Fulano de Tal",
            "email": "fulano@detal.com",
            "avatar": "gjsdfgiknou34729.png",
        },
        {
            "id": 3213,
            "nome": "Maria das Tantas",
            "email": "maria@dastantas.com",
            "avatar": "ajhgkgafuy127936.png",
        },
        ...
    ]
}
```

## POST

**Cadastro simples:**

``` bash
POST -> usuarios
```

``` json
// enviado
{
    "nome": "Zezinho Laranjo",
    "email": "zezinho@laranjo.gov.br",
    "documentos": {
        "cpf": "000.111.222-33",
        "rg": "0000.111"
    }
}

// recebido
{
    "id": 3219, // gerado pelo servidor
    "avatar": "nmdgasj2334321.png", // gerado pelo servidor
    "nome": "Zezinho Laranjo",
    "email": "zezinho@laranjo.gov.br",
    "documentos": {
        "cpf": "00011122233", // resolvido pelo servidor
        "rg": "0000111" // resolvido pelo servidor
    }
}
```

## PUT

**Edição simples:** 

```
PUT -> usuarios/3219
```

``` json
// enviado
{
    "nome": "Zezinha Laranja",
    "email": "zezinha@laranja.gov.br",
}

// recebido
{
    "id": 3219,
    "avatar": "nmdgasj2334321.png",
    "nome": "Zezinha Laranja",
    "email": "zezinha@laranja.gov.br",
    "documentos": {
        "cpf": "00011122233",
        "rg": "0000111"
    }
}
```