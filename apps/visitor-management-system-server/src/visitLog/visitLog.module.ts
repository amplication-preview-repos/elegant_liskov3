import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { VisitLogModuleBase } from "./base/visitLog.module.base";
import { VisitLogService } from "./visitLog.service";
import { VisitLogController } from "./visitLog.controller";
import { VisitLogResolver } from "./visitLog.resolver";

@Module({
  imports: [VisitLogModuleBase, forwardRef(() => AuthModule)],
  controllers: [VisitLogController],
  providers: [VisitLogService, VisitLogResolver],
  exports: [VisitLogService],
})
export class VisitLogModule {}
