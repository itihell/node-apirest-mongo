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
    this.app.get("/api", (req, res) => {
      res.json({
        message: "get",
      });
    });
    this.app.put("/api", (req, res) => {
      res.json({
        message: "put",
      });
    });
    this.app.post("/api", (req, res) => {
      res.json({
        message: "post",
      });
    });
    this.app.delete("/api", (req, res) => {
      res.json({
        message: "delete",
      });
    });
    this.app.patch("/api", (req, res) => {
      res.json({
        message: "patch",
      });
    });
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Servidor corriendo en http://localhost:${this.port}`);
    });
  }
}

module.exports = Server;
