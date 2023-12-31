## Description

Cadastro de Produtor Rural.

Esta sendo aplicado o design pattern da Arquitetura Hexagonal. Foi adotado que cada módulo, terá a seguinte estrutura de pastas:

 - modulo
    - datasource
        - converter
        - model (entidade do banco de dados)
        - repository (implementa a interface do dataprovider)
        - repository-mock
    - domain
        - dataprovider (interface de comunicação com datasource/repository)
        - converter
        - entities (entidade das regras de negócio)
        - exception
        - usecase (interface de comunicação com o transportlayer)
        - service (implementa o useCase e executa o dataProvider)
    - transportlayer
        - converter
        - entities
        - controller (realiza a chamada do usecase)
           - http

### Modulo

Um módulo é a representação de um domínio, e tem a finalidade de isolar uma regra de negócio. 

A app contém os seguinte modulos:
 * geo (estado e a localidade)
 * produtor ( crud do cadastro do produtor)
 * report ( get estatistico do cadastro do produtor)

 Para visualizar os endpoint e testar, /api é a chamada do swagger

#### TRANSPORTLAYER

É a porta de entrada de uma requisição, ela conversa com o dominio da aplicação (regra de negócio) através de Interface ( <regra>.usecase.ts)
Tanto o request como o response (/dta/ dto.ts | request.ts | response.ts ) , são convertidos para interagir com o dominio, atraves de um conversor, para um entity. 

#### DOMINIO 

É a classe que contém a regra de negócio do módulo, ela responde para quem a chamar. Caso haja erro na regra de negócio ela responde com o Exception.
A chamada de dados é realizada através do principio D do SOLID, dessa forma, a origem/destino dos dados podem vir tando de um banco de dados, quanto de um sistema de mensageria, independente do framework que seja aplicado.

### DATASOURCE
Contem a classe que realiza a persistencia no banco de dados ou executa chamada a outras api ou sistemas de mensageria

### CONSIDERAÇÕES

O objetivo dessa escolha de design de arquitetura, esta pautada na gestão de mudanças das estremidades,  é possível alterar a entrada, ou adicionar outras (dominio) , quanto mudar o destino dos dados, a saída (datasource), com baixo risco de impacto, vale ressaltar que uma das outras vantagens dessa arquitetura, é na aplicação de TDD/BDD gerar endpoints específicos para o mock de teste e quando necessário , haja visto que os testes aplicados a regra de negócio são imutaveis.


## Instalação

```bash
$ npm install
```


## Banco de Dados

Para testar a aplicação, não foi habilitado a criação do banco de dados pela app. A estratégia utilizado, foi simular a utilização de um banco de dados existente e normalizado.

É necessário criar um banco de dados vazio no postgres, e depois rodar o script que está na pasta /script/dbBrain.sql.
Está sendo utilizado como dados de acesso usuário=postgres e password=masterkey, para alteração dos dados de configuração do SGDB acessar o arquivo /config/config-database.module.ts

em desenvolvimento pode ser utilizado o arquivo .env, é necessario criar ele na raiz do projeto.


>  .env

> DB_HOST=localhost

> DB_PORT=5432

> DB_USERNAME=postgres

> DB_PASSWORD=masterkey

> DB_DATABASE=dbBrain

>

>APP_PORT=3000

>


### Massa de testes

Para realizar os testes, rode  /script/massa_testes.sql.

Na configuração atual, ele ira gerar 10.000 registros para cada cidade (30), cadastradas na tabela localidade. Os valores das áreas são geradas randomicamente.

Sempre que este script for rodado, ele apagará todos os registros da tabela produtor. Caso queira gerar uma massa menor, no script altere o valor da variável *tota_loops* para o valor desejado por cidade.

**declare total_loops integer = 10000;**


 

