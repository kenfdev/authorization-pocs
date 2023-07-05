import { LoggedInUser } from "../../domain/entities/LoggedInUser";
import { NonFunctionPropertyNames } from "../../shared/types/utils";
import { AuthResource } from "../resources";

export interface AuthorizationService {
  canReadField<R>(
    actor: LoggedInUser,
    fieldName: NonFunctionPropertyNames<R>,
    resource: R,
    resourceClass: AuthResource
  ): Promise<boolean>;
}
