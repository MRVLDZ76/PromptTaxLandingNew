import {CaseStudyType, StepType, TestimonialType, MemberType} from "@/pages/demos/agency/SEO/types";

import listImg1 from '@/assets/images/portfolio/list/01.jpg';
import listImg2 from '@/assets/images/portfolio/list/02.jpg';
import listImg3 from '@/assets/images/portfolio/list/03.jpg';

import client2 from '@/assets/images/client/client-white/02.svg';
import client3 from '@/assets/images/client/client-white/03.svg';
import client4 from '@/assets/images/client/client-white/04.svg';

import avatar4 from '@/assets/images/avatar/04.jpg';
import avatar5 from '@/assets/images/avatar/05.jpg';
import avatar6 from '@/assets/images/avatar/06.jpg';
import avatar9 from '@/assets/images/avatar/09.jpg';
import avatar10 from '@/assets/images/avatar/10.jpg';
import avatar11 from '@/assets/images/avatar/11.jpg';

import {FaFacebookF, FaInstagram, FaTwitter} from "react-icons/fa6";


export const testimonials: TestimonialType[] = [
    {
        user: {
            firstName: "Sarah",
            lastName: "Chen",
            role: "Crypto Trader"
        },
        comment: "PromptTax handled my 5,000+ crypto transactions flawlessly. The wash sale detection saved me from an IRS nightmare. What used to take me weeks now takes 10 minutes.",
    },
    {
        user: {
            firstName: "Michael",
            lastName: "Rodriguez",
            role: "Real Estate Investor"
        },
        comment: "I receive 12 K-1 forms every year. PromptTax's AI extracted everything automatically - no more manual entry. The CPA review gave me peace of mind for half the cost."
    },
    {
        user: {
            firstName: "Jennifer",
            lastName: "Park",
            role: "Freelance Designer"
        },
        comment: "Finally, tax software that actually works for me instead of the other way around. I just uploaded my 1099s and receipts, chatted about my home office, and got my return filed in 2 days."
    }
]

export const caseStudies: CaseStudyType[] = [
    {
        company: {
            image: client2,
        },
        title: "Website Optimization for TechWave",
        description: "The most powerful software & app landing software marketing business.",
        tags: ["Branding", "Packaging", "Development"],
        image: listImg2,
        url: '/portfolio/case-study/v2',
    },
    {
        company: {
            image: client3,
        },
        title: "Transforming Ideas into Reality",
        description: "The most powerful software & app landing software marketing business.",
        tags: ["UI/UX design", "Research"],
        image: listImg1,
        url: '/portfolio/case-study/v2',
    },
    {
        company: {
            image: client4,
        },
        title: "Bio Cosmetics",
        description: "The most powerful software & app landing software marketing business.",
        tags: ["Branding", "UI/UX design"],
        image: listImg3,
        url: '/portfolio/case-study/v2',
    }
]

export const approachSteps: StepType[] = [
    {
        stepNumber: 1,
        title: "Business understanding",
        description: "We begin by gaining a deep understanding of your business, industry, and target audience."
    },
    {
        stepNumber: 2,
        title: "Keyword research",
        description: "Our approach starts with comprehensive keyword research potential customers are searching for."
    },
    {
        stepNumber: 3,
        title: "Technical optimization",
        description: "We conduct a thorough technical audit of your website to identify any issues that may be hindering its."
    },
    {
        stepNumber: 4,
        title: "Content strategy",
        description: "Content is king in the world of SEO. We develop a strategic content plan that aligns with your."
    },
    {
        stepNumber: 5,
        title: "Transparent Reporting",
        description: "We provide regular reports and updates on the progress of your SEO campaigns giving you full."
    }
]

export const teamMembers: MemberType[] = [
    {
        firstName: "Samuel",
        lastName: "Bishop",
        socialLinks: [
            {
                icon: FaFacebookF,
                url: '',
                externalLink: ''
            },
            {
                icon: FaInstagram,
                url: '',
                externalLink: ''
            },
            {
                icon: FaTwitter,
                url: '',
                externalLink: ''
            },
        ],
        role: "UI/UX Designer",
        avatar: avatar4,
    },
    {
        firstName: "Judy",
        lastName: "Nguyen",
        socialLinks: [
            {
                icon: FaFacebookF,
                url: '',
                externalLink: ''
            },
            {
                icon: FaInstagram,
                url: '',
                externalLink: ''
            },
            {
                icon: FaTwitter,
                url: '',
                externalLink: ''
            },
        ],
        role: "Web Designer",
        avatar: avatar11,
    },
    {
        firstName: "Louis",
        lastName: "Ferguson",
        socialLinks: [
            {
                icon: FaFacebookF,
                url: '',
                externalLink: ''
            },
            {
                icon: FaInstagram,
                url: '',
                externalLink: ''
            },
            {
                icon: FaTwitter,
                url: '',
                externalLink: ''
            },
        ],
        role: "Web Developer",
        avatar: avatar6,
    },
    {
        firstName: "Dennis",
        lastName: "Barrett",
        socialLinks: [
            {
                icon: FaFacebookF,
                url: '',
                externalLink: ''
            },
            {
                icon: FaInstagram,
                url: '',
                externalLink: ''
            },
            {
                icon: FaTwitter,
                url: '',
                externalLink: ''
            },
        ],
        role: "CEO & Founder",
        avatar: avatar9,
    },
    {
        firstName: "Dennis",
        lastName: "Barrett",
        socialLinks: [
            {
                icon: FaFacebookF,
                url: '',
                externalLink: ''
            },
            {
                icon: FaInstagram,
                url: '',
                externalLink: ''
            },
            {
                icon: FaTwitter,
                url: '',
                externalLink: ''
            },
        ],
        role: "CEO & Founder",
        avatar: avatar5,
    },
    {
        firstName: "Bryan",
        lastName: "Knight",
        socialLinks: [
            {
                icon: FaFacebookF,
                url: '',
                externalLink: ''
            },
            {
                icon: FaInstagram,
                url: '',
                externalLink: ''
            },
            {
                icon: FaTwitter,
                url: '',
                externalLink: ''
            },
        ],
        role: "Product Designer",
        avatar: avatar10
    }
]
