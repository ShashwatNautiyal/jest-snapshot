import React from 'react';

const Todos = ({ todos }) => {
  if (!todos) {
    return <></>;
  }

  if (todos.length === 0) {
    return <span>Todo list is empty</span>;
  }

  return (
    <div>
      {todos.map((todo) => (
        <h2 key={todo}>{todo}</h2>
      ))}
    </div>
  );
};

export default Todos;
