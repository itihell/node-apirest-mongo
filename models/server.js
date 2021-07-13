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
    this.app.use(cors());

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
