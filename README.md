## API de Autenticação
- Stack: Node.js, Express, PostgreSQL
- Features: JWT, cookies HTTP-only, validação de e-mail
- Rotas:
  - POST `/usuarios` (cadastro)
  - POST `/usuarios/login` (login)
  - PUT `/usuarios/editar` (edição - requer auth)