import { Body, Controller, Patch, Post, ValidationPipe } from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateAdminDto, UpdateAdminDto } from './admin.dto';

@Controller('admin')
export class AdminController {
    constructor(private readonly adminService: AdminService) { }

    @Post('create-admin')
    createAdmin(@Body(ValidationPipe) createAdminDto: CreateAdminDto) {
        return this.adminService.createAdmin(createAdminDto)
    }

    @Patch('update-admin')
    updateAmin(@Body(ValidationPipe) updateAdminDto: UpdateAdminDto) {
        return this.adminService.updateAdmin(updateAdminDto)
    }
}

