import Router from "express";
import UserController from "../controller/UsuarioController.js";
import validation from "../middleware/validationMiddleware.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = Router();

router
  .post("/usuarios", validation, UserController.cadastrar)
  .post("/usuarios/login", UserController.login)
  .put("/usuarios/editar", validation, authMiddleware, UserController.editarUsuario)
export default router;
