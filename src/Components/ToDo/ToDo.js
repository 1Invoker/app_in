import React, { useState } from 'react';
import './ToDo.css';

const ToDo = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [searchTitle, setSearchTitle] = useState('');

  const handleInputChange = e => {
    setInputValue(e.target.value);
  };
  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, inputValue.trim()]);
      setInputValue('');
    }
  };
  const deleteTodo = indexToDel => {
    const updateToDos = todos.filter((todo, index) => index !== indexToDel);
    setTodos(updateToDos);
  };

  const updateSearch = todos.filter(todo =>
    todo.toLowerCase().includes(searchTitle.toLowerCase()),
  );
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
