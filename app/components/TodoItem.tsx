"use client";

import React, { useState } from "react";

export const TodoItem = ({
  task,
  delTask,
  toggleInProgress,
  toggleIsDone,
  enterEditMode,
}: {
  task: any;
  delTask: any;
  toggleInProgress: any;
  toggleIsDone: any;
  enterEditMode: any;
}) => {
  //Handle the states for if the check boxes are checked or not. Initial value comes from the individual array items values.
  const [isDone, setIsDone] = useState(task.isDone);
  const [inProgress, setInProgress] = useState(task.inProgress);

  //handle clicking of isDone checkbox
  const handleIsDone = (e: any) => {
    //flip local state
    setIsDone(!isDone);
    //flip array value
    toggleIsDone(task.id);
  };

  //handle clicking of inProgress checkbox
  const handleInProgress = (e: any) => {
    //flip local state
    setInProgress(!inProgress);
    //flip array value
    toggleInProgress(task.id);
  };

  return (
    <>
      <div className="py-0.5">
        <li className="flex sm:flex-row border-y dark:border-white border-black justify-between items-center">
          {/* LeftSide */}
          <div className="min-w-[130px] flex flex-col px-2 py-1">
            <div className="flex justify-between my-1">
              {/* In Progress Label and input(checkbox) */}
              <label className="" htmlFor={task.id}>In Progress:</label>
              <input
                className="mt-1"
                type="checkbox"
                checked={inProgress}
                name={task.name}
                id={task.id}
                onChange={handleInProgress}
                value="In Progress"
              ></input>
            </div>
            <div className="flex justify-between my-1">
              {/* Is Done Label and input(checkbox) */}
              <label htmlFor="isDone">Done:</label>
              <input
                className="mt-1"
                type="checkbox"
                checked={isDone}
                name={task.name}
                id="isDone"
                onChange={handleIsDone}
                value="Is Done"
              ></input>
            </div>
          </div>
          {/* Middle */}
          {/* Task name. Set styling based on what boxes are checked. inProgress is bold green, Done is Red with strikethrough, untouched is normal text */}
          <div className="flex justify-items-center justify-center justify-self-center">
            {task.isDone ? (
              <label
                className="m-2 font-bold text-red-500 line-through decoration-auto"
                htmlFor={task.id}
              >
                {task.name}
              </label>
            ) : task.inProgress ? (
              <label className="m-2 font-bold text-green-600 dark:text-teal-400" htmlFor={task.id}>
                {task.name}
              </label>
            ) : (
              <label className="m-2" htmlFor={task.id}>
                {task.name}
              </label>
            )}
          </div>
          {/* //RightSide */}
          {/* Two Buttons for Edit and Delete */}
          <div className="flex flex-col sm:flex-row">
            <button
              className="sm:w-[60px] p-1 sm:p-2 m-2 mb-0 sm:m-2 sm:mr-0 shadow-xl rounded bg-blue-500 hover:scale-110"
              //Enter Edit mode pass individual task
              onClick={() => enterEditMode(task)}
            >
              Edit
            </button>
            <button
              className="sm:w-[60px] p-1 sm:p-2 m-2 shadow-xl rounded bg-red-500 hover:scale-110"
              //On click delTask passes individual task ID
              onClick={() => delTask(task.id)}
            >
              Delete
            </button>
          </div>
        </li>
      </div>
    </>
  );
};

export default TodoItem;
