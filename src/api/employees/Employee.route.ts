import { Router, Request, Response, json } from "express";
import * as controllers from "./Employee.controller";

const employeeRouter = Router();

employeeRouter.use(json());

employeeRouter.get("/", controllers.getAll);
employeeRouter.get("/:id", controllers.getById);
employeeRouter.post("/", controllers.add);

export default employeeRouter;
