import AboutPage from "./components/AboutPage";
import HomePage from "./components/HomePage";
import ProjectsPage from "./components/ProjectsPage";

export default function Home() {
  return (
    <main className="flex flex-col min-h-[calc(100vh-5rem)] items-center justify-center">
      <HomePage/>
      <AboutPage/>
      <ProjectsPage/>
    </main>
  );
}
