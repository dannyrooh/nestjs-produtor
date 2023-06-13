## Description

Cadastro de Produtor Rural.

Esta sendo aplicado o design pattern da Arquitetura Hexagonal. Foi adotado que cada módulo, terá a seguinte estrutura de pastas:

 - modulo
    - dataprovider
        - model
        - repository
    - domain
        - converter
        - entities
        - exception
    - transportlayer
        - converter
        - entities

### Modulo

Um módulo é a representação de um domínio, e tem a finalidade de isolar uma regra de negrócio. 

#### TRANSPORTLAYER

É a porta de entrada de uma requisição, ela conversa com o dominio da aplicação (regra de negócio) através de Interface, como estamos em javascript, fazemos através de classe abstrata. 
Tanto o request como o response, são convertidos para interagir com o dominio, atraves de um conversor, para um entity. 

#### DOMINIO 

É a classe que contém a regra de negócio do módulo, ela responde para que a chamar. Caso haja erro na regra de negócio ela responde com o Exception.
A chamada de dados é realizada através do principio D do SOLID, dessa forma, a origem/destino dos dados podem vir tando de um banco de dados, quanto de um sistema de mensageria, independente do framework que seja aplicado.

### CONSIDERAÇÕES

O objetivo dessa arquitetura escolhida, foi que as mudanças tando de entrada, quanto de saída possam ser alteradas com um baixo risco de impacto, vale ressaltar que uma das vantagens dessa arquitetura, é a aplicação de TDD/BDD, haja visto que os testes aplicados a regra de negócio, são imutaveis nesse hipótese de alteração da porta de entrada ou saída.


## Installation

```bash
$ npm install
```



