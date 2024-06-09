import { SortOrder } from "../../util/SortOrder";

export type VisitLogOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
  visitorId?: SortOrder;
};
