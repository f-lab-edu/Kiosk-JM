import TodoItem from "./TodoItem";

const TodoList = ({ todos, onEdit, onDelete }) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onEdit={() => onEdit(index)}
          onDelete={() => onDelete(index)}
        />
      ))}
    </ul>
  );
};

export default TodoList;
