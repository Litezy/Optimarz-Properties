import { ConflictException, Injectable } from '@nestjs/common';
import { DownloadDto } from './download.tdo';
import prisma from 'src/lib/prisma';

@Injectable()
export class DownloadsService {
    async downloadEbook(downloadDto: DownloadDto) {
        const { email } = downloadDto
        const duplicateEmail = await prisma.downloads.findUnique({
            where: { email }
        })
        if (duplicateEmail) {
            throw new ConflictException('Email already used');
        }
        const newUser = await prisma.downloads.create({
            data: { ...downloadDto }
        })
        return newUser
    }

    async fetchAllDownloads() {
        const allDownloads = await prisma.downloads.findMany({
            select: {
                email: true,
                firstName: true,
                lastName: true,
                createdAt: true,
                id: true
            }
        })
        return allDownloads
    }
}
