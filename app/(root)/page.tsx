import dynamic from "next/dynamic";
const CertificatesPage = dynamic(() => import("./components/CertificatesPage"));
const HomePage = dynamic(() => import("./components/HomePage"));
const ProjectsPage = dynamic(() => import("./components/ProjectsPage"));
const SkillsPage = dynamic(() => import("./components/SkillsPage"));

export default function Home() {
  return (
    <main className="bg-slate-900 sm:px-8 px-5 pb-20 lg:px-20 md:px-10 text-white flex flex-col min-h-[calc(100vh-5rem)] gap-20 items-center justify-center">
      <HomePage />
      <SkillsPage />
      <ProjectsPage />
      <CertificatesPage />
    </main>
  );
}
