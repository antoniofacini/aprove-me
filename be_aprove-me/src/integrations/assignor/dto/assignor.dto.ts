import {
  IsOptional,
  IsNotEmpty,
  IsString,
  IsEmail,
  IsPhoneNumber,
} from 'class-validator';

export class CreateAssignorDto {
  @IsNotEmpty()
  @IsString()
  document: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsPhoneNumber(null)
  phone: string;

  @IsNotEmpty()
  @IsString()
  name: string;
}

export class UpdateAssignorDto {
  @IsOptional()
  @IsString()
  document?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsPhoneNumber(null)
  phone?: string;

  @IsOptional()
  @IsString()
  name?: string;
}
