import { IsString, IsNotEmpty } from "class-validator";
import { Type } from "class-transformer";

export class GetAlertPullRequest {
  @Type(() => String)
  @IsString()
  @IsNotEmpty()
  token!: string;
}
