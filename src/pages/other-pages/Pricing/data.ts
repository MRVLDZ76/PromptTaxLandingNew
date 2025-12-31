import {
    BsCheckLg,
    BsClock,
    BsGraphUpArrow, BsHeadset,
    BsLightningChargeFill,
    BsRocketTakeoffFill,
    BsSendFill
} from "react-icons/bs";

import client5 from "@/assets/images/client/05.svg";
import client1 from "@/assets/images/client/01.svg";
import client7 from "@/assets/images/client/07.svg";
import client2 from "@/assets/images/client/02.svg";
import client3 from "@/assets/images/client/03.svg";
import client4 from "@/assets/images/client/04.svg";
import client6 from "@/assets/images/client/06.svg";

import {FeatureType, PricingType, ClientType, FaqType} from "@/pages/other-pages/Pricing/types";

export const pricingData: PricingType[] = [
    {
        duration: "month",
        plans: [
            {
                icon: BsLightningChargeFill,
                title: 'Standard Review',
                price: 179,
                features: [
                    {icon: BsCheckLg, title: 'Complete 1040 return review'},
                    {icon: BsCheckLg, title: 'Crypto transactions included'},
                    {icon: BsCheckLg, title: 'K-1 forms review (up to 2)'},
                    {icon: BsCheckLg, title: 'Schedule C, D, E review'},
                    {icon: BsCheckLg, title: 'CPA written feedback & recommendations'},
                    {icon: BsCheckLg, title: 'No e-filing service'},
                    {icon: BsCheckLg, title: '48-hour turnaround'},
                ]
            },
            {
                icon: BsRocketTakeoffFill,
                title: 'Premium Review + E-File',
                isPopular: true,
                price: 329,
                features: [
                    {icon: BsCheckLg, title: 'Everything in Standard Review'},
                    {icon: BsCheckLg, title: 'Professional e-filing service'},
                    {icon: BsCheckLg, title: 'K-1 forms review (up to 5)'},
                    {icon: BsCheckLg, title: 'State return review & e-file'},
                    {icon: BsCheckLg, title: '30-minute CPA consultation call'},
                    {icon: BsCheckLg, title: 'Amended return support (if needed)'},
                    {icon: BsCheckLg, title: '24-hour turnaround'},
                ]
            },
            {
                icon: BsSendFill,
                title: 'Complex Return + White Glove',
                price: 549,
                features: [
                    {icon: BsCheckLg, title: 'Everything in Premium Review'},
                    {icon: BsCheckLg, title: 'Unlimited K-1, rental properties'},
                    {icon: BsCheckLg, title: 'Multi-state tax optimization'},
                    {icon: BsCheckLg, title: 'Foreign income & FBAR review'},
                    {icon: BsCheckLg, title: '60-minute CPA strategy session'},
                    {icon: BsCheckLg, title: 'Priority support & direct CPA access'},
                    {icon: BsCheckLg, title: '12-hour express turnaround'},
                    {icon: BsCheckLg, title: 'Audit protection guidance'},
                ]
            }
        ]
    },
    {
        duration: "year",
        plans: [
            {
                icon: BsLightningChargeFill,
                title: 'Standard Review',
                price: 179,
                features: [
                    {icon: BsCheckLg, title: 'Complete 1040 return review'},
                    {icon: BsCheckLg, title: 'Crypto transactions included'},
                    {icon: BsCheckLg, title: 'K-1 forms review (up to 2)'},
                    {icon: BsCheckLg, title: 'Schedule C, D, E review'},
                    {icon: BsCheckLg, title: 'CPA written feedback & recommendations'},
                    {icon: BsCheckLg, title: 'No e-filing service'},
                    {icon: BsCheckLg, title: '48-hour turnaround'},
                ]
            },
            {
                icon: BsRocketTakeoffFill,
                title: 'Premium Review + E-File',
                isPopular: true,
                price: 329,
                features: [
                    {icon: BsCheckLg, title: 'Everything in Standard Review'},
                    {icon: BsCheckLg, title: 'Professional e-filing service'},
                    {icon: BsCheckLg, title: 'K-1 forms review (up to 5)'},
                    {icon: BsCheckLg, title: 'State return review & e-file'},
                    {icon: BsCheckLg, title: '30-minute CPA consultation call'},
                    {icon: BsCheckLg, title: 'Amended return support (if needed)'},
                    {icon: BsCheckLg, title: '24-hour turnaround'},
                ]
            },
            {
                icon: BsSendFill,
                title: 'Complex Return + White Glove',
                price: 549,
                features: [
                    {icon: BsCheckLg, title: 'Everything in Premium Review'},
                    {icon: BsCheckLg, title: 'Unlimited K-1, rental properties'},
                    {icon: BsCheckLg, title: 'Multi-state tax optimization'},
                    {icon: BsCheckLg, title: 'Foreign income & FBAR review'},
                    {icon: BsCheckLg, title: '60-minute CPA strategy session'},
                    {icon: BsCheckLg, title: 'Priority support & direct CPA access'},
                    {icon: BsCheckLg, title: '12-hour express turnaround'},
                    {icon: BsCheckLg, title: 'Audit protection guidance'},
                ]
            }
        ]
    }
]

export const features: FeatureType[] = [
    {
        icon: BsClock,
        title: 'Fast turnaround times',
        description: 'From 48 hours to 12-hour express service depending on your plan.'
    },
    {
        icon: BsGraphUpArrow,
        title: 'Licensed CPA review',
        description: 'All returns reviewed by experienced CPAs with tax law expertise.'
    },
    {
        icon: BsHeadset,
        title: 'Dedicated tax support',
        description: 'Direct access to tax professionals throughout the filing process.'
    },
]

export const clients: ClientType[] = [{image: client5}, {image: client1}, {image: client2}, {image: client3}, {image: client4}, {image: client6}, {image: client7}]


export const faqData: FaqType[] = [
    {
        question: "What's included in the Standard Review plan?",
        answer: "The Standard Review plan includes a complete review of your Form 1040 return by a licensed CPA, covering up to 2 K-1 forms, crypto transactions, and all standard schedules (C, D, E). You'll receive written feedback and recommendations within 48 hours. This plan does not include e-filing service - you'll download your reviewed return and file it yourself."
    },
    {
        question: 'How does the e-filing service work?',
        answer: "With our Premium Review + E-File and Complex Return plans, our licensed CPAs will electronically file your federal and state returns directly to the IRS on your behalf. After reviewing your return, we'll securely transmit it using IRS-approved e-file software. You'll receive confirmation when your return is accepted, typically within 24-48 hours of filing."
    },
    {
        question: 'Can I upgrade my plan after starting?',
        answer: 'Yes! You can upgrade your plan at any time before your return is submitted. If you start with Standard Review and realize you need e-filing or more K-1 forms reviewed, simply contact our support team. We\'ll calculate the difference and upgrade you to Premium or Complex Return. The price difference is prorated based on the work already completed.'
    },
    {
        question: 'How many K-1 forms can I include?',
        answer: 'Standard Review includes up to 2 K-1 forms, Premium Review + E-File includes up to 5 K-1 forms, and Complex Return + White Glove includes unlimited K-1 forms. Each K-1 is thoroughly reviewed for accuracy, passive activity limitations, at-risk rules, and proper Schedule E integration. If you have more K-1s than your plan includes, you can upgrade or pay a per-form fee.'
    },
    {
        question: 'What if I need help after filing?',
        answer: 'All plans include post-filing support for questions about your return. Premium and Complex plans include amended return support if corrections are needed. Complex Return customers get priority access to their assigned CPA for any IRS notices or audit support. We stand behind our work - if there\'s an error on our part, we\'ll amend your return at no charge.'
    }
]
