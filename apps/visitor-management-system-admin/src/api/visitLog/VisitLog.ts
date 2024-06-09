import { User } from "../user/User";
import { Visitor } from "../visitor/Visitor";

export type VisitLog = {
  createdAt: Date;
  id: string;
  updatedAt: Date;
  user?: User | null;
  visitor?: Visitor | null;
};
