import {
  IsNotEmpty,
  IsOptional,
  IsUUID,
  IsNumber,
  IsDateString,
  IsInt,
  IsString,
} from 'class-validator';

export class CreatePayableDto {
  @IsNotEmpty()
  @IsNumber()
  value: number;

  @IsNotEmpty()
  @IsDateString()
  emissionDate: Date;

  @IsNotEmpty()
  @IsString()
  assignorId: string;
}

export class UpdatePayableDto {
  @IsOptional()
  @IsUUID()
  id?: string;

  @IsOptional()
  @IsNumber()
  value?: number;

  @IsOptional()
  @IsDateString()
  emissionDate?: Date;

  @IsOptional()
  @IsInt()
  assignor?: string;
}
