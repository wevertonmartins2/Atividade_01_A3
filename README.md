
# 📦 Atividade_01_A3

API RESTful desenvolvida com **Node.js** e **Express.js** para gerenciamento de **Clientes** e **Produtos**, utilizando o ORM **Sequelize** com banco de dados **MySQL**.

---

## 📚 Tabela de Conteúdos

- [📄 Descrição do Projeto](#📄-descrição-do-projeto)
- [✨ Funcionalidades](#✨-funcionalidades)
- [📁 Estrutura do Projeto](#📁-estrutura-do-projeto)
- [🛠️ Tecnologias Utilizadas](#🛠️-tecnologias-utilizadas)
- [🔧 Pré-requisitos](#🔧-pré-requisitos)
- [⚙️ Configuração do Projeto](#⚙️-configuração-do-projeto)
- [📡 Endpoints da API](#📡-endpoints-da-api)
- [📬 Exemplos](#📬-Exemplos-de-Requisições-via-Postman-ou-Insomnia)
- [🤝 Contribuição](#🤝-contribuição)
- [👤 Autor](#👤-autor)

---

## 📄 Descrição do Projeto

**Atividade_01_A3** é uma API RESTful em **Node.js** com **Express.js**, construída para gerenciar dados de **Clientes** e **Produtos**, com suporte a operações **CRUD**, **validações**, e **tratamento de erros**. O projeto segue o padrão arquitetural **MVC (Model-View-Controller)**, garantindo uma separação clara entre a lógica de dados (Model), a lógica de aplicação (Controller) e a definição das rotas (View - no contexto de APIs). A aplicação utiliza **Sequelize** para interação com banco de dados **MySQL**.

---

## ✨ Funcionalidades

### 👥 Clientes
- 📃 Listar todos os clientes  
- 🔍 Detalhar um cliente específico  
- ➕ Adicionar novos clientes  
- ✏️ Atualizar informações de clientes  
- 🗑️ Desativar clientes (soft delete)

### 📦 Produtos
- 📃 Listar todos os produtos  
- 🔍 Detalhar um produto específico  
- ➕ Adicionar novos produtos  
- ✏️ Atualizar informações de produtos  
- ❌ Remover produtos

### 🛡️ Validações
- ✅ Validação de e-mails  
- 🧾 Validação e formatação de CPF  
- 📅 Garantia de datas de nascimento válidas (no passado)

### ⚠️ Tratamento de Erros
- Middleware global para respostas consistentes

---

## 📁 Estrutura do Projeto

```
Atividade_01_A3/
│
├── config/           # Configuração do banco de dados
├── controllers/      # Lógica de negócios (Clientes e Produtos)
├── middlewares/      # Middlewares personalizados
├── models/           # Modelos Sequelize com validações
├── routes/           # Rotas da API
├── app.js            # Arquivo principal do servidor
└── .env.example      # Exemplo de configuração ambiente
```

---

## 🛠️ Tecnologias Utilizadas

- **Node.js**
- **Express.js**
- **Sequelize** (ORM)
- **MySQL**
- **dotenv**

---

## 🔧 Pré-requisitos

Antes de iniciar, é necessário ter instalado:

- ✅ [Node.js](https://nodejs.org/) (v14 ou superior)  
- ✅ [npm](https://www.npmjs.com/)  
- ✅ [MySQL](https://www.mysql.com/)

---

## ⚙️ Configuração do Projeto

```bash
# 1. Clone o repositório
git clone https://github.com/wevertonmartins2/Atividade_01_A3.git

# 2. Acesse o diretório
cd Atividade_01_A3

# 3. Instale as dependências
npm install
```

### 🔐 Configuração do Banco

1. Crie um banco de dados no MySQL  
2. Renomeie `.env.example` para `.env` e configure:

```
DB_DATABASE=nome_do_banco
DB_USER=usuario
DB_PASSWORD=senha
DB_HOST=localhost
DB_PORT=3306
```

### 📦 Execute as migrações:

```bash
npm run db:migrate
```

### 🚀 Inicie o servidor:

```bash
npm start
```

A API estará disponível em: `http://localhost:3000`

---

## 📡 Endpoints da API

### 👥 Clientes

| Método | Rota                    | Descrição                        |
|--------|-------------------------|----------------------------------|
| GET    | `/api/clientes`         | Listar todos os clientes         |
| GET    | `/api/clientes/:id`     | Detalhar cliente específico      |
| POST   | `/api/clientes`         | Adicionar novo cliente           |
| PUT    | `/api/clientes/:id`     | Atualizar cliente                |
| DELETE | `/api/clientes/:id`     | Desativar cliente (soft delete) |

---

## 📬 Exemplos de Requisições (via Postman ou Insomnia)
📦 Produtos

| Método | Rota                    | Descrição                        |
|--------|-------------------------|----------------------------------|
| GET    | `/api/produtos`         | Listar todos os produtos         |
| GET    | `/api/produtos/:id`     | Detalhar produto específico      |
| POST   | `/api/produtos`         | Adicionar novo produto           |
| PUT    | `/api/produtos/:id`     | Atualizar produto                |
| DELETE | `/api/produtos/:id`     | Remover produto                  |

---
### 👥 Criar Cliente

POST /api/clientes
{
  "nome": "João da Silva",
  "email": "joao.silva@email.com",
  "cpf": "123.456.789-00",
  "data_nascimento": "1990-05-15"
}

### 📦 Criar Produto

POST /api/produtos
{
  "nome": "Notebook Dell Inspiron",
  "descricao": "Notebook com 16GB RAM e SSD 512GB",
  "preco": 4599.99,
  "estoque": 10
}

---

## 🤝 Contribuição

Contribuições são bem-vindas! Para contribuir:

```bash
# 1. Faça um fork do projeto
# 2. Crie uma branch
git checkout -b minha-funcionalidade

# 3. Commit das alterações
git commit -m 'Adiciona nova funcionalidade'

# 4. Envie para o repositório remoto
git push origin minha-funcionalidade

# 5. Abra um Pull Request 🚀
```

---

## 👤 Autor

Desenvolvido por: **Weverton Martins**  
🔗 GitHub: [@wevertonmartins2](https://github.com/wevertonmartins2)

---
