import {barChartIcon, dollarIcon, donutChartIcon, homeIcon, stackIcon} from "@/assets/data/icons";
import {ClientType, ServiceType, WorkFlowStepType} from "@/pages/demos/FinanceConsulting/types";
import {BsBug, BsCupStraw, BsGem, BsPatchCheck, BsRocketTakeoff} from "react-icons/bs";

import client1 from '@/assets/images/client/01.svg'
import client2 from '@/assets/images/client/02.svg'
import client3 from '@/assets/images/client/03.svg'
import client4 from '@/assets/images/client/04.svg'
import client5 from '@/assets/images/client/05.svg'

export const services: ServiceType[] = [
    {
        title: "Financial planning",
        features: [
            {icon: BsPatchCheck, title: "Personalized Financial Assessment"},
            {icon: BsPatchCheck, title: "Customized Goal Setting"},
            {icon: BsPatchCheck, title: "Tailored Financial Roadmap"},
        ],
        icon: donutChartIcon,
    },
    {
        title: "Retirement planning",
        features: [
            {icon: BsPatchCheck, title: "Income and Expense Analysis"},
            {icon: BsPatchCheck, title: "Tailored Investment Strategy"},
            {icon: BsPatchCheck, title: "Retirement Goal Setting"},
        ],
        icon: barChartIcon,
    },
    {
        title: "Tax planning and optimization",
        features: [
            {icon: BsPatchCheck, title: "Strategic Tax Planning Strategies"},
            {icon: BsPatchCheck, title: "Tax-Efficient Investment Guidance"},
        ],
        icon: stackIcon,
    },
    {
        title: "Estate planning",
        features: [
            {icon: BsPatchCheck, title: "Wills and Trusts"},
            {icon: BsPatchCheck, title: "Asset Protection Strategies"},
            {icon: BsPatchCheck, title: "Succession Planning"},
        ],
        icon: homeIcon,
    },
    {
        title: "Management and insurance",
        features: [
            {icon: BsPatchCheck, title: "Risk Assessment and Analysis"},
            {icon: BsPatchCheck, title: "Customized Insurance"},
            {icon: BsPatchCheck, title: "Claims Management Support"},
        ],
        icon: dollarIcon,
    },
]

export const workflowSteps: WorkFlowStepType[] = [
    {
        title: "Personalized approach",
        description: "Receive tailored financial solutions your needs and goals.",
        icon: BsRocketTakeoff,
    },
    {
        title: "Expert guidance",
        description: "Benefit from the expertise of seasoned a deep understanding.",
        icon: BsGem,
    },
    {
        title: "Client-centric focus",
        description: "Enjoy exceptional service focused long-term relationships.",
        icon: BsCupStraw,
    },
    {
        title: "Comprehensive solutions",
        description: "Access a wide range of services under one investment",
        icon: BsBug,
    }
]


export const investors: ClientType[] = [{image: client1}, {image: client2}, {image: client3}, {image: client4}, {image: client5}, {image: client1}]