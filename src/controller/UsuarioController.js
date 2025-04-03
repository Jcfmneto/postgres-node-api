import UserServices from "../services/UserServices.js";
const userServices = new UserServices();


class UserController {
  
  static async cadastrar(req, res) {
    const { nome, senha, email } = req.body;
    try {
      const newUser = await userServices.cadastrar({ senha, email, nome });
      return res.status(201).send(newUser);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }

  static async login(req, res) {
    const { email, senha } = req.body;
    try {
      const {acessToken} = await userServices.login({ email, senha });

      res.cookie("jwt_token", acessToken, {
        httpOnly: true,
        sameSite: "strict",
        maxAge: 3600000,
        path: "/",
      });

      res.status(200).json({message: "login ta funcioando"});
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }

  static async editarUsuario(req, res) {
    const {email, nome} = req.body;
    
    const userId = req.user.id;


    const camposAtualizados = await userServices.editarUsuario({email, nome}, userId)

    res.status(201).json({camposAtualizados});
  }
}

export default UserController;
