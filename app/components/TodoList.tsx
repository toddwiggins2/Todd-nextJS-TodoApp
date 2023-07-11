import { TodoItem } from "./TodoItem";

export const TodoList = ({
  tasks,
  delTask,
  toggleInProgress,
  toggleIsDone,
  enterEditMode,
}: {
  tasks: any;
  delTask: any;
  toggleInProgress: any;
  toggleIsDone: any;
  enterEditMode: any;
}) => {
  return (
    <>
      <div>
        {/* <h1 className="p-2 text-lg flex justify-center place-items-center">
          TaskList Items:
        </h1> */}
        <ul>
          {tasks
            .sort((a: any, b: any) => b.id - a.id)
            .map((task: any) => (
              <TodoItem
                key={task.id}
                task={task}
                delTask={delTask}
                toggleInProgress={toggleInProgress}
                toggleIsDone={toggleIsDone}
                enterEditMode={enterEditMode}
              />
            ))}
        </ul>
      </div>
    </>
  );
};

export default TodoList;
