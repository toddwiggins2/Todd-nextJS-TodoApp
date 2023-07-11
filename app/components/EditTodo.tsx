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
    <div onClick={(e:any) => {e.target === e.currentTarget && closeEditMode()}}>
      <form
        className="flex justify-center place-items-center"
        onSubmit={handleTask}
      >
        <div>
          <input
            className="m-2 p-2 border-gray-700 border dark:bg-slate-700"
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
            className="p-2 border border-gray-700 px-2 hover:scale-110"
            //   onClick={() => handleTask()}
          >
            Update
          </button>
        </div>
      </form>
    </div>
    </>
  );
};

export default EditTodo;
