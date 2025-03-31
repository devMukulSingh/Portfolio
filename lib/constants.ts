import { MailIcon, PhoneCall, StickyNote } from "lucide-react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaHackerrank } from "react-icons/fa";

export const profileLinks = [
    {
        icon: BsGithub,
        link: "https://github.com/devMukulSingh",
        title: "Github"
    },
    {
        icon: FaHackerrank,
        link: "https://www.hackerrank.com/profile/mukulsingh2276",
        title: "HackerRank"
    },
    {
        icon: StickyNote,
        link: "https://drive.google.com/file/d/1A2-oDrZI8sJ2LxtRFPOR-LK-KBBAxnO-/view?usp=sharing",
        title: "CV/Resume"
    },
    {
        icon: BsLinkedin,
        link: "https://linkedin.com/in/mukul-singh-bisht-36a80428b",
        title: "LinkedIn"
    },
]


export const contactLinks = [

    {
        icon: MailIcon,
        link: "mukulsingh2276@gmail.com",
        title: "E-mail"
    },

    {
        icon: PhoneCall,
        link: "+91 9808273072",
        title: "Mobile"
    },

];