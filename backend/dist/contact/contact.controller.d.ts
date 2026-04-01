import { ContactService } from './contact.service';
import { CreateContactDto } from './dto/create-contact.dto';
export declare class ContactController {
    private readonly contactService;
    constructor(contactService: ContactService);
    createMessage(dto: CreateContactDto): Promise<{
        success: boolean;
        message: string;
        id: string;
    }>;
    getMessages(): Promise<import("./contact.service").ContactMessage[]>;
    markAsRead(id: string): Promise<{
        success: boolean;
    }>;
}
