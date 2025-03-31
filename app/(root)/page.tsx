import { Separator } from "@/components/ui/separator";
import CertificatesPage from "./components/CertificatesPage";
import HomePage from "./components/HomePage";
import ProjectsPage from "./components/ProjectsPage";
import SkillsPage from "./components/SkillsPage";

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
