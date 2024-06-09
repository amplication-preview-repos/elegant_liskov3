import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { VisitorModuleBase } from "./base/visitor.module.base";
import { VisitorService } from "./visitor.service";
import { VisitorController } from "./visitor.controller";
import { VisitorResolver } from "./visitor.resolver";

@Module({
  imports: [VisitorModuleBase, forwardRef(() => AuthModule)],
  controllers: [VisitorController],
  providers: [VisitorService, VisitorResolver],
  exports: [VisitorService],
})
export class VisitorModule {}
