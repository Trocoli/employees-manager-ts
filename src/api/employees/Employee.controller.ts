import { Response, Request, NextFunction } from "express";
import { Employee } from "./Employee.model";
import { EmployeeConn } from "./EmployeeConn";
import { injectDependency } from "../../shared/Container";

const conn = new EmployeeConn();
injectDependency('EmployeeConn',conn)

export async function getAll(
  req: Request,
  res: Response<Employee[]>,
  next: NextFunction
) {
  // next -> middleware
  try {
    const employees = await conn.getAllEmployees();
    res.json(employees);
  } catch (error) {
    next(error);
  }
}
export async function getById(
  req: Request<{ id: string }>,
  res: Response<Employee | { message: string }>,
  next: NextFunction
) {
  // next -> middleware
  try {
    const id = req.params.id;
    const employee = await conn.getEmployeeById(id);
    if (employee) {
      res.status(200).json(employee);
    } else {
      res.status(404).json({ message: "User not found at id: " + id });
    }
  } catch (error) {
    next(error);
  }
}

type ObjectWithId = {
  id: string;
};

export async function add(
  req: Request<{}, ObjectWithId, Employee>,
  res: Response<ObjectWithId>,
  next: NextFunction
) {
  try {
    const emplId = await conn.addEmployee(req.body);
    res.json({
      id: emplId,
    });
  } catch (error) {
    next(error);
  }
}
