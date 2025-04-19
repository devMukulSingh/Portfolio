import { MailIcon, PhoneCall, StickyNote } from "lucide-react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaHackerrank } from "react-icons/fa";

export const resumeLink = "https://drive.google.com/file/d/1A2-oDrZI8sJ2LxtRFPOR-LK-KBBAxnO-/view?usp=sharing"

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
        title: "mukulsingh2276@gmail.com",
    },

    {
        icon: PhoneCall,
        title: "+91 9808273072",
    },

];

export const skills = [
    {
        url: "/typescript2.png",
        link: "https://www.typescriptlang.org",
        title: "Typescript"
    },
    {
        url: "/golang.png",
        link: "https://go.dev/",
        title: "Golang"
    },
    {
        url: "/react.png", link: "https://react.dev/",
        title: "React JS"
    },
    {
        url: "/tailwind.png", link: "https://tailwindcss.com/",
        title: "Tailwind CSS"
    },
    {
        url: "/next.png", link: "https://nextjs.org/",
        title: "Next JS"
    },
    {
        url: "/shadcn.png", link: "https://ui.shadcn.com/",
        title: "Shadcn UI"
    },
    {
        url: "/hono.jfif",
        link: "https://hono.dev/",
        title: "Hono JS"
    },
    {
        url: "/express-js.png", link: "http://expressjs.com/",
        title: "Express JS"
    },
    {
        url: "/node.png", link: "https://nodejs.org/",
        title: "Node JS"
    },
    {
        url: "/prisma.jpg", link: "https://www.prisma.io/",
        title: "Prisma ORM"
    },
    {
        url: "/sqlc.png",
        link: "https://sqlc.dev/",
        title: "Sqlc"
    },
    {
        url: "/docker.png",
        link: "https://www.docker.com/",
        title: "Docker"
    },

    {
        url: "/postresql.png",
        link: "https://www.postgresql.org/",
        title: "Postresql"
    },
    {
        url: "/redis.png",
        link: "https://redis.io/",
        title: "Redis"
    },
    {
        url: "/mongodb.png", link: "https://www.mongodb.com/",
        title: "MongoDB"
    },
];

export const projects = [

    {
        title: "Bill Pilot",
        description:
            "A High-performance Invoice Management SaaS for small business owners, ensuring robust and scalable handling of invoices",
        tech: [
            "Typescript",
            "RemixJS",
            "TailwindCSS",
            "ShadcnUI",
            "PostresSQL",
            "SQLC",
            "Golang",
            "GoFiber"
        ],
        imageUrl: "/invoice_management.png",
        githubLink: "https://github.com/devMukulSingh/billManagementClient",
        githubLink2: "https://github.com/devMukulSingh/billManagementServer",
        hostedLink: "https://invoice-management-c.vercel.app/",
    },
    {
        title: "PrintNext",
        description: "A High performance Saas app for making customisable collages, passport photos, cropping pdfs, aadhar, ayushman and printing the same",
        tech: ["Typescript", "Next Js", "TailwindCSS", "ShadcnUI", "Hono JS", "MongoDB", "Canvas-api"],
        imageUrl: "/print_next2.png",
        githubLink: "https://github.com/devMukulSingh/printNext",
        hostedLink: "https://image-formatter.vercel.app/",
    },
    {
        title: "Resume builder",
        description:
            "A resume builder integrated with AI suggestions for building professional resume",
        tech: [
            "Typescript",
            "Nextjs",
            "ChatGPT-api",
            "TailwindCSS",
            "ShadcnUI",
        ],
        imageUrl: "/resumeBuilder.png",
        githubLink: "https://github.com/devMukulSingh/rangamResBuilder.git",
        hostedLink: "https://rangam-res-builder.vercel.app/",
    },
];

export const certificates = [
    {
        title: "Frontend Developer (React)",
        imgSrc: "/frontend_cert.png",
        siteLink:"https://www.hackerrank.com/certificates/968c33beedc5"
    },
    {
        title: "Javascript",
        imgSrc: "/javascript_cert.png",
        siteLink: "https://www.hackerrank.com/certificates/5bf2d81a4cc6"
    },
    {
        title: "SQL",
        imgSrc: "/sql_cert.png",
        siteLink: "https://www.hackerrank.com/certificates/026c85924dd5"
    }, 
    {
        title: "React",
        imgSrc: "/react_cert.png",
        siteLink: "https://www.hackerrank.com/certificates/c5b1032ea9af"
    },
    {
        title: "CSS",
        imgSrc: "/css_cert.png",
        siteLink: "https://www.hackerrank.com/certificates/0a7e800a99b9"
    }
]
export type TCertificate = typeof certificates[0]

export type TProject = typeof projects[0]

export type TSkill = typeof skills[0];

