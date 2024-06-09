import { InputJsonValue } from "../../types";
import { VisitLogUpdateManyWithoutVisitorsInput } from "./VisitLogUpdateManyWithoutVisitorsInput";

export type VisitorUpdateInput = {
  capturedImage?: InputJsonValue;
  firstName?: string | null;
  idNumber?: string | null;
  idPresented?: string | null;
  lastName?: string | null;
  location?: string | null;
  personToVisit?: string | null;
  purposeOfVisit?: string | null;
  visitLogs?: VisitLogUpdateManyWithoutVisitorsInput;
};
