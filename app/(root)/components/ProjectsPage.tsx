import Project from "./Project"

const ProjectsPage = () => {
    const projects = [
      {
        title: "Ecommerce CMS",
        description:
          "An Ecommerce CMS using Nextjs, ClerkAuth, MySQL, Cloudinary, ShadCn ,to add or remove products to the ecommerce store",
        tech: [
          "Typescript",
          "Nextjs",
          "TailwindCSS",
          "ShadcnUI",
          "MySQL",
          "Prsma ORM",
        ],
        imageUrl: "/CMS.png",
        githubLink: "https://github.com/devMukulSingh/EcommerceCMS",
        hostedLink: "https://cmsecomm.vercel.app/",
      },
      {
        title: "ChatNext",
        description:
          "A real time chat app using web-sockets for chatting and sending images",
        tech: [
          "Typescript",
          "Nextjs",
          "ExpressJs",
          "TailwindCSS",
          "MongoDB",
          "Prsma ORM",
        ],
        imageUrl: "/chatNext.png",
        githubLink: "https://github.com/devMukulSingh/chatNextClient",
        hostedLink: "https://chat-next-client.vercel.app/",
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
  return (
    <div className='min-h-screen flex flex-col gap-5  w-full sm:w-3/4'>
            <h1 className="text-4xl font-semibold">
                Projects
            </h1>
        <div className="flex flex-col gap-5 ">
            {
                projects.map( (project,index) => (
                    <Project key={index} project={project}/>
                ))
            }
        </div>
    </div>
  )
}

export default ProjectsPage