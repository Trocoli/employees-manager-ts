import { Response, Request, NextFunction } from "express";
import { Employee } from "./Employee.model";

export function validateAsEmployee(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const requestBody = req.body;
    if (!(requestBody as Employee).name) {
      throw new FieldError("Name Required");
    }
    if (
      !["Manager", "HR", "Engineer"].includes(
        (requestBody as Employee).position
      )
    ) {
      throw new FieldError("Invalid Position");
    }
    if (!(requestBody as Employee).salary) {
      throw new FieldError("Salary Required");
    }
    const parsedBody: Partial<Employee> = {
      name: requestBody.name,
      position: requestBody.position,
      salary: requestBody.salary,
    };
    req.body = parsedBody;
    next(); // Must have next call or it will take forever
  } catch (err) {
    if (err instanceof FieldError) {
      res.status(400);
    }
    next(err);
  }
}

class FieldError extends Error {}
