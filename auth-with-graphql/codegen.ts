import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "./src/graphql/schema.graphql",
  generates: {
    "src/generated/graphql.ts": {
      plugins: ["typescript", "typescript-resolvers"],
      config: {
        mapperTypeSuffix: "Model",
        mappers: {
          FindEmployeeResult:
            "../features/hr/findEmployee/findEmployee#FindEmployeeResult",
          Employee: "../domain/entities/Employee#Employee",
        },
        contextType: "../graphql/context#Context",
        enumsAsTypes: true,
      },
    },
  },
};

export default config;
