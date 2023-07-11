"use client";
import { AddNewTodo } from "./components/AddNewTodo";
import { TodoList } from "./components/TodoList";
import { useState } from "react";

export default function Home() {
  const [tasks, setTasks] = useState<any>([]);

  const addTask = (task: any) => {
    setTasks((prevState:any) => [...prevState, task]);
    console.log(task);
  };

  const delTask = (id: any) => {
    setTasks((prevState:any) => prevState.filter((t:any) => t.id !== id));
  };

  const toggleInProgress = (id: any) => {
    setTasks((prevState:any) =>
      prevState.map((t:any) =>
        t.id === id ? { ...t, inProgress: !t.inProgress } : t
      )
    );
  };

  const toggleIsDone = (id: any) => {
    setTasks((prevState:any) =>
      prevState.map((t:any) => (t.id === id ? { ...t, isDone: !t.isDone } : t))
    );
  };

  return (
    <>
      <div>
        <div>
          <h1>My Tasklist App</h1>
        </div>
        <div>
          <AddNewTodo addTask={addTask} />
          {tasks && (
            <TodoList
              tasks={tasks}
              delTask={delTask}
              toggleInProgress={toggleInProgress}
              toggleIsDone={toggleIsDone}
            />
          )}
        </div>
      </div>
    </>
  );
}
