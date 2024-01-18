import { useState } from "react";
import NewProjectScreen from "./components/NewProjectScreen";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSidebar from "./components/ProjectSidebar";
import SelectedProjects from "./components/SelectedProjects";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectsId: undefined,
    projects: [],
    tasks:[],
  });

  function handleAddTask(text){
    const taskID = Math.random();
    const newTask = {
      text:text,
      id:taskID,
      projectId:projectsState.selectedProjectsId
    }
    setProjectsState(prev=>{
      return{
        ...prev,
        tasks:[...prev.tasks,newTask]
      }
    })

  }
  function handleDeleteTask(taskId){
    setProjectsState(prev=>{
      return{
        ...prev,
        tasks:prev.tasks.filter(task=>task.id !== taskId)
      }
    })
  }

  function handleStartAddProject() {
    setProjectsState((prev) => {
      return {
        ...prev,
        selectedProjectsId: null,
      };
    });
  }

  function handleAddProject(newProjectData) {
    // let oldProjectState = [...selectedProjectsId.projects];
    // oldProjectState = [...oldProjectState,data];
    let projectID = Math.random();
    let newProject = { ...newProjectData, id: projectID };

    setProjectsState((prev) => {
      return {
        ...prev,
        projects: [...prev.projects, newProject],
        selectedProjectsId: undefined,
      };
    });
  }

  function handleCancelProjectAdd() {
    setProjectsState((prev) => {
      return {
        ...prev,
        selectedProjectsId: undefined,
      };
    });
  }

  function hadleSelectProject(projectId) {
    setProjectsState((prev) => {
      return {
        ...prev,
        selectedProjectsId: projectId,
      };
    });
  }

  function handleDeleteProject(projectID) {
    
    setProjectsState((prev) => {
      return {
        ...prev,
        selectedProjectsId:undefined,
        projects: prev.projects.filter(project=>project.id !== prev.selectedProjectsId),
      };
    });
  }
  const selectedProject = projectsState.projects.find((project) => {
    return project.id === projectsState.selectedProjectsId;
  });
  let content = (
    <SelectedProjects
      project={selectedProject}
      deleteProject={handleDeleteProject}
      onAddTask = {handleAddTask}
      onDeleteTask = {handleDeleteTask}
      tasks={projectsState.tasks}
    />
  );
  if (projectsState.selectedProjectsId === null) {
    content = (
      <NewProjectScreen
        onNewProjectAdd={handleAddProject}
        onCacelNewProject={handleCancelProjectAdd}
      />
    );
  } else if (projectsState.selectedProjectsId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen pt-8  flex gap-8">
      <ProjectSidebar
        onStartAddProject={handleStartAddProject}
        projects={projectsState.projects}
        hadleSelectProject={hadleSelectProject}
        selectedProjectsId={projectsState.selectedProjectsId}
      />
      {content}
    </main>
  );
}

export default App;
