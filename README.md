# Projeto Node.js + PostgreSQL

Uma API RESTful para cadastro, login e gerenciamento de usuários, utilizando JWT para autenticação e PostgreSQL como banco de dados.

## 🚀 Tecnologias

Liste as principais tecnologias utilizadas, por exemplo:
- Backend: Node.js, Express
- Banco de Dados: PostgreSQL
- Autenticação: JWT (armazenado em cookies HTTP-only)
- Segurança: Bcrypt (hash de senhas), validação de e-mail
- Outros: Pool de conexões, middlewares customizados

## 📌 Funcionalidades

- ✅ Cadastro de usuários (nome, e-mail, senha criptografada)
- ✅ Login com JWT (token armazenado em cookie seguro)
- ✅ Edição de perfil (protegida por autenticação)
- ✅ Validação de e-mail via regex
  

## 📦 Instalação e Uso
```bash
# Clone este repositório
git clone https://github.com/seu-usuario/nome-do-repositorio.git

# Entre no diretório
cd nome-do-repositorio

# Instale as dependências
npm install

# Crie um arquivo .env na raiz com:

PORTA="porta_da_aplicação"
SENHA_DB="sua_senha_postgre"
USER_DB="usuario"
DATABASE="sua_database"

#Crie um jsonSecret.js na raiz com:

export const jsonSecret  = "secret_do_jsonwebtoken";

# Rode o projeto
npm start
