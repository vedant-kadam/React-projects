import React from "react";
import Tasks from "./Tasks";

const SelectedProjects = ({ project,  deleteProject, onAddTask, onDeleteTask,tasks }) => {
  const formattedDate = new Date(project.dueDate)
    .toLocaleDateString("en-UK", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
    .substring(0, 10);
  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between ">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">
            {project.title}
          </h1>
          <button className="text-stone-100 bg-stone-600 px-2 py-1 rounded-md hover:bg-stone-950" onClick={deleteProject}>
            Delete
          </button>
        </div>
        <p className="mb-4 text-stone-400">{formattedDate}</p>
        <p className="text-stone-600 whitespace-pre-wrap">{project.description}</p>
      </header>
      <Tasks tasks={tasks} addTask={onAddTask} deleteTask = {onDeleteTask}/>
    </div>
  );
};

export default SelectedProjects;
