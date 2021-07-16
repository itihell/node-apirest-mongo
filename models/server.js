const express = require("express");
const cors = require("cors");
class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    // TODO: Middleware
    this.middleware();
    // TODO:  Rutas de la aplicación
    this.routes();
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
    this.app.use("/api/users", require("../routes/users.routes"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Servidor corriendo en http://localhost:${this.port}`);
    });
  }
}

module.exports = Server;
