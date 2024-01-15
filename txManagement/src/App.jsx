import NewProjectScreen from "./components/NewProjectScreen";
import ProjectSidebar from "./components/ProjectSidebar";

function App() {
  return (
    <main className="h-screen pt-8  flex gap-8">
     <ProjectSidebar/>
     <NewProjectScreen/>
    </main>
  );
}

export default App;
