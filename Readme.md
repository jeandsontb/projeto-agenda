<h1 align="center">
  Projeto Agenda de Contatos
</h1>

<h4 align="center"> 
	Nesse repositório está todo o projeto da aplicação, Backend em Node e Frontend em React Js.
</h4>

<p align="center">
  <img alt="Repository size" src="https://img.shields.io/static/v1?label=Last%20commit&message=August&color=yellowgreen&style=for-the-badge&logo=Slack">
</p>

## 💻 Sobre o Projeto

AGENDA DE CONTATOS - Esse é um projeto para agenda de contatos, ele armazena os seguintes dados da pessoa.
  - Nome
  - Nome Completo
  - Endereço
  - Contato telefônico
  - Ano de Nascimento
  - E-mail

É uma aplicação rodando com o backend em Node com acesso ao banco de dados Mysql.
Nesse projeto o usuário poderá criar um novo contato, atualizar esse contato, listar por um contato e excluir o contato.

## 🎨 Layout

O projeto tem um layout bem uniforme e moderno e de fácil usabilidade e uso de cores muito performáticas que deixam a aplicação confortável de usar.

### Interface Web

<p align="center" style="display: flex; align-items: flex-start; justify-content: center;">
  <img alt="Agenda" title="#Agenda" src="https://raw.githubusercontent.com/jeandsontb/projeto-agenda/main/Project00.png" width="400px">

  <img alt="Agenda" title="#Agenda" src="https://raw.githubusercontent.com/jeandsontb/projeto-agenda/main/Project01.png" width="400px">
</p>
<p align="center" style="display: flex; align-items: flex-start; justify-content: center;">
  <img alt="Agenda" title="#Agenda" src="https://raw.githubusercontent.com/jeandsontb/projeto-agenda/main/Project02.png" width="400px">

  <img alt="Agenda" title="#Agenda" src="https://raw.githubusercontent.com/jeandsontb/projeto-agenda/main/Project03.png" width="400px">
</p>

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js][nodejs]
- [Express][express]
- [TypeScript][typescript]
- [TypeOrm][typeorm]
- [Joi][joi]
- [Bcrypt][bcrypt]
- [JsonWebToken][jsonwebtoken]
- [Vscode][vscode]

## 💡 Como executar o projeto

Nesse repositório está a aplicação backend e frontend, para executar o projeto é necessário clonar toda a pasta e separar as aplicações para modo de execução, (pasta Node - BackEnd) e (pasta React - Frontend)

1. Backend


BACKEND:

```bash

01 - Após abrir a pasta do projeto pasta (Node - Backend) rodar o comando -  npm install

02 – Criar uma base de dados no banco de dados mysql – No projeto consta essa base  *apicontacts*

03 – Verificar o arquivo ormconfig.json para ajustar os dados do banco, user, password, database

04 – Rodar o comando para criar as tabelas na base de dados - npm run typeorm migration:run

05 – Rodar a aplicação – npm run dev 

```

### *IMPORTANTE* - Ao startar a aplicação o primeiro usuário deve ser criado utilizando o insomnia com a seguinte rota POST - http://localhost:3333/user

```bash
{
	“name”: “fulano”,
	“email”: “fulano@gmail.com”,
	“password”: “123456” 
} 
```


1. Front End 

```bash
01 – Copiar a pasta do projeto (React - Frontend) e rodar comando - npm install

02 – Rodar a aplicação - npm start

```

## 📝 Licença

Este projeto esta sobe a licença MIT.

Feito por Jeandson Tenorio 👋🏽 [contato!](https://www.linkedin.com/in/jeandson/)

[nodejs]: https://nodejs.org/
[express]: https://expressjs.com/pt-br/
[typescript]: https://www.typescriptlang.org/
[typeorm]: https://typeorm.io/#/
[Joi]: https://joi.dev/api/?v=17.4.2
[bcrypt]: https://www.npmjs.com/package/bcryptjs
[jsonwebtoken]: https://www.npmjs.com/package/jsonwebtoken
[Vscode]: https://code.visualstudio.com/