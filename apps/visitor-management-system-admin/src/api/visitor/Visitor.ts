import { JsonValue } from "type-fest";
import { VisitLog } from "../visitLog/VisitLog";

export type Visitor = {
  capturedImage: JsonValue;
  createdAt: Date;
  firstName: string | null;
  id: string;
  idNumber: string | null;
  idPresented: string | null;
  lastName: string | null;
  location: string | null;
  personToVisit: string | null;
  purposeOfVisit: string | null;
  updatedAt: Date;
  visitLogs?: Array<VisitLog>;
};
