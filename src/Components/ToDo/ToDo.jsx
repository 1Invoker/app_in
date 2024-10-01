import React, { useState } from 'react';
import './ToDo.css';
import { useToDo } from './useToDo';

const ToDo = () => {
  const {
    handleInputChange,
    handleAddTodo,
    deleteTodo,
    todos: updateSearch,
    inputValue,
    searchTitle,
    setSearchTitle,
    setInputValue,
  } = useToDo();
  return (
    <div className="todo-container">
      <h1>Todo List</h1>
      <div className="input-container">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Add a new todo..."
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <div className="search-container">
        <input
          type="text"
          value={searchTitle}
          onChange={e => setSearchTitle(e.target.value)}
          placeholder="Search by title..."
        />
      </div>
      <ul>
        {updateSearch.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ToDo;
