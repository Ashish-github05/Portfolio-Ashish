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
    private readonly logger;
    private messages;
    createMessage(dto: CreateContactDto): Promise<{
        success: boolean;
        message: string;
        id: string;
    }>;
    getMessages(): Promise<ContactMessage[]>;
    markAsRead(id: string): Promise<{
        success: boolean;
    }>;
}
