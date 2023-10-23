import express, { NextFunction, Request, Response } from "express";
import employeeRouter from "./api/employees/Employee.route";

const PORT = 3000;

export class Server {
  private app = express();

  startServer() {
    this.app.use("/employees", employeeRouter);

    // this prints the error in the console, rather than in response!
    this.app.use(
      (err: Error, req: Request, res: Response, next: NextFunction) => {
        console.error(err.stack);
        res.send({message: err.message});
        next();
      }
    );

    this.app.listen(PORT, () => {
      console.log("Listening on port => " + PORT);
    });
  }
}

new Server().startServer();
