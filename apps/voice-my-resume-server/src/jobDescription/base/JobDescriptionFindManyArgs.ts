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
import { JobDescriptionWhereInput } from "./JobDescriptionWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { JobDescriptionOrderByInput } from "./JobDescriptionOrderByInput";

@ArgsType()
class JobDescriptionFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => JobDescriptionWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => JobDescriptionWhereInput, { nullable: true })
  @Type(() => JobDescriptionWhereInput)
  where?: JobDescriptionWhereInput;

  @ApiProperty({
    required: false,
    type: [JobDescriptionOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [JobDescriptionOrderByInput], { nullable: true })
  @Type(() => JobDescriptionOrderByInput)
  orderBy?: Array<JobDescriptionOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { JobDescriptionFindManyArgs as JobDescriptionFindManyArgs };