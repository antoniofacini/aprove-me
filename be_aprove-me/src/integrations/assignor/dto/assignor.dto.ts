import {
  IsOptional,
  IsNotEmpty,
  IsString,
  IsEmail,
  IsPhoneNumber,
  Length,
} from 'class-validator';

export class CreateAssignorDto {
  @IsNotEmpty()
  @IsString()
  @Length(0, 30)
  document: string;

  @IsNotEmpty()
  @IsEmail()
  @Length(0, 140)
  email: string;

  @IsNotEmpty()
  @IsPhoneNumber(null)
  @Length(0, 20)
  phone: string;

  @IsNotEmpty()
  @IsString()
  @Length(0, 140)
  name: string;
}

export class UpdateAssignorDto {
  @IsOptional()
  @IsString()
  @Length(0, 30)
  document?: string;

  @IsOptional()
  @IsEmail()
  @Length(0, 140)
  email?: string;

  @IsOptional()
  @IsPhoneNumber(null)
  @Length(0, 20)
  phone?: string;

  @IsOptional()
  @IsString()
  @Length(0, 140)
  name?: string;
}
