import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs"
import type { FollowUsType, LocationType, WorkType } from "./types"
import webflowImg from '@/assets/images/elements/webflow.svg'
import bootstrapImg from '@/assets/images/elements/bootstrap.svg'
import githubImg from '@/assets/images/elements/github.svg'
import usflagImg from '@/assets/images/flags/us.svg'


export const followUsIcons: FollowUsType[] = [
  {
    icon: BsFacebook,
    variant: "text-facebook",
    link: "https://www.facebook.com/people/Prompt-Tax/61583378520517/",
  },
  {
    icon: BsInstagram,
    variant: "text-instagram",
    link: "https://www.instagram.com/prompttax/",
  },
  {
    icon: BsLinkedin,
    variant: "text-linkedin",
    link: "https://www.linkedin.com/company/prompttax/",
  },
]

export const works: WorkType[] = [
  {
    image: webflowImg,
    title: 'Webflow templates',
    description: 'The combination of my passion for design'
  },
  {
    image: bootstrapImg,
    title: 'Bootstrap templates',
    description: 'It drew a hill from my the passion for design'
  },
  {
    image: githubImg,
    title: 'Contribute on Github',
    description: 'Supposing so be resolving breakfast am or perfectly.'
  }
]

export const locations: LocationType[] = [
  {
    countryName: 'United States',
    address: "931 NE 199TH ST APT 203 Miami, FL, United States, Florida 33179",
    number: "786 600 3010",
    image: usflagImg,
  }
]
