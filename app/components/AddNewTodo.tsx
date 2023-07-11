"use client";
import React, { useState } from "react";

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
            className="p-2 w-full border-gray-700 border dark:bg-slate-700"
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
          <button className=" ml-2 p-2 border px-2 hover:scale-110">Add</button>
        </div>
      </form>
    </>
  );
};

export default AddNewTodo;
