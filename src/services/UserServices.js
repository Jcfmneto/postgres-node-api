import database from "../models/database.js";
import bcrypt, { compare } from "bcrypt";
import jwt from "jsonwebtoken";
import { jsonSecret } from "../jsonSecret.js";

class UserServices {
  async cadastrar(dto) {
    const HashSenha = await bcrypt.hash(dto.senha, 10);

    try {
      const Usuario = {
        nome: dto.nome,
        email: dto.email,
        senha: HashSenha,
      };
      const newUser = await database(
        "INSERT INTO users (nome, email, senha) VALUES ($1, $2, $3) RETURNING nome, email, senha",
        [Usuario.nome, Usuario.email, Usuario.senha]
      );

      return newUser.rows[0];
    } catch (error) {
      throw new Error("Erro ao cadastrar usuario");
    }
  }

  async login(dto) {

    const results = await database(
      "SELECT email, senha, id, nome FROM users WHERE email = $1",
      [dto.email]
    );
    
      if (!results.rows || results.rows.length === 0) {
        throw new Error("Usuário não encontrado");
      }
    const user = results.rows[0];
  
    const senhasIguais = await bcrypt.compare(dto.senha, user.senha);

    if (!senhasIguais) {
      throw new Error("Usuario ou senha Invalido");
    }

    const acessToken = jwt.sign(
      {
        id: user.id,
        email: user.email,
      },
      jsonSecret,
      {
        expiresIn: "1d",
      }
    );

    return {
      acessToken,
      user: {
        id: user.id,
        email: user.email,
        nome: user.nome
      }
    };
  }

  async editarUsuario(dto, id){
    

    const camposAtualizados = await database('UPDATE users SET nome = $1, email = $2 WHERE id = $3 RETURNING nome, email, id', 
   [dto.nome, dto.email, id]);
      
      return camposAtualizados.rows[0]

  }
}
export default UserServices;
