# Shop.co E-commerce 2

Este repositório é uma evolução do projeto [Shop.co E-commerce](https://github.com/Kaiquemarques00/Shop.co-E-commerce), trazendo melhorias significativas e novas funcionalidades. Agora, além da homepage, o projeto conta com telas adicionais, como detalhes de produtos e categorias. Também foi implementado um backend robusto utilizando **NestJS**, proporcionando uma API para buscar categorias, produtos e reviews, com suporte a filtros dinâmicos.

## Tecnologias Utilizadas

### Frontend:
- **Next.js**: Framework para renderização e separação de páginas e componentes.
- **TypeScript**: Tipagem estática para maior segurança no desenvolvimento.
- **Axios**: Biblioteca para realizar requisições HTTP para a API.
- **Vercel**: Plataforma de hospedagem do frontend.

### Backend:
- **NestJS**: Framework para desenvolvimento de APIs escaláveis.
- **Prisma ORM**: Facilita operações no banco de dados.
- **PostgreSQL**: Banco de dados relacional utilizado.
- **Tembo.io**: Serviço de hospedagem do banco de dados.
- **Render**: Plataforma de hospedagem da API.

## Funcionalidades

### Frontend:
- [x] **Homepage responsiva**: Interface adaptável a diferentes tamanhos de tela.
- [x] **Detalhes do Produto**: Exibição detalhada de um produto com informações como descrição, preço e avaliação.
- [x] **Categorias**: Listagem de produtos filtrada por categorias.
- [x] **Integração com API**: Dados dinâmicos extraídos do backend.

### Backend:
- [x] **Gerenciamento de Produtos**: Busca de produtos por categoria, tag e ID.
- [x] **Gerenciamento de Categorias**: Filtragem de categorias por nome.
- [x] **Avaliações (Reviews)**: Recuperação de avaliações de produtos.
- [x] **Filtragem de Dados**: Implementação de filtros dinâmicos para melhorar a experiência do usuário.

## Como Executar o Projeto

### 1. Clone o Repositório
```bash
git clone https://github.com/Kaiquemarques00/Shop.co-E-commerce-2.git
```

### 2. Configuração do Backend

#### 2.1 Acesse o diretório do backend:
```bash
cd backend
```

#### 2.2 Instale as dependências:
```bash
yarn install  # ou npm install
```

#### 2.3 Configure as variáveis de ambiente:
Crie um arquivo `.env` com as credenciais do PostgreSQL hospedado no **Tembo.io**.

#### 2.4 Execute as migrações do Prisma:
```bash
yarn prisma migrate dev  # ou npm run prisma migrate dev
```

#### 2.5 Inicie o servidor:
```bash
yarn start  # ou npm run start
```
A API estará disponível em `http://localhost:3000` (ou conforme configurado no `.env`).

### 3. Configuração do Frontend

#### 3.1 Acesse o diretório do frontend:
```bash
cd frontend
```

#### 3.2 Instale as dependências:
```bash
yarn install  # ou npm install
```

#### 3.3 Configure as variáveis de ambiente:
Crie um arquivo `.env.local` e configure a URL da API hospedada no **Render**.

#### 3.4 Inicie o servidor de desenvolvimento:
```bash
yarn dev  # ou npm run dev
```
A aplicação estará disponível em `http://localhost:3000`.

## Links do Projeto
- **Frontend (Vercel)**: [Shop.co E-commerce 2](https://shop-co-e-commerce-2-dbz268r7g-kaiquemarques00s-projects.vercel.app/home)
- **Backend (Render)**: [API](https://shop-co-e-commerce-2-1.onrender.com)

Este projeto continuará evoluindo com novas funcionalidades! Fique ligado para futuras atualizações. 🚀
