import express, { Request, Response } from "express";
import employeeRouter from "./api/employees/Employee.route";

const PORT = 3000;

export class Server {
  private app = express();

  startServer() {
    this.app.use("/employees", employeeRouter);
    this.app.listen(PORT, () => {
      console.log("Listening on port => " + PORT);
    });
  }
}

new Server().startServer();
