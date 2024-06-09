/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { VisitLogWhereUniqueInput } from "./VisitLogWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { VisitLogUpdateInput } from "./VisitLogUpdateInput";

@ArgsType()
class UpdateVisitLogArgs {
  @ApiProperty({
    required: true,
    type: () => VisitLogWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => VisitLogWhereUniqueInput)
  @Field(() => VisitLogWhereUniqueInput, { nullable: false })
  where!: VisitLogWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => VisitLogUpdateInput,
  })
  @ValidateNested()
  @Type(() => VisitLogUpdateInput)
  @Field(() => VisitLogUpdateInput, { nullable: false })
  data!: VisitLogUpdateInput;
}

export { UpdateVisitLogArgs as UpdateVisitLogArgs };
