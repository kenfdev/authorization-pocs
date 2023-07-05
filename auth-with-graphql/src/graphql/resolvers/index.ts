import { Context } from "../context";
import { QueryResolvers, Resolvers } from "../../generated/graphql";
import { findEmployee } from "../../features/hr/findEmployee/findEmployee";

const typeResolvers: Resolvers = {
  FindEmployeeResult: {
    __resolveType: (parent) => parent.type,
  },
  Employee: {
    async id(parent, _, { user, authz }) {
      if (!user) return null;

      const canRead = await authz.canReadField(user, "id", parent);

      return canRead ? parent.id ?? null : null;
    },
    async dateOfBirth(parent, _, { user, authz }) {
      if (!user) return null;

      const canRead = await authz.canReadField(user, "dateOfBirth", parent);

      return canRead ? parent.dateOfBirth ?? null : null;
    },
  },
};

const Query: QueryResolvers<Context> = {
  findEmployee: async (parent, { id }, { prisma, authz }) => {
    return findEmployee({ employeeId: id, deps: { prisma, authz } });
  },
};

export default {
  Query,
  ...typeResolvers,
};
