# Desafio Magalu
## Requisitos ##
Node https://nodejs.org/en/  
Yarn (Opcional) https://yarnpkg.com/pt-BR/  

## Instalação ##
Após clonar o repositório, utilize o comando via terminal  
`npm install` ou `yarn` para baixar os pacotes de dependências.  




## API



Utilizando o comando `yarn dev` a aplicação rodará no seguinte endereço:
`http://localhost:4500/`

*Observação: caso queira importar via postman os métodos disponíveis são:

curl --location --request GET 'http://localhost:4500/products'


curl --location --request GET 'http://localhost:4500/clients'

curl --location --request GET 'http://localhost:4500/clients/3'

curl --location --request POST 'http://localhost:4500/clients'

curl --location --request PUT 'http://localhost:4500/clients/1'

curl --location --request DELETE 'http://localhost:4500/clients/1'

curl --location --request POST 'http://localhost:4500/favorites'

curl --location --request GET 'http://localhost:4500/favorites/6'


## Autenticação JWT
No header do postman utilizar:

key: `token`

value: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.e30.3MDdVV6upDjGcUtgjptroYTdqRKoBTtLWcpSwBMdRVs`

## Banco de dados
O banco encontra-se no arquivo `db-labs`. É necessário importar o script.

