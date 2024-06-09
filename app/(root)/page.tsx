import AboutPage from "./components/AboutPage";
import HomePage from "./components/HomePage";
import ProjectsPage from "./components/ProjectsPage";
import SkillsPage from "./components/SkillsPage";

export default function Home() {
  return (
    <main className="bg-slate-900 text-white flex flex-col min-h-[calc(100vh-5rem)] items-center justify-center">
      <HomePage/>
      <AboutPage/>
      <ProjectsPage/>
      <SkillsPage/>
      
    </main>
  );
}
