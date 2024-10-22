import React, { useState, useEffect } from 'react';
import './ToDo.css';
import { useToDo } from './useToDo';
import { Reorder } from 'framer-motion';

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
  const [items, setItems] = useState(updateSearch);
  useEffect(() => {
    setItems(updateSearch);
  }, [updateSearch]);
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
      <Reorder.Group axis="y" onReorder={setItems} values={items}>
        <ul>
          {items.map((todo, index) => (
            <Reorder.Item key={index} value={todo}>
              <li className="todo-elem">
                {todo}
                <button onClick={() => deleteTodo(index)}>Delete</button>
              </li>
            </Reorder.Item>
          ))}
        </ul>
      </Reorder.Group>
    </div>
  );
};
export default ToDo;
