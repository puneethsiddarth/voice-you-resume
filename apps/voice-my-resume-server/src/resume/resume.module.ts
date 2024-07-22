import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ResumeModuleBase } from "./base/resume.module.base";
import { ResumeService } from "./resume.service";
import { ResumeController } from "./resume.controller";
import { ResumeResolver } from "./resume.resolver";

@Module({
  imports: [ResumeModuleBase, forwardRef(() => AuthModule)],
  controllers: [ResumeController],
  providers: [ResumeService, ResumeResolver],
  exports: [ResumeService],
})
export class ResumeModule {}
