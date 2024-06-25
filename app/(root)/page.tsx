import AboutPage from "./components/AboutPage";
import ContactUsPage from "./components/ContactUsPage";
import HomePage from "./components/HomePage";
import ProjectsPage from "./components/ProjectsPage";
import SkillsPage from "./components/SkillsPage";

export default function Home() {
  return (
    <main className="bg-slate-900 p-3 lg:p-8 md:p-6 text-white flex flex-col min-h-[calc(100vh-5rem)] gap-10 items-center justify-center">
      <HomePage/>
      <AboutPage/>
      <ProjectsPage/>
      <SkillsPage/>
      <ContactUsPage/>
    </main>
  );
}
