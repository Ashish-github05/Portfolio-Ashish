import { PortfolioService } from './portfolio.service';
export declare class PortfolioController {
    private readonly portfolioService;
    constructor(portfolioService: PortfolioService);
    getAllData(): {
        personal: {
            name: string;
            title: string;
            subtitle: string;
            tagline: string;
            bio: string;
            location: string;
            email: string;
            phone: string;
            github: string;
            linkedin: string;
            twitter: string;
            stats: {
                label: string;
                value: string;
            }[];
        };
        skills: {
            category: string;
            icon: string;
            color: string;
            items: {
                name: string;
                level: number;
            }[];
        }[];
        experience: {
            id: number;
            company: string;
            role: string;
            duration: string;
            location: string;
            type: string;
            logo: string;
            gradient: string;
            responsibilities: string[];
            achievements: string[];
            tech: string[];
        }[];
        projects: {
            id: number;
            title: string;
            description: string;
            tech: string[];
            demo: string;
            category: string;
            tags: string[];
            gradient: string;
            featured: boolean;
        }[];
        achievements: {
            id: number;
            title: string;
            organization: string;
            year: string;
            type: string;
            color: string;
            description: string;
        }[];
        testimonials: {
            id: number;
            name: string;
            role: string;
            company: string;
            initials: string;
            avatarGradient: string;
            text: string;
            rating: number;
        }[];
    };
    getPersonalInfo(): {
        name: string;
        title: string;
        subtitle: string;
        tagline: string;
        bio: string;
        location: string;
        email: string;
        phone: string;
        github: string;
        linkedin: string;
        twitter: string;
        stats: {
            label: string;
            value: string;
        }[];
    };
    getSkills(): {
        category: string;
        icon: string;
        color: string;
        items: {
            name: string;
            level: number;
        }[];
    }[];
    getExperience(): {
        id: number;
        company: string;
        role: string;
        duration: string;
        location: string;
        type: string;
        logo: string;
        gradient: string;
        responsibilities: string[];
        achievements: string[];
        tech: string[];
    }[];
    getProjects(): {
        id: number;
        title: string;
        description: string;
        tech: string[];
        demo: string;
        category: string;
        tags: string[];
        gradient: string;
        featured: boolean;
    }[];
    getAchievements(): {
        id: number;
        title: string;
        organization: string;
        year: string;
        type: string;
        color: string;
        description: string;
    }[];
    getTestimonials(): {
        id: number;
        name: string;
        role: string;
        company: string;
        initials: string;
        avatarGradient: string;
        text: string;
        rating: number;
    }[];
}
