import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { VisitorWhereUniqueInput } from "../visitor/VisitorWhereUniqueInput";

export type VisitLogCreateInput = {
  user?: UserWhereUniqueInput | null;
  visitor?: VisitorWhereUniqueInput | null;
};
