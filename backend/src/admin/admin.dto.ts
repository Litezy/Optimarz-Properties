import { PartialType } from '@nestjs/mapped-types'
import { IsEmail, IsString, IsNotEmpty } from 'class-validator'
export class CreateAdminDto {
    @IsEmail()
    email: string

    @IsString()
    @IsNotEmpty()
    fullname: string

    @IsString()
    password: string
}


export class LoginDto {
    @IsEmail()
    email: string

    @IsString()
    password: string
}

export class UpdateAdminDto extends PartialType(CreateAdminDto) { }
