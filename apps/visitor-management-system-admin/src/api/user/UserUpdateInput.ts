import { InputJsonValue } from "../../types";
import { VisitLogUpdateManyWithoutUsersInput } from "./VisitLogUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  username?: string;
  visitLogs?: VisitLogUpdateManyWithoutUsersInput;
};
