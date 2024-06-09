import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { VisitorWhereUniqueInput } from "../visitor/VisitorWhereUniqueInput";

export type VisitLogUpdateInput = {
  user?: UserWhereUniqueInput | null;
  visitor?: VisitorWhereUniqueInput | null;
};
