
allow(actor, action, resource) 
    if has_permission(actor, action, resource);

actor LoggedInUser {}

resource Employee {
 permissions = ["read"];
}

has_permission(user: LoggedInUser, "read", _: Employee) if
  user.role in ["admin", "member"];


allow_field(_: LoggedInUser, "read", _: Employee, field) if
  field in EMPLOYEE_PUBLIC_FIELDS;

allow_field(user: LoggedInUser, "read", _: Employee, field) if
  field in EMPLOYEE_PRIVATE_FIELDS and
  user.role = "admin";