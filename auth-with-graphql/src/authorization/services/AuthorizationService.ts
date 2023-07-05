import { LoggedInUser } from "../../domain/entities/LoggedInUser";
import { NonFunctionPropertyNames } from "../../shared/types/utils";

export interface AuthorizationService {
  canReadField<R>(
    actor: LoggedInUser,
    fieldName: NonFunctionPropertyNames<R>,
    resource: R
  ): Promise<boolean>;
}
