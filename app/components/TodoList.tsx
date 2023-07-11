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
        <ul>
          {/* List that maps over all the tasks in the tasks array */}
          {tasks
            .sort((a: any, b: any) => b.id - a.id)
            .map((task: any) => (
              // send Individual tasks to the TodoItem component for display and styling, pass props to item.
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
