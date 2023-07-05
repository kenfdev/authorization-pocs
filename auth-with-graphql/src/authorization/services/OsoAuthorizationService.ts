import { Oso } from "oso";
import { LoggedInUser } from "../../domain/entities/LoggedInUser";
import { NonFunctionPropertyNames } from "../../shared/types/utils";
import { AuthorizationService } from "./AuthorizationService";
import path from "path";
import { AuthResource, AuthResources } from "../resources";
import {
  EMPLOYEE_PRIVATE_FIELDS,
  EMPLOYEE_PUBLIC_FIELDS,
  // EmployeeFields,
} from "../policies/fields/EmployeeFields";

export class OsoAuthorizationService implements AuthorizationService {
  constructor(private readonly oso: Oso) {}

  async canReadField<R>(
    actor: LoggedInUser,
    fieldName: NonFunctionPropertyNames<R>,
    resource: R
  ): Promise<boolean> {
    try {
      console.log(
        "authorizing",
        JSON.stringify({ actor, fieldName, resource })
      );
      await this.oso.authorizeField(actor, "read", resource, fieldName);
      return true;
    } catch (e) {
      return false;
    }
  }
}

export const createOsoAuthorizationService = async () => {
  const oso = new Oso();
  oso.registerClass(class {}, {
    name: "LoggedInUser",
    isaCheck: (v) => v.type === "LoggedInUser",
  });
  oso.registerClass(class {}, {
    name: "Employee",
    isaCheck: (v) => v.type === "Employee",
  });
  oso.registerConstant(EMPLOYEE_PUBLIC_FIELDS, "EMPLOYEE_PUBLIC_FIELDS");
  oso.registerConstant(EMPLOYEE_PRIVATE_FIELDS, "EMPLOYEE_PRIVATE_FIELDS");
  await oso.loadFiles([path.join(__dirname, "../policies", "main.polar")]);

  return new OsoAuthorizationService(oso);
};
