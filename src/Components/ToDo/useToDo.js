import React, {useState} from 'react';
export const useToDo = () => {
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
  return {
    handleInputChange,
    handleAddTodo,
    deleteTodo,
    todos: updateSearch,
    inputValue,
    searchTitle,
    setSearchTitle,
    setInputValue,
  };
};
