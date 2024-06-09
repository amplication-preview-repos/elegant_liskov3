import { InputJsonValue } from "../../types";
import { VisitLogCreateNestedManyWithoutUsersInput } from "./VisitLogCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  username: string;
  visitLogs?: VisitLogCreateNestedManyWithoutUsersInput;
};
