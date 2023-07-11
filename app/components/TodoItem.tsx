import React, { useState } from "react";

export const TodoItem = ({
  task,
  delTask,
  toggleInProgress,
  toggleIsDone,
}: {
  task: any;
  delTask: any;
  toggleInProgress: any;
  toggleIsDone: any;
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
    <li className="m-2 flex justify-between items-baseline border">
      {/* LeftSide */}
      <div>
        <label htmlFor="">In Progress:</label>
        <input
          className="m-2"
          type="checkbox"
          checked={inProgress}
          name={task.name}
          id={task.id}
          onChange={handleInProgress}
          value="In Progress"
        ></input>
        <label htmlFor="">Is Done:</label>
        <input
          className="m-2"
          type="checkbox"
          checked={isDone}
          name={task.name}
          id={task.id}
          onChange={handleIsDone}
          value="In Progress"
        ></input>
      </div>

      {/* Middle */}
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

      {/* //RightSide */}
      <div>
        <button className="p-2 ml-2 shadow-xl dark:border">Edit</button>
        <button
          className="p-2 m-2 text-red-500 shadow-xl dark:border"
          onClick={() => delTask(task.id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
