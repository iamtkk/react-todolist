/* eslint-disable react/prop-types */
import TodoListItem from "./TodoListItem";

// eslint-disable-next-line react/prop-types
const TodoList = ({ todos, onRemove, onToggle }) => {
  return (
    <div className="min-h-[320px] max-h-[513px] overflow-y-auto">
      {todos.map((todo) => (
        <TodoListItem
          todo={todo}
          key={todo.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default TodoList;
