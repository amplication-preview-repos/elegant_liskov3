/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsJSONValue } from "../../validators";
import { IsOptional, IsString, ValidateNested } from "class-validator";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { VisitLogCreateNestedManyWithoutVisitorsInput } from "./VisitLogCreateNestedManyWithoutVisitorsInput";
import { Type } from "class-transformer";

@InputType()
class VisitorCreateInput {
  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  capturedImage?: InputJsonValue;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  firstName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  idNumber?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  idPresented?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  lastName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  location?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  personToVisit?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  purposeOfVisit?: string | null;

  @ApiProperty({
    required: false,
    type: () => VisitLogCreateNestedManyWithoutVisitorsInput,
  })
  @ValidateNested()
  @Type(() => VisitLogCreateNestedManyWithoutVisitorsInput)
  @IsOptional()
  @Field(() => VisitLogCreateNestedManyWithoutVisitorsInput, {
    nullable: true,
  })
  visitLogs?: VisitLogCreateNestedManyWithoutVisitorsInput;
}

export { VisitorCreateInput as VisitorCreateInput };
