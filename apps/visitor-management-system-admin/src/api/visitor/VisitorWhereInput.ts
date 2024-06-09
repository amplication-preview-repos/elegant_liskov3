import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { VisitLogListRelationFilter } from "../visitLog/VisitLogListRelationFilter";

export type VisitorWhereInput = {
  capturedImage?: JsonFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  idNumber?: StringNullableFilter;
  idPresented?: StringNullableFilter;
  lastName?: StringNullableFilter;
  location?: StringNullableFilter;
  personToVisit?: StringNullableFilter;
  purposeOfVisit?: StringNullableFilter;
  visitLogs?: VisitLogListRelationFilter;
};
