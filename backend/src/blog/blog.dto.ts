import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { IsFile } from 'nestjs-form-data';

export class CreateBlogDto {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsNotEmpty()
    content: string;

    @IsString()
    @IsNotEmpty()
    category: string;

    @IsOptional()
    @IsString()
    readingTime?: string;

    @IsString()
    @IsNotEmpty()
    description: string;
    
}

export class UpdateBlogDto extends PartialType(CreateBlogDto) {}