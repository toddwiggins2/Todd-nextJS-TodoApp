"use client";
import React, { useEffect, useState } from "react";

export const EditTodo = ({
  editedTask,
  updateTask,
  closeEditMode,
}: {
  editedTask: any;
  updateTask: any;
  closeEditMode: any;
}) => {
  //useState for to store the edited task name
  const [editedTaskName, setEditedTaskName] = useState(editedTask.name);

  //useEffect close the edit box if the div loses focus or esc key is pressed
  useEffect(() => {
    const closeModalIfEscaped = (e: any) => {
      e.key === "Escape" && closeEditMode;
    };

    window.addEventListener("keydown", closeModalIfEscaped);

    return () => {
      window.removeEventListener("keydown", closeModalIfEscaped);
    };
  }, [closeEditMode]);

  //update task with the edited name property
  const handleTask = (e: any) => {
    //Prevent the page from reloading
    e.preventDefault();
    //push in all the values for the task and update the name value to the new edited name.
    updateTask({ ...editedTask, name: editedTaskName });
  };

  return (
    <>
      <div className="absolute backdrop-blur-md">
        <div
          className=" bg-slate-600/60 dark:bg-slate-600/20 h-screen w-screen p-2 left-0 right-0 grid items-center"
          //On Click to handle if the area outside the editbox is clicked
          onClick={(e: any) => {
            e.target === e.currentTarget && closeEditMode();
          }}
        >
          <div className="flex justify-center justify-items-center justify-self-center max-w-[1240px]">
            <form className="" onSubmit={handleTask}>
              <div className="w-full dark:bg-slate-700 border-2 rounded dark:border-green-300 flex justify-between min-w-[370px] sm:min-w-[580px] md:min-w-[750px] lg:min-w[976px] xl:min-w-[1080px] p-2 justify-items-center">
                {/* Input Field, on input change update the editedTaskName state to the new value of the input */}
                <input
                  className="p-2 w-full rounded border-gray-100 border dark:bg-slate-700"
                  type="text"
                  id="editTask"
                  placeholder="Todo Item"
                  value={editedTaskName}
                  onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setEditedTaskName(e.target.value)
                  }
                  required
                />
                {/* Button to update the name calls onSubmit={handleTask} because form*/}
                <button className="ml-2 p-2 border rounded text-black bg-teal-400 dark:text-white dark:border-green-400 px-2 hover:scale-110 dark:bg-slate-700">
                  Update
                </button>
                {/* Button to cancel out of the edit, calls closeEditMode function to set the boolean values correctly. */}
                <button
                  className="ml-2 p-2 border rounded bg-blue-500 text-white hover:scale-110 dark:bg-slate-700"
                  onClick={() => closeEditMode()}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditTodo;
