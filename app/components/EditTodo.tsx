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
  const [editedTaskName, setEditedTaskName] = useState(editedTask.name);

  useEffect(() => {
    const closeModalIfEscaped = (e: any) => {
      e.key === "Escape" && closeEditMode;
    };

    window.addEventListener("keydown", closeModalIfEscaped);

    return () => {
      window.removeEventListener("keydown", closeModalIfEscaped);
    };
  }, [closeEditMode]);

  const handleTask = (e: any) => {
    e.preventDefault();
    updateTask({ ...editedTask, name: editedTaskName });
  };

  return (
    <>
      <div className="absolute backdrop-blur-md">
        <div
          className=" bg-slate-600/20 h-screen w-screen p-2 left-0 right-0 grid items-center"
          onClick={(e: any) => {
            e.target === e.currentTarget && closeEditMode();
          }}
        >
          <div className="flex justify-center justify-items-center justify-self-center max-w-[1240px]">
              <form className="" onSubmit={handleTask}>
                <div className="w-full dark:bg-slate-700 border-2 border-green-300 flex justify-between min-w-[370px] sm:min-w-[580px] md:min-w-[750px] lg:min-w[976px] xl:min-w-[1080px] p-2 justify-items-center">
                  <input
                    className="p-2 w-full border-gray-100 border dark:bg-slate-700"
                    type="text"
                    id="editTask"
                    placeholder="Todo Item"
                    value={editedTaskName}
                    onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setEditedTaskName(e.target.value)
                    }
                    required
                  />
                  <button
                    className=" ml-2 p-2 border border-green-400 px-2 hover:scale-110 dark:bg-slate-700"
                    //   onClick={() => handleTask()}
                  >
                    Update
                  </button>
                  <button
                    className=" ml-2 p-2 border px-2 hover:scale-110 dark:bg-slate-700"
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
