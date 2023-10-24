import { Router, Request, Response, json } from "express";
import { resolveInjected } from "../../shared/Container";
import { EmployeeConn } from "../employees/EmployeeConn";

const reportsRouter = Router();
reportsRouter.use(json());
const employeeConn = resolveInjected<EmployeeConn>("EmployeeConn");

reportsRouter.get("/salaries", async (req: Request, res: Response) => {
  const allEmployees = await employeeConn.getAllEmployees();

  const allSalaries = allEmployees.map((employee) => ({
    [employee.name]: employee.salary,
  }));
  res.json(allSalaries);
});

export default reportsRouter;
