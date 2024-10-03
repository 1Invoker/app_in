import { useState, useCallback, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, removeTodo } from '../../Redux/Slice';
export const useToDo = () => {
  const [inputValue, setInputValue] = useState('');
  const [searchTitle, setSearchTitle] = useState('');
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todo.todos);

  const handleInputChange = useCallback(e => {
    setInputValue(e.target.value);
  }, []);
  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      dispatch(addTodo(inputValue.trim()));
      setInputValue('');
    }
  };
  const deleteTodo = indexToDel => {
    dispatch(removeTodo(indexToDel));
  };

  const updateSearch = useMemo(() => {
    return todos.filter(todo =>
      todo.toLowerCase().includes(searchTitle.toLowerCase()),
    );
  }, [todos, searchTitle]);
  console.log(todos);
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
