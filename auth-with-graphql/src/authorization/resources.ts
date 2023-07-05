import { Class, ValueOf } from "type-fest";

type ExtensionFunc = (object: any) => Record<string, unknown>;

/**
 * Creates a class on the fly with the given name
 * @param name
 * @returns
 */
function createClass(
  name: string,
  extensions: ExtensionFunc = () => ({})
): Class<any> {
  const fn = function (this: any, obj: any) {
    for (const k in obj) this[k] = obj[k];
    const ext = extensions(obj);
    for (const k in ext) this[k] = ext[k];
  };
  Object.defineProperty(fn, "name", { value: name });
  return fn as unknown as Class<any>;
}

export const AuthResources = {
  Employee: createClass("Employee"),
  LoggedInUser: createClass("LoggedInUser"),
};

export type AuthResource = ValueOf<typeof AuthResources>;
