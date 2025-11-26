import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common";
import bcrypt from 'bcrypt'
import { CreateAdminDto, LoginDto, UpdateAdminDto } from "./admin.dto.js";
import { AuthService } from "src/auth/auth.service";
import prisma from '../lib/prisma';

export interface TokenResponse {
    access_token: string;
    refresh_token: string;
    admin: {
        id: number;
        email: string;
        fullname: string;
        role: string;
    };
}


@Injectable()
export class AdminService {
    constructor(private authService: AuthService) { }

    private async hashPassword(password: string): Promise<string> {
        const salt = await bcrypt.genSalt(10);
        return bcrypt.hash(password, salt);
    }

    private async comparePassword(password: string, hash: string): Promise<boolean> {
        return bcrypt.compare(password, hash);
    }

    async createAdmin(createAdminDto: CreateAdminDto) {
        // Hash password before creating admin
        const hashedPassword = await this.hashPassword(createAdminDto.password);

        const newAdmin = await prisma.admin.create({
            data: {
                ...createAdminDto,
                role: 'admin',
                password: hashedPassword,
            },
            select: {
                id: true,
                email: true,
                fullname: true,
                role: true,
            },
        });
        return {
            admin: newAdmin,
        };
    }

    async loginAdmin(loginDto: LoginDto): Promise<TokenResponse> {
        const { email, password } = loginDto;

        if (!email || !password) {
            throw new BadRequestException('Email and password required');
        }

        // Find admin with password
        const admin = await prisma.admin.findUnique({
            where: { email },
        });

        if (!admin) {
            throw new NotFoundException('Email not found');
        }

        // Verify password
        const isPasswordValid = await this.comparePassword(password, admin.password);

        if (!isPasswordValid) {
            throw new UnauthorizedException('Invalid credentials');
        }

        // Generate tokens
        const tokens = this.authService.generateTokens(admin.id, admin.email);

        return {
            ...tokens,
            admin: {
                id: admin.id,
                email: admin.email,
                fullname: admin.fullname,
                role: admin.role,
            },
        };
    }

    // async refreshToken(refreshToken: string): Promise<{ access_token: string }> {
    //     try {
    //         const payload = this.jwtService.verify(refreshToken, {
    //             secret: process.env.JWT_REFRESH_SECRET,
    //         });

    //         const admin = await prisma.admin.findUnique({
    //             where: { id: payload.id },
    //         });

    //         if (!admin) {
    //             throw new UnauthorizedException('Invalid refresh token');
    //         }

    //         const access_token = this.jwtService.sign(
    //             { id: admin.id, email: admin.email, role: 'admin' },
    //             {
    //                 secret: process.env.JWT_SECRET,
    //                 expiresIn: '15m',
    //             },
    //         );

    //         return { access_token };
    //     } catch (error) {
    //         throw new UnauthorizedException('Invalid refresh token');
    //     }
    // }

    async updateAdmin(updateAdminDto: UpdateAdminDto) {
        const { email, password, ...data } = updateAdminDto;

        if (!email) {
            throw new BadRequestException('Email is required to update admin');
        }

        // If password is being updated, hash it
        const updateData = password
            ? { ...data, password: await this.hashPassword(password) }
            : data;

        const updatedAdmin = await prisma.admin.update({
            where: { email },
            data: updateData,
            select: {
                id: true,
                email: true,
                fullname: true,
                role: true,
                createdAt: true,
                updatedAt: true,
            },
        });

        return updatedAdmin;
    }

    async findByEmail(email: string) {
        const admin = await prisma.admin.findUnique({
            where: { email },
            select: {
                id: true,
                email: true,
                fullname: true,
                role: true,
                createdAt: true,
                updatedAt: true,
            },
        });

        if (!admin) {
            throw new NotFoundException(`Admin with email ${email} not found`);
        }

        return admin;
    }

    async findAll() {
        return await prisma.admin.findMany({
            select: {
                id: true,
                email: true,
                fullname: true,
                role: true,
                createdAt: true,
                updatedAt: true,
            },
        });
    }

    async deleteAdmin(email: string) {
        if (!email) {
            throw new BadRequestException('Email is required to delete admin');
        }

        await prisma.blog.deleteMany({
            where: { author: { email } }
        });
        const deletedAdmin = await prisma.admin.delete({
            where: { email },
            select: {
                id: true,
                email: true,
                fullname: true,
                role: true,
            },
        });

        return deletedAdmin;
    }
}
