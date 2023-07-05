import { Context } from "../context";
import { QueryResolvers, EmployeeResolvers } from "../../generated/graphql";
import { findEmployee } from "../../features/hr/findEmployee/findEmployee";
import { AuthResources } from "../../authorization/resources";

const Employee: EmployeeResolvers<Context> = {
  async id(parent, _, { user, authz }) {
    if (!user) return null;

    const canRead = await authz.canReadField(
      user,
      "id",
      parent,
      AuthResources.Employee
    );

    return canRead ? parent.id ?? null : null;
  },
  async dateOfBirth(parent, _, { user, authz }) {
    if (!user) return null;

    const canRead = await authz.canReadField(
      user,
      "dateOfBirth",
      parent,
      AuthResources.Employee
    );

    return canRead ? parent.dateOfBirth ?? null : null;
  },
};

const Query: QueryResolvers<Context> = {
  findEmployee: async (parent, { id }, { prisma, authz }) => {
    return findEmployee({ employeeId: id, deps: { prisma, authz } });
  },
};

export default {
  Query,
  Employee,
};
