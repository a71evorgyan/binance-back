import { IsString, IsNotEmpty } from "class-validator";
import { Type } from "class-transformer";

export class GetAllTradingPairsRequest {
  @Type(() => String)
  @IsString()
  @IsNotEmpty()
  token!: string;
}
