# Sgi-Ubs

## Descrição do Projeto
<p align="center">Sistema de gerenciamento integrado de Ubs</p>

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:

#### Back
[Php 7.3](https://www.php.net/downloads.php), [Composer](https://getcomposer.org/download/).
#### Front
[Node.js 14](https://nodejs.org/en/download/releases/), [Angular 12](https://angular.io/guide/setup-local). 

#### Base 
[MySql](https://dev.mysql.com/downloads/mysql/)

### Rodando o Back End (servidor)

```bash
# Clone este repositório
$ git clone <https://github.com/daviviana/ubsApp>
# Acesse a pasta do projeto e execute o arquivo Inicial.sql para criar a base e inserir os dados iniciais

# Acesse a pasta do projeto no terminal/cmd
$ cd ubsApp

# Vá para a pasta Back
cd back

# Instale as dependências
$ composer install
 
 # Copie o conteudo da pasta ajuste para /vendor/tymon/src/Middleware
 $ cp ~/ubsApp/ajuste/* ~/ubsApp/back/vendor/tymon/src/Middleware
 
# Execute a aplicação em modo de desenvolvimento
$ php artisan serve

# O servidor inciará na porta:8000 - acesse <https://www.postman.com/lugester/workspace/tcc> caso queira executar apenas chamadas do back
# Os usuarios iniciais criados tem a senha mudar123 (a mesma estará criptografada na base)
```

### Rodando o Front (servidor)

```bash
# Clone este repositório

# Acesse a pasta do projeto no terminal/cmd
$ cd ubsApp

# Vá para a pasta Front
cd front

# Instale as dependências
$ npm i

# Execute a aplicação em modo de desenvolvimento
$ npm start

# O servidor inciará na porta:4200 - acesse <http://localhost:4200>
```
