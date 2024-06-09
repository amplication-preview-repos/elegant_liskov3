import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { VisitLogService } from "./visitLog.service";
import { VisitLogControllerBase } from "./base/visitLog.controller.base";

@swagger.ApiTags("visitLogs")
@common.Controller("visitLogs")
export class VisitLogController extends VisitLogControllerBase {
  constructor(
    protected readonly service: VisitLogService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
