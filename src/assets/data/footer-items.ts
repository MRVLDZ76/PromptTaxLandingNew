import type { IconType } from 'react-icons'
import { BsBoxArrowUpRight, BsEnvelope, BsFileEarmarkTextFill, BsGeoAlt, BsPuzzleFill, BsStickiesFill, BsTelephone } from 'react-icons/bs'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa6'

import flagUS from '@/assets/images/flags/us.svg'
import flagSP from '@/assets/images/flags/sp.svg'
import flagUK from '@/assets/images/flags/uk.svg'

type FooterLinkType = {
  name: string
  link?: string
  badge?: string
  icon?: IconType
}

type SocialMediaLink = {
  icon: IconType
  iconClassName: string
  link?: string
}

type LanguageType = {
  flag: string
  name: string
}

type ContactType = {
  title: string
  icon: IconType
  description: string
}

export const quickLinks: FooterLinkType[] = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Crypto Tax",
    link: "/crypto-tax",
  },
  {
    name: "K-1 Forms",
    link: "/k1-forms",
  },
  {
    name: "Contact us",
    link: "/contact/v2",
  },
  {
    name: "Pricing",
    link: "/#pricing",
  },
  {
    name: "Sign in",
    link: "/auth/sign-in",
  },
  {
    name: "Sign up",
    link: "/auth/sign-up",
  }
]

export const quickLinks2: FooterLinkType[] = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Crypto Tax",
    link: "/crypto-tax",
  },
  {
    name: "K-1 Forms",
    link: "/k1-forms",
  },
  {
    name: "Contact us",
    link: "/contact/v2",
  },
  {
    name: "Pricing",
    link: "/#pricing",
  },
  {
    name: "How it works",
    link: "/#how-it-works",
  },
]

export const quickLinks3: FooterLinkType[] = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Crypto Tax",
    link: "/crypto-tax",
  },
  {
    name: "K-1 Forms",
    link: "/k1-forms",
  },
  {
    name: "Contact us",
    link: "/contact/v2",
  },
  {
    name: "Career",
    link: "/career",
  },
  {
    name: "Career detail",
    link: "/career/single",
  },
  {
    name: "Become a partner",
    link: "/contact/v2",
  },
  {
    name: "Sign up",
    link: "/auth/sign-up",
  },
  {
    name: "Cookie",
  }
]

export const quickLinks4: FooterLinkType[] = [
  {
    name: 'Become a partner',
    link: '/contact/v2',
  },
  {
    name: 'Customer stories',
    link: '/customer/stories',
  },
  {
    name: 'Sign in',
    link: '/auth/sign-in'
  },
  {
    name: 'Sign up',
    link: '/auth/sign-up',
  },
]

export const communityLinks: FooterLinkType[] = [
  {
    name: "Documents",
  },
  {
    name: "Supports",
    icon: BsBoxArrowUpRight
  },
  {
    name: "Faqs",
    link: "/faq"
  },
  {
    name: "Privacy Policy",
  },
  {
    name: "News and blogs",
    link: "/blog/grid"
  },
  {
    name: "Terms & condition",
    link: "/terms-conditions"
  },
]

export const communityLinks2 = [
  {
    title: "Documentation",
    icon: BsFileEarmarkTextFill,
    variant: "bg-warning",
  },
  {
    title: "Snippets",
    icon: BsStickiesFill,
    variant: "bg-success",
  },
  {
    title: "Components",
    icon: BsPuzzleFill,
    variant: "bg-info",
  }
]

export const socialMediaLinks: SocialMediaLink[] = [
  { icon: FaFacebookF, iconClassName: "bg-facebook", link: "https://www.facebook.com/people/Prompt-Tax/61583378520517/" },
  { icon: FaInstagram, iconClassName: "bg-instagram", link: "https://www.instagram.com/prompttax/" },
  { icon: FaLinkedinIn, iconClassName: "bg-linkedin", link: "https://www.linkedin.com/company/prompttax/" },
]

export const contactDetail = {
  address: "931 NE 199TH ST APT 203 Miami, FL, United States, Florida 33179",
  contact: "786 600 3010",
  email: "hi@prompt.tax",
  weekDays: "Mon - Fri: 09:00 - 21:00",
  weekEnds: "Sat - Sun: Closed"
}

export const contactDetails2: ContactType[] = [
  {
    title: 'Give us a call',
    icon: BsTelephone,
    description: contactDetail.contact
  },
  {
    title: 'Send us an email',
    icon: BsEnvelope,
    description: contactDetail.email,
  },
  {
    title: 'Visit us in',
    icon: BsGeoAlt,
    description: contactDetail.address
  }
]

export const translationLanguages: LanguageType[] = [
  { name: 'English', flag: flagUS },
  { name: 'Español', flag: flagSP },
  { name: 'English (UK)', flag: flagUK },
]