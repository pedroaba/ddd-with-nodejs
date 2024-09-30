# DDD com Node.js

## Visão Geral

Este repositório é um modelo para implementar o Design Orientado a Domínio (DDD) usando Node.js. Ele foi projetado para
facilitar o desenvolvimento de APIs RESTful com foco na organização do código em torno do domínio de negócios.

## Funcionalidades

- **Design Orientado a Domínio (DDD)**: Enfatiza o modelamento do código para refletir de perto o domínio de negócios.
- **Node.js**: Utiliza Node.js para construir a aplicação do lado do servidor.
- **API RESTful**: Projetado para servir APIs RESTful, pronto para implantação sem servidor.
- **Suporte a Banco de Dados**: Compatível com PostgreSQL e MySQL usando Sequelize como ORM.
- **Ambiente de Desenvolvimento**: Configuração fácil para um ambiente de desenvolvimento usando pnpm.

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/pedroaba/ddd-with-nodejs.git
   cd ddd-with-nodejs
   ```

2. Instale as dependências:
   ```bash
   pnpm install
   ```

3. Configure a conexão com o banco de dados criando um arquivo `.env` baseado no `.env.example`.

4. Execute as migrações do banco de dados:
   ```bash
   pnpm run db:migrate
   ```

5. Inicie a aplicação:
   ```bash
   pnpm dev
   ```

## Uso

Após iniciar a aplicação, acesse-a em `http://localhost:<PORT>` para interagir com a API.

## Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

## Licença

Este projeto é licenciado sob a Licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
