import { Visitor as TVisitor } from "../api/visitor/Visitor";

export const VISITOR_TITLE_FIELD = "firstName";

export const VisitorTitle = (record: TVisitor): string => {
  return record.firstName?.toString() || String(record.id);
};
