"use client";
import React, { useState } from "react";
import { PlusIcon } from "@heroicons/react/24/outline";

<svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  strokeWidth={1.5}
  stroke="currentColor"
  className="w-6 h-6"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M12 4.5v15m7.5-7.5h-15"
  />
</svg>;

export const AddNewTodo = ({ addTask }: { addTask: any }) => {
  //useState for task, task will be singular task to be added to tasks array
  const [task, setTask] = useState("");

  const handleTask = (e: any) => {
    //Prevent page from reloading
    e.preventDefault();

    //addTask function passed from page.tsx sets an array from the below form data and default values
    addTask({
      name: task,
      id: Date.now(),
      inProgress: false,
      isDone: false,
    });
    //set the task input back to blank after logging task
    setTask("");
  };

  return (
    <>
      <form className="" onSubmit={handleTask}>
        <div className="flex justify-between min-w-max p-2">
          {/* Input Box for task Name */}
          <input
            className="p-2 w-full dark:border-gray-700 border rounded border-black dark:bg-slate-700"
            type="text"
            id="task"
            placeholder="Todo Item"
            value={task}
            onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
              setTask(e.target.value)
            }
            required
          />
          {/* Add Button to call onSubmit above to push new item to array */}
          <button className=" ml-2 p-2 shadow-xl rounded text-black bg-teal-400 hover:scale-110">
            <PlusIcon className="h-6 w-6" />
          </button>
        </div>
      </form>
    </>
  );
};

export default AddNewTodo;
