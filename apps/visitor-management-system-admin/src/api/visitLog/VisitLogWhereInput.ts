import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { VisitorWhereUniqueInput } from "../visitor/VisitorWhereUniqueInput";

export type VisitLogWhereInput = {
  id?: StringFilter;
  user?: UserWhereUniqueInput;
  visitor?: VisitorWhereUniqueInput;
};
