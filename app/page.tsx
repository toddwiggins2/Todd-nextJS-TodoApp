"use client";
import { AddNewTodo } from "./components/AddNewTodo";
import { TodoList } from "./components/TodoList";
import { EditTodo } from "./components/EditTodo";
import useLocalStorage from "./hooks/useLocalStorage";
import { useEffect, useState } from "react";

export default function Home() {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  //
  const [tasks, setTasks] = useLocalStorage("react-todo.tasks", []);

  const [editedTask, setEditedTask] = useState<any>(null);
  const [isEditing, setIsEditing] = useState<any>(false);
  const [previousFocusEl, setPreviousFocusEl] = useState<any>(null);

  const addTask = (task: any) => {
    setTasks((prevState: any) => [...prevState, task]);
    console.log(task);
  };

  const delTask = (id: any) => {
    setTasks((prevState: any) => prevState.filter((t: any) => t.id !== id));
  };

  const toggleInProgress = (id: any) => {
    setTasks((prevState: any) =>
      prevState.map((t: any) =>
        t.id === id ? { ...t, inProgress: !t.inProgress } : t
      )
    );
  };

  const toggleIsDone = (id: any) => {
    setTasks((prevState: any) =>
      prevState.map((t: any) => (t.id === id ? { ...t, isDone: !t.isDone } : t))
    );
  };

  const updateTask = (task: any) => {
    setTasks((prevState: any) =>
      prevState.map((t: any) =>
        t.id === task.id ? { ...t, name: task.name } : t
      )
    );
    closeEditMode();
  };

  const closeEditMode = () => {
    setIsEditing(false);
    previousFocusEl.focus();
  };

  const enterEditMode = (task: any) => {
    setEditedTask(task);
    setIsEditing(true);
    setPreviousFocusEl(document.activeElement);
  };

  return (
    <>
      <div className="flex flex-col justify-center justify-items-center justify-self-stretch max-w-[1240px] sm:min-w-[580px] md:min-w-[750px] lg:min-w[976px] xl:min-w-[1080px]">
        <div className="flex justify-center">
          {isEditing && (
            <EditTodo
              editedTask={editedTask}
              updateTask={updateTask}
              closeEditMode={closeEditMode}
            />
          )}

          <div className="flex justify-center p-7 w-full m-2 dark:bg-violet-400 dark:text-slate-800">
            <h1 className="text-6xl tracking-wide align-middle font-serif ">
              Todo List
            </h1>
          </div>
        </div>
        <div>
          <AddNewTodo addTask={addTask} />

          {tasks && domLoaded && (
            <TodoList
              tasks={tasks}
              delTask={delTask}
              toggleInProgress={toggleInProgress}
              toggleIsDone={toggleIsDone}
              enterEditMode={enterEditMode}
            />
          )}
        </div>
        <div className="flex flex-col">
          {/* <label className="m-2" htmlFor="notes">
            Notes
          </label> */}
          <textarea
            className="mx-2 p-1 dark:placeholder:text-slate-800 dark:bg-teal-200 dark:text-slate-800"
            name="notes"
            id="notes"
            placeholder="Notes:"
            rows={10}
          />
        </div>
      </div>
    </>
  );
}
