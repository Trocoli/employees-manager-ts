type Position = "Manager" | "HR" | "Developer" | "Engineer";

export type Employee = {
  id: string;
  name: string;
  employedAt: Date;
  position: Position;
  salary: number;
};
