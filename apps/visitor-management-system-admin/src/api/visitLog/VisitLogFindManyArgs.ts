import { VisitLogWhereInput } from "./VisitLogWhereInput";
import { VisitLogOrderByInput } from "./VisitLogOrderByInput";

export type VisitLogFindManyArgs = {
  where?: VisitLogWhereInput;
  orderBy?: Array<VisitLogOrderByInput>;
  skip?: number;
  take?: number;
};
