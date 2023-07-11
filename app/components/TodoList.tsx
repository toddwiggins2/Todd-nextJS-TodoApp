"use client";
import { TodoItem } from "./TodoItem";

export const TodoList = ({
  tasks,
  delTask,
  toggleInProgress,
  toggleIsDone,
}: {
  tasks: any;
  delTask: any;
  toggleInProgress: any;
  toggleIsDone: any;
}) => {
  return (
    <div>
      <h1 className="p-2 flex justify-center place-items-center">TaskList</h1>
      {tasks
        .sort((a: any, b: any) => b.id - a.id)
        .map((task: any) => (
          <TodoItem
            key={task.id}
            task={task}
            delTask={delTask}
            toggleInProgress={toggleInProgress}
            toggleIsDone={toggleIsDone}
          />
        ))}
    </div>
  );
};

export default TodoList;
