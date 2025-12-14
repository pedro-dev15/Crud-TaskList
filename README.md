# CRUD de Tarefas em TypeScript

[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/) 
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white)](https://nodejs.org/) 
[![Express](https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=white)](https://expressjs.com/) 
[![Prisma](https://img.shields.io/badge/Prisma-0C344B?style=flat&logo=prisma&logoColor=white)](https://www.prisma.io/) 
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-336791?style=flat&logo=postgresql&logoColor=white)](https://www.postgresql.org/)

---

## Índice
- [Descrição](#descrição)
- [Tecnologias](#tecnologias)
- [Endpoints](#endpoints)
- [Como Rodar](#como-rodar)
- [Colaboradores](#colaboradores)
- [Licença](#licença)

---

## Descrição
CRUD de tarefas totalmente escrito em **TypeScript**, usando **Express** e **Prisma** com **PostgreSQL**.  
Permite gerenciar tarefas com campos:

- `title` (string)
- `done` (boolean, default `false`)
- `createdAt` (DateTime automático)

Ideal para aprendizado e base de projetos fullstack com TypeScript.

---

## Tecnologias
- **TypeScript** – tipagem estática e moderna
- **Node.js** – runtime do servidor
- **Express** – framework web
- **Prisma** – ORM
- **PostgreSQL** – banco relacional
- **VS Code** – IDE recomendada

---

## Endpoints

> Clique no endpoint para exemplo de uso rápido (simulação de navegação).

| Método | Endpoint          | Descrição                       | Corpo (JSON)                         |
|--------|-----------------|---------------------------------|--------------------------------------|
| GET    | [`/tasks`](#get-tasks)         | Listar todas as tarefas         | –                                    |
| GET    | [`/tasks/:id`](#get-tasksid)   | Buscar tarefa pelo ID           | –                                    |
| POST   | [`/tasks`](#post-tasks)        | Criar nova tarefa               | `{ "title": "Nome da tarefa" }`     |
| PUT    | [`/tasks/:id`](#put-tasksid)   | Atualizar tarefa                | `{ "title": "...", "done": true }`  |
| DELETE | [`/tasks/:id`](#delete-tasksid)| Deletar tarefa                  | –                                    |

---

## Como Rodar

1. Clone o repositório:

```bash
git clone <URL_DO_REPOSITORIO>
cd Projeto-CRUD-Simples

```
2. Instale as dependências:

```bash
npm install
```

3. Configure o Banco de Dados:

    **Crie um .env:**

```env
DATABASE_URL=postgresql://usuario:senha@localhost:5432/nome_do_banco
```
4. Gere o Prisma Client e rode a migration:
```bash
npx prisma migrate dev --name init
```

5. Inicie o servidor:
```bash
npm run dev
```
6. Teste os endpoints com Postman, Insomnia ou qualquer cliente HTTP.
## Colaboradores
- **Pedro Da Cunha** – Desenvolvedor principal  
  [![Pedro Da Cunha](https://github.com/pedro-dev15.png?size=100)](https://github.com/pedro-dev15)

## Licença
MIT License – consulte o arquivo LICENSE para mais detalhes.