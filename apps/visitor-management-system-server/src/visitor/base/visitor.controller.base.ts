/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request, Response } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { FileInterceptor } from "@nestjs/platform-express";
import { VisitorService } from "../visitor.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { VisitorCreateInput } from "./VisitorCreateInput";
import { Visitor } from "./Visitor";
import { VisitorFindManyArgs } from "./VisitorFindManyArgs";
import { VisitorWhereUniqueInput } from "./VisitorWhereUniqueInput";
import { VisitorUpdateInput } from "./VisitorUpdateInput";
import { VisitLogFindManyArgs } from "../../visitLog/base/VisitLogFindManyArgs";
import { VisitLog } from "../../visitLog/base/VisitLog";
import { VisitLogWhereUniqueInput } from "../../visitLog/base/VisitLogWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class VisitorControllerBase {
  constructor(
    protected readonly service: VisitorService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Visitor })
  @nestAccessControl.UseRoles({
    resource: "Visitor",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createVisitor(
    @common.Body() data: VisitorCreateInput
  ): Promise<Visitor> {
    return await this.service.createVisitor({
      data: data,
      select: {
        capturedImage: true,
        createdAt: true,
        firstName: true,
        id: true,
        idNumber: true,
        idPresented: true,
        lastName: true,
        location: true,
        personToVisit: true,
        purposeOfVisit: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Visitor] })
  @ApiNestedQuery(VisitorFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Visitor",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async visitors(@common.Req() request: Request): Promise<Visitor[]> {
    const args = plainToClass(VisitorFindManyArgs, request.query);
    return this.service.visitors({
      ...args,
      select: {
        capturedImage: true,
        createdAt: true,
        firstName: true,
        id: true,
        idNumber: true,
        idPresented: true,
        lastName: true,
        location: true,
        personToVisit: true,
        purposeOfVisit: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Visitor })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Visitor",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async visitor(
    @common.Param() params: VisitorWhereUniqueInput
  ): Promise<Visitor | null> {
    const result = await this.service.visitor({
      where: params,
      select: {
        capturedImage: true,
        createdAt: true,
        firstName: true,
        id: true,
        idNumber: true,
        idPresented: true,
        lastName: true,
        location: true,
        personToVisit: true,
        purposeOfVisit: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Visitor })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Visitor",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateVisitor(
    @common.Param() params: VisitorWhereUniqueInput,
    @common.Body() data: VisitorUpdateInput
  ): Promise<Visitor | null> {
    try {
      return await this.service.updateVisitor({
        where: params,
        data: data,
        select: {
          capturedImage: true,
          createdAt: true,
          firstName: true,
          id: true,
          idNumber: true,
          idPresented: true,
          lastName: true,
          location: true,
          personToVisit: true,
          purposeOfVisit: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Visitor })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Visitor",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteVisitor(
    @common.Param() params: VisitorWhereUniqueInput
  ): Promise<Visitor | null> {
    try {
      return await this.service.deleteVisitor({
        where: params,
        select: {
          capturedImage: true,
          createdAt: true,
          firstName: true,
          id: true,
          idNumber: true,
          idPresented: true,
          lastName: true,
          location: true,
          personToVisit: true,
          purposeOfVisit: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Put(":id/capturedImage")
  @common.UseInterceptors(FileInterceptor("file"))
  @swagger.ApiConsumes("multipart/form-data")
  @swagger.ApiBody({
    schema: {
      type: "object",

      properties: {
        file: {
          type: "string",
          format: "binary",
        },
      },
    },
  })
  @swagger.ApiParam({
    name: "id",
    type: "string",
    required: true,
  })
  @swagger.ApiCreatedResponse({
    type: Visitor,
    status: "2XX",
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  async uploadCapturedImage(
    @common.Param()
    params: VisitorWhereUniqueInput,
    @common.UploadedFile()
    file: Express.Multer.File
  ): Promise<Visitor> {
    return this.service.uploadCapturedImage(
      {
        where: params,
      },
      Object.assign(file, {
        filename: file.originalname,
      })
    );
  }

  @common.Get(":id/capturedImage")
  @swagger.ApiParam({
    name: "id",
    type: "string",
    required: true,
  })
  @swagger.ApiOkResponse({
    type: common.StreamableFile,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  async downloadCapturedImage(
    @common.Param()
    params: VisitorWhereUniqueInput,
    @common.Res({
      passthrough: true,
    })
    res: Response
  ): Promise<common.StreamableFile> {
    const result = await this.service.downloadCapturedImage({
      where: params,
    });

    if (result === null) {
      throw new errors.NotFoundException(
        "No resource was found for ",
        JSON.stringify(params)
      );
    }

    res.setHeader(
      "Content-Disposition",
      `attachment; filename=${result.filename}`
    );
    res.setHeader("Content-Type", result.mimetype);
    return result.stream;
  }

  @common.Delete(":id/capturedImage")
  @swagger.ApiOkResponse({
    type: Visitor,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  async deleteCapturedImage(
    @common.Param()
    params: VisitorWhereUniqueInput
  ): Promise<Visitor> {
    return this.service.deleteCapturedImage({
      where: params,
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/visitLogs")
  @ApiNestedQuery(VisitLogFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "VisitLog",
    action: "read",
    possession: "any",
  })
  async findVisitLogs(
    @common.Req() request: Request,
    @common.Param() params: VisitorWhereUniqueInput
  ): Promise<VisitLog[]> {
    const query = plainToClass(VisitLogFindManyArgs, request.query);
    const results = await this.service.findVisitLogs(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },

        visitor: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/visitLogs")
  @nestAccessControl.UseRoles({
    resource: "Visitor",
    action: "update",
    possession: "any",
  })
  async connectVisitLogs(
    @common.Param() params: VisitorWhereUniqueInput,
    @common.Body() body: VisitLogWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      visitLogs: {
        connect: body,
      },
    };
    await this.service.updateVisitor({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/visitLogs")
  @nestAccessControl.UseRoles({
    resource: "Visitor",
    action: "update",
    possession: "any",
  })
  async updateVisitLogs(
    @common.Param() params: VisitorWhereUniqueInput,
    @common.Body() body: VisitLogWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      visitLogs: {
        set: body,
      },
    };
    await this.service.updateVisitor({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/visitLogs")
  @nestAccessControl.UseRoles({
    resource: "Visitor",
    action: "update",
    possession: "any",
  })
  async disconnectVisitLogs(
    @common.Param() params: VisitorWhereUniqueInput,
    @common.Body() body: VisitLogWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      visitLogs: {
        disconnect: body,
      },
    };
    await this.service.updateVisitor({
      where: params,
      data,
      select: { id: true },
    });
  }
}
