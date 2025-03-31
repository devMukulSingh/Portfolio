'use client'
import { useAppDispatch } from "@/redux/hooks/hook";
import Project from "./Project"
import { useEffect, useRef } from "react";
import { setProjectRef } from "@/redux/rootReducer";
import { projects } from "@/lib/constants";

const ProjectsPage = () => {
    const dispatch = useAppDispatch();
    const projectRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
      dispatch(setProjectRef(projectRef));
    }, []);

  return (
    <div
      className=" flex flex-col justify-center gap-5 w-full items-center "
      ref={projectRef}
    >
      <h1 className="text-4xl sm:text-5xl font-semibold text-center">Projects</h1>
      <div className="flex flex-col gap-5 items-center justify-center w-full">
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </div>
  );
}

export default ProjectsPage