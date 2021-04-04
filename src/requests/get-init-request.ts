import { IsString, IsNotEmpty } from "class-validator";
import { Type } from "class-transformer";

export class GetInitRequest {
  @Type(() => String)
  @IsString()
  @IsNotEmpty()
  key!: string;

  @Type(() => String)
  @IsString()
  secret!: string;
}
