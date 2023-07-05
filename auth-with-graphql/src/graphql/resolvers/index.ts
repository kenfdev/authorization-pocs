import { Context } from "../context";
import { QueryResolvers, EmployeeResolvers } from "../../generated/graphql";
import { findEmployee } from "../../features/hr/findEmployee/findEmployee";

const Employee: EmployeeResolvers<Context> = {
  dateOfBirth(parent, _, { user, authz }) {
    if (!user) return null;

    return authz.isFieldAllowed(user, "dateOfBirth", parent)
      ? parent.dateOfBirth ?? null
      : null;
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
