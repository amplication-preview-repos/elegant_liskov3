import { JsonValue } from "type-fest";
import { VisitLog } from "../visitLog/VisitLog";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
  visitLogs?: Array<VisitLog>;
};
