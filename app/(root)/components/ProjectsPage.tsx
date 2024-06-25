'use client'
import { useAppDispatch } from "@/redux/hooks/hook";
import Project from "./Project"
import { useEffect, useRef } from "react";
import { setProjectRef } from "@/redux/rootReducer";

const ProjectsPage = () => {
    const dispatch = useAppDispatch();
    const projectRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
      dispatch(setProjectRef(projectRef));
    }, []);
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
        title: "Ecommerce store integrated with CMS",
        description: "An Ecommerce store ",
        tech: ["Typescript", "Nextjs", "TailwindCSS", "ShadcnUI"],
        imageUrl: "/ecommStore.png",
        githubLink: "https://github.com/devMukulSingh/eCommerceStore.git",
        hostedLink: "https://m-ecom-store.vercel.app/",
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
    <div
      className=" flex flex-col justify-center gap-5 w-full "
      ref={projectRef}
    >
      <h1 className="text-4xl font-semibold text-center">Projects</h1>
      <div className="flex flex-col gap-5 ">
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </div>
  );
}

export default ProjectsPage