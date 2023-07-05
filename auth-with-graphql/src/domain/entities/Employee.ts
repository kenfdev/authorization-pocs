export interface Employee {
  type: "Employee";
  id: string;
  name: string;
  dateOfBirth: string;
}

type CreateEmployeeProps = Omit<Employee, "type">;

export const createEmployee = (props: CreateEmployeeProps) => {
  return {
    ...props,
    type: "Employee",
  };
};
