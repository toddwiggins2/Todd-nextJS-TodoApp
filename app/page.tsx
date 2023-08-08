"use client";
import { AddNewTodo } from "./components/AddNewTodo";
import { TodoList } from "./components/TodoList";
import { EditTodo } from "./components/EditTodo";
import useLocalStorage from "./hooks/useLocalStorage";
import { useEffect, useState } from "react";
import TodoNotes from "./components/TodoNotes";

export default function Home() {
  //Is Dom Loaded to display tasklists to avoid hydration errors
  const [domLoaded, setDomLoaded] = useState(false);
  useEffect(() => {
    setDomLoaded(true);
  }, []);

  //LocalStorage
  const [tasks, setTasks] = useLocalStorage("react-todo.tasks", []);
  const [notes, setNotes] = useLocalStorage("notes.tasks", "");

  //Use State
  const [editedTask, setEditedTask] = useState<any>(null);
  const [isEditing, setIsEditing] = useState<any>(false);
  const [previousFocusEl, setPreviousFocusEl] = useState<any>(null);

  //Add Task function, inputs into array and adds new tasks to the array if array already exists
  const addTask = (task: any) => {
    setTasks((prevState: any) => [...prevState, task]);
    console.log(task);
  };

  //Delete Tasks from the array based on the ID of the array item
  const delTask = (id: any) => {
    setTasks((prevState: any) => prevState.filter((t: any) => t.id !== id));
  };

  //Toggle In Progress for checkbox maps over items till the ID matches and then updates the InProgress boolean to opposite of value.
  const toggleInProgress = (id: any) => {
    setTasks((prevState: any) =>
      prevState.map((t: any) =>
        t.id === id ? { ...t, inProgress: !t.inProgress } : t
      )
    );
  };

  //Toggle isDone for checkbox, maps over items till the ID matches and then updates the isDone boolean to opposite of value.
  const toggleIsDone = (id: any) => {
    setTasks((prevState: any) =>
      prevState.map((t: any) => (t.id === id ? { ...t, isDone: !t.isDone } : t))
    );
  };

  //Updates the task Name for the Edit module. Loops over the array until it matches on the ID and updates the Name
  const updateTask = (task: any) => {
    setTasks((prevState: any) =>
      prevState.map((t: any) =>
        t.id === task.id ? { ...t, name: task.name } : t
      )
    );
    closeEditMode();
  };

  //Simple function to handle setting the isEditing boolean to false when closing and refocus the last edit button element
  const closeEditMode = () => {
    setIsEditing(false);
    previousFocusEl.focus();
  };

  //Toggle for being in edit mode sets the task to be edited and changes editing boolean to true, logs focus element.
  const enterEditMode = (task: any) => {
    setEditedTask(task);
    setIsEditing(true);
    setPreviousFocusEl(document.activeElement);
  };

  return (
    <>
      <div className="flex flex-col justify-center justify-items-center justify-self-stretch max-w-[1240px] w-screen sm:min-w-[580px] md:min-w-[750px] lg:min-w[976px] xl:min-w-[1080px]">
        <div className="flex justify-center">
          {/* makes sure that isEditing is true before rendering the EditTodo Component */}
          {isEditing && (
            <EditTodo
              editedTask={editedTask}
              updateTask={updateTask}
              closeEditMode={closeEditMode}
            />
          )}
          {/* Todo List Banner */}
          <div className="flex justify-center p-7 w-full  xl:rounded mb-2 bg-red-400 dark:bg-violet-400 dark:text-slate-800">
            <h1 className="text-6xl tracking-wide align-middle font-bold uppercase ">
              Todo List
            </h1>
          </div>
        </div>
        <div>
          {/* AddNewTodo Component pass addTask prop */}
          <AddNewTodo addTask={addTask} />
          {/* Make sure there are tasks and that the dom is fully loaded before rendering TodoList makes sure there are no Hydration errors */}
          {tasks && domLoaded && (
            <TodoList
              tasks={tasks}
              delTask={delTask}
              toggleInProgress={toggleInProgress}
              toggleIsDone={toggleIsDone}
              enterEditMode={enterEditMode}
            />
          )}
          {/* Render TodoNotes component pass props */}
          <TodoNotes notes={notes} setNotes={setNotes} />
        </div>
      </div>
    </>
  );
}
