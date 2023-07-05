export interface LoggedInUser {
  type: "LoggedInUser";
  id: string;
  role: "admin" | "member" | "guest";
}

type CreateLoggedInUserProps = {
  id: string;
};

export function createLoggedInUser({
  id,
}: CreateLoggedInUserProps): LoggedInUser {
  // TODO: this logic should be moved somewhere else
  const role = id === "1" ? "admin" : id === "2" ? "member" : "guest";

  return {
    type: "LoggedInUser",
    id,
    role,
  };
}
