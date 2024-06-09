import { VisitLog as TVisitLog } from "../api/visitLog/VisitLog";

export const VISITLOG_TITLE_FIELD = "id";

export const VisitLogTitle = (record: TVisitLog): string => {
  return record.id?.toString() || String(record.id);
};
