import { IsString, IsNotEmpty, IsNumber, IsOptional } from "class-validator";
import { Type } from "class-transformer";

export class CreateAlertRequest {
  @Type(() => String)
  @IsString()
  @IsNotEmpty()
  token!: string;

  @Type(() => String)
  @IsString()
  @IsNotEmpty()
  pair!: string;    // object maybe

  @IsOptional()
  @IsNotEmpty()
  @IsNumber()
  min!: number;

  @IsOptional()
  @IsNotEmpty()
  @IsNumber()
  max!: number;
}
