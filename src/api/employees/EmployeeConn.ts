import { Db } from "../../data/Db";
import { Employee } from "./Employee.model";

export class EmployeeConn {
  private employeeDataBase = new Db<Employee>();

  public async addEmployee(empl: Employee) {
    empl.employedAt = new Date();
    const id = await this.employeeDataBase.insert(empl);
    return id;
  }

  public async getEmployeeById(id: string) {
    const employee = await this.employeeDataBase.getBy("id", id);
    return employee;
  }

  public async getAllEmployees() {
    return this.employeeDataBase.getAllElements();
  }
}
