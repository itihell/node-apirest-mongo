const express = require("express");
const cors = require("cors");
const { dbConection } = require("../database/config");
class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.endPointUsers = "/api/users";
    // TODO: Conectar a la base de datos
    this.conectarBaseDatos();
    // TODO: Middleware
    this.middleware();
    // TODO:  Rutas de la aplicación
    this.routes();
  }

  async conectarBaseDatos() {
    await dbConection();
  }

  middleware() {
    // CORS
    this.app.use(cors());

    //Lectura y parseo del body
    this.app.use(express.json());

    // TODO: Direcctorio publico
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.endPointUsers, require("../routes/users.routes"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Servidor corriendo en http://localhost:${this.port}`);
    });
  }
}

module.exports = Server;
