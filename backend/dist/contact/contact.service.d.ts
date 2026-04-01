import { ConfigService } from '@nestjs/config';
import { CreateContactDto } from './dto/create-contact.dto';
export interface ContactMessage {
    id: string;
    name: string;
    email: string;
    subject: string;
    message: string;
    createdAt: Date;
    read: boolean;
}
export declare class ContactService {
    private configService;
    private readonly logger;
    private messages;
    private transporter;
    constructor(configService: ConfigService);
    createMessage(dto: CreateContactDto): Promise<{
        success: boolean;
        message: string;
        id: string;
    }>;
    private sendEmail;
    getMessages(): Promise<ContactMessage[]>;
    markAsRead(id: string): Promise<{
        success: boolean;
    }>;
}
