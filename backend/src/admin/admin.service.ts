import { Injectable } from '@nestjs/common';
import { Prisma, PrismaClient } from '@prisma/client';
import { CreateAdminDto, UpdateAdminDto } from './admin.dto';

@Injectable()
export class AdminService {
   async createAdmin(createAdminDto:CreateAdminDto){
        // const newAdmin = await 
    }
   async updateAdmin(updateAdminDto:UpdateAdminDto){
        // const newAdmin = await 
    }
}
