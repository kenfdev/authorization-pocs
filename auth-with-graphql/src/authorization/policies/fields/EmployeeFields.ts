import { Employee } from "../../../domain/entities/Employee";
import { NonFunctionPropertyNames } from "../../../shared/types/utils";

export const EMPLOYEE_PUBLIC_FIELDS: NonFunctionPropertyNames<Employee>[] = [
  "id",
  "name",
];

export const EMPLOYEE_PRIVATE_FIELDS: NonFunctionPropertyNames<Employee>[] = [
  "dateOfBirth",
];
