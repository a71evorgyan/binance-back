import { IsString, IsNotEmpty } from "class-validator";
import { Type } from "class-transformer";

export class DeleteDestroyRequest {
  @Type(() => String)
  @IsString()
  @IsNotEmpty()
  token!: string;
}
