// TodoList.js (buggy)
const TodoList = ({ todos }) => {
  return (
    <ul>
      {todos.map((t, i) => (
        <li key={i}>{t}</li>
      ))}
    </ul>
  );
};

export default TodoList;
