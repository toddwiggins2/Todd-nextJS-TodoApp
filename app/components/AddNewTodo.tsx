"use client";
import React, { useState } from "react";

export const AddNewTodo = ({ addTask }: { addTask: any }) => {
  const [task, setTask] = useState("");

  const handleTask = (e: any) => {
    e.preventDefault();

    addTask({
      name: task,
      id: Date.now(),
      inProgress: false,
      isDone: false,
    });

    setTask("");
  };

  return (
    <form
      className="flex justify-center place-items-center"
      onSubmit={handleTask}
    >
      <div>
        <input
          className="m-2 p-2 border-gray-700 border dark:bg-slate-700"
          type="text"
          id="task"
          placeholder="Todo Item"
          value={task}
          onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTask(e.target.value)
          }
          required
        />
        <button
          className="p-2 border border-gray-700 px-2 hover:scale-110"
          //   onClick={() => handleTask()}
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default AddNewTodo;
