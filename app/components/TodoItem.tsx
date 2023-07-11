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
  const [isDone, setIsDone] = useState(task.isDone);
  const [inProgress, setInProgress] = useState(task.inProgress);

  const handleIsDone = (e: any) => {
    setIsDone(!isDone);
    // setInProgress(false);
    toggleIsDone(task.id);
  };

  const handleInProgress = (e: any) => {
    setInProgress(!inProgress);
    // setIsDone(false);
    toggleInProgress(task.id);
  };

  return (
    <>
    <div className="p-2">
      <li className="flex border justify-between items-center">
        {/* LeftSide */}
        <div className="min-w-[130px] flex flex-col p-2">
          <div className="flex justify-between">
              <label htmlFor={task.id}>In Progress:</label>
              <input
                className="m-2"
                type="checkbox"
                checked={inProgress}
                name={task.name}
                id={task.id}
                onChange={handleInProgress}
                value="In Progress"
              ></input>
          </div>
          <div className="flex justify-between">
              <label htmlFor='isDone'>Is Done:</label>
              <input
                className="m-2"
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
        <div className="flex justify-items-center justify-center justify-self-center">
          {task.isDone ? (
            <label
              className="m-2 font-bold text-red-600 line-through decoration-auto"
              htmlFor={task.id}
            >
              {task.name}
            </label>
          ) : task.inProgress ? (
            <label className="m-2 font-bold text-green-600" htmlFor={task.id}>
              {task.name}
            </label>
          ) : (
            <label className="m-2" htmlFor={task.id}>
              {task.name}
            </label>
          )}
        </div>
        {/* //RightSide */}
        <div className="flex flex-col sm:flex-row">
          <button
            className="min-w-fit p-2 m-2 mb-0 sm:m-2 sm:mr-0 shadow-xl border hover:scale-110"
            onClick={() => enterEditMode(task)}
          >
            Edit
          </button>
          <button
            className="p-2 m-2 text-red-500 shadow-xl border hover:scale-110"
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
