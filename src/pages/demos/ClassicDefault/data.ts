import {
    BsBinoculars,
    BsBoxes,
    BsBriefcase,
    BsBullseye,
    BsCircleSquare,
    BsCodeSlash,
    BsStack,
    BsVectorPen
} from "react-icons/bs";

import client1Img from '@/assets/images/client/01.svg'
import client2Img from '@/assets/images/client/02.svg'
import client3Img from '@/assets/images/client/03.svg'
import client4Img from '@/assets/images/client/04.svg'
import client5Img from '@/assets/images/client/05.svg'
import avatar1 from '@/assets/images/avatar/01.jpg'
import avatar2 from '@/assets/images/avatar/02.jpg'
import avatar3 from '@/assets/images/avatar/03.jpg'
import avatar5 from '@/assets/images/avatar/05.jpg'

import {ClientType, ServiceType, TestimonialType} from "@/pages/demos/ClassicDefault/types";
import {User} from "@/types/user";

export const clientData: ClientType[] = [
    {
        image: client1Img
    },
    {
        image: client2Img
    },
    {
        image: client3Img
    },
    {
        image: client4Img
    },
    {
        image: client5Img
    },
    {
        image: client1Img
    },
    {
        image: client2Img
    },
    {
        image: client3Img
    },
    {
        image: client4Img
    },
    {
        image: client5Img
    },
]

export const services: ServiceType[] = [
    {
        title: "Digital Marketing",
        description: "Growing brands online through digital channels.",
        icon: BsStack,
    },
    {
        title: "Product Design",
        description: "Creating products that users love and businesses need.",
        icon: BsBoxes,
    },
    {
        title: "Web Design",
        description: "Designing websites that are visually appealing & user-friendly.",
        icon: BsCircleSquare,
    },
    {
        title: "UI/UX Design",
        description: "Creating user interfaces that are both efficient and enjoyable.",
        icon: BsVectorPen,
    },
    {
        title: "Business Strategy",
        description: "Developing and executing plans to achieve business goals.",
        icon: BsBriefcase,
    },
    {
        title: "Research",
        description: "Gathering and analyzing data to inform decision-making.",
        icon: BsBinoculars,
    },
    {
        title: "Web Development",
        description: "Building and maintaining websites and web applications.",
        icon: BsCodeSlash,
    },
    {
        title: "Brand Design",
        description: "Creating brands that are unique, memorable, and meaningful.",
        icon: BsBullseye,
    }
]


export const userData: User[] = [
    {
        id: '1',
        avatar: avatar3,
        firstName: 'Nix',
        lastName: 'Maxwell',
    },
    {
        id: '2',
        avatar: avatar1,
        firstName: 'Dennis',
        lastName: 'Barrett',
    },
    {
        id: '3',
        avatar: avatar2,
        firstName: 'Nix',
        lastName: 'Maxwell',
    },
    {
        id: '4',
        avatar: avatar5,
        firstName: 'Carolyn',
        lastName: 'Ortiz',
    },
]

export const testimonials: TestimonialType[] = [
    {
        user: userData[0],
        comment: "The best Bootstrap theme we've ever used - it's easy to customize and comes with all the features we need.",
        rating: 4.5,
    },
    {
        user: userData[1],
        comment: "The best Bootstrap theme we've ever used - it's easy to customize and comes with all the features we need.",
        rating: 4,
    },

    {
        user: userData[2],
        comment: "Webestica helped us create a stunning website that reflects our brand perfectly.",
        rating: 5,
    },
    {
        user: userData[3],
        comment: "I highly recommend Mizzle to anyone looking for a high-quality Bootstrap theme.",
        rating: 4.5,
    }
]