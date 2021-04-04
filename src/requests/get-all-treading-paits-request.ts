import { IsString, IsNotEmpty } from "class-validator";
import { Type } from "class-transformer";

export class GetAllTreadingPaitsRequest {
  @Type(() => String)
  @IsString()
  @IsNotEmpty()
  token!: string;
}
