import { Router, json } from "express";
import * as controllers from "./Employee.controller";
import { validateAsEmployee } from "./ZodValidator";

const employeeRouter = Router();

employeeRouter.use(json());

employeeRouter.get("/", controllers.getAll);
employeeRouter.get("/:id", controllers.getById);
employeeRouter.post("/", validateAsEmployee, controllers.add);

export default employeeRouter;
