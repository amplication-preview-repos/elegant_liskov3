import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { VisitLogServiceBase } from "./base/visitLog.service.base";

@Injectable()
export class VisitLogService extends VisitLogServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
