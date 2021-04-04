import { IsString, IsNotEmpty } from "class-validator";
import { Type } from "class-transformer";

export class GetUserBalanceRequest {
  @Type(() => String)
  @IsString()
  @IsNotEmpty()
  token!: string;
}