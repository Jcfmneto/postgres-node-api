import bodyParser from "body-parser";
import usuarios from "./usuariosRoutes.js";
import cookieParser from "cookie-parser";

export default (app) => {
  app.use(bodyParser.json(), cookieParser(), usuarios);
};
