import { InputJsonValue } from "../../types";
import { VisitLogCreateNestedManyWithoutVisitorsInput } from "./VisitLogCreateNestedManyWithoutVisitorsInput";

export type VisitorCreateInput = {
  capturedImage?: InputJsonValue;
  firstName?: string | null;
  idNumber?: string | null;
  idPresented?: string | null;
  lastName?: string | null;
  location?: string | null;
  personToVisit?: string | null;
  purposeOfVisit?: string | null;
  visitLogs?: VisitLogCreateNestedManyWithoutVisitorsInput;
};
