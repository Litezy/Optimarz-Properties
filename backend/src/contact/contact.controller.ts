import { Body, Controller, Get, Post, SetMetadata, UseGuards, ValidationPipe } from '@nestjs/common';
import { ContactService } from './contact.service';
import { ContactDto } from './contact.tdto';
import { AuthGuard } from '@nestjs/passport';
import { RoleGuard } from 'src/guards/role.guard';
import { SuccessMessage } from 'src/decorators/success.decorator';

@Controller('contact')
export class ContactController {
    constructor(private readonly contactService: ContactService) { }

    @SuccessMessage('Message sent successfully')
    @Post('send-message')
    sendMessage(@Body(ValidationPipe) contactDto: ContactDto) {
        return this.contactService.sendMessage(contactDto)
    }


    @SuccessMessage('Fetch success')
    @Get('all')
    @UseGuards(AuthGuard('jwt'), RoleGuard)
    @SetMetadata('roles', ['admin'])
    getAllMessages() {
        return this.contactService.findAll()
    }
}
