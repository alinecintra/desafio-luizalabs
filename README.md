# Desafio Magalu
## Requisitos ##
Node https://nodejs.org/en/  
Yarn (Opcional) https://yarnpkg.com/pt-BR/  

## Instalação ##
Após clonar o repositório, utilize o comando via terminal  
`npm install` ou `yarn` para baixar os pacotes de dependências.  


API

Utilizando o comando `yarn dev` a aplicação rodará no seguinte endereço:
`http://localhost:4500/`

*Observação: caso queira importar via postman os métodos disponíveis são:

curl --location --request GET 'http://localhost:4500/products'

curl --location --request GET 'http://localhost:4500/clients'

curl --location --request GET 'http://localhost:4500/clients/3'

curl --location --request POST 'http://localhost:4500/clients'

curl --location --request PUT 'http://localhost:4500/clients/1'

curl --location --request DELETE 'http://localhost:4500/clients/1'

## Cenário
O Magalu está expandindo seus negócios e uma das novas missões do time de
tecnologia é criar uma funcionalidade de Produtos Favoritos de nossos Clientes, em
que os nossos aplicativos irão enviar requisições HTTP para um novo backend que
deverá gerenciar nossos clientes e seus produtos favoritos.
Esta nova API REST será crucial para ações de marketing da empresa e terá um
grande volume de requisições então tenha em mente que a preocupação com
performance é algo que temos em mente constantemente.


## Requisitos
● Deve ser possível criar, atualizar, visualizar e remover Clientes

● O cadastro dos clientes deve conter apenas seu nome e endereço de
e-mail

● Um cliente não pode se registrar duas vezes com o mesmo endereço
de e-mail

● Cada cliente só deverá ter uma única lista de produtos favoritos

● Em uma lista de produtos favoritos podem existir uma quantidade ilimitada
de produtos

● Um produto não pode ser adicionado em uma lista caso ele não exista

● Um produto não pode estar duplicado na lista de produtos favoritos de
um cliente

● O dispositivo que irá renderizar a resposta fornecida por essa nova API irá apresentar o Título, Imagem, Preço e irá utilizar o ID do produto para formatar o link que ele irá acessar. Quando existir um review para o produto, o mesmo
será exibido por este dispositivo. Não é necessário criar um frontend para
simular essa renderização (foque no desenvolvimento da API).

● O acesso à api deve ser aberto ao mundo, porém deve possuir autenticação
e autorização.


