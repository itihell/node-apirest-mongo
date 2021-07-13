const express = require("express");
class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    // TODO: Middleware
    this.middleware();
    //
    this.routes();
  }

  middleware() {
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.get("/", (req, res) => {
      res.send("Hola mundo");
    });
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Servidor corriendo en http://localhost:${this.port}`);
    });
  }
}

module.exports = Server;
